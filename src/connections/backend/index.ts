/* eslint-disable */
import {
  AxiosResponse,
} from 'axios';
import EventEmitter from 'eventemitter3';
import {
  ExtendedAxios,
} from 'utils';
import {
  ExtendedAxiosRequestConfig,
  ExtendedAxiosResponse,
  ExtendedAxiosError,
} from 'connections';
import {
  Settings,
} from 'settings';

export enum AuthStatus {
  AUTHORIZED,
  AUTHORIZING,
  UNAUTHORIZED,
}
export class BackendAxios extends ExtendedAxios {
  getAccessToken: () => string = () => '';

  getRefreshToken: () => string = () => '';

  setAccessToken: (token: string) => void = () => null;

  setRefreshToken: (token: string) => void = () => null;

  refresh: (config?: ExtendedAxiosRequestConfig) => Promise<ExtendedAxiosResponse>;

  logout: () => void = () => null;

  updateTokenHeader = (token: string) => {
    this.updateDefaultHeaders({
      Authorization: `Bearer ${token}`,
    });
  };
}

export const backendAxiosFactory = () => {
  const MAXIMUM_RETRIES_COUNT = 3;
  const DELAY_MILLISECONDS = 1000;

  const setBaseURL = () => Settings.config.BASE_URL;
  const baseURL = setBaseURL();

  const backendAxios = new BackendAxios({
    axiosRequestConfig: {
      baseURL,
      timeout: 100000000,
    },
    defaultParams: {},
  });

  let authStatus: AuthStatus = AuthStatus.AUTHORIZED;
  const authEvent = new EventEmitter();

  authEvent.on('change', (value: AuthStatus) => {
    authStatus = value;
  });

  const requestSuccessInterceptor = (async (value: ExtendedAxiosRequestConfig) => {
    // if token is refreshing await the refresh process before dispathing the request
    if (authStatus === AuthStatus.AUTHORIZING) {
      if (value.isRefreshing) {
        return value;
      }
      try {
        await new Promise((res, rej) => {
          authEvent.on('change', (authValue: AuthStatus) => {
            if (authValue === AuthStatus.AUTHORIZED) {
              res();
            } else if (authValue === AuthStatus.UNAUTHORIZED) {
              rej(new Error('UNAUTHORIZED'));
            }
          });
        });
        value.headers.Authorization = `Bearer ${backendAxios.getAccessToken()}`;
        return value;
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return value;
  });
  backendAxios.instance.interceptors.request.use(requestSuccessInterceptor);

  const fixRemainingRetries = (remainingRetries: number | undefined) => {
    if (remainingRetries !== null && remainingRetries !== undefined) {
      return remainingRetries;
    }
    return MAXIMUM_RETRIES_COUNT - 1;
  };

  const retryRequest = async (config: ExtendedAxiosRequestConfig): Promise<ExtendedAxiosResponse<any>> => {
    const result = await new Promise<AxiosResponse<any>>((res) => {
      setTimeout(() => {
        config.remainingRetries = fixRemainingRetries(config.remainingRetries) - 1;
        if (config.isRefreshing) {
          config.headers.Authorization = `Bearer ${backendAxios.getRefreshToken()}`;
        } else {
          config.headers.Authorization = `Bearer ${backendAxios.getAccessToken()}`;
        }
        res(backendAxios.instance(config));
      }, DELAY_MILLISECONDS);
    });
    return result;
  };

  // eslint-disable-next-line consistent-return
  const processFailedRequest = async (error: ExtendedAxiosError): Promise<any> => {
    const remainingRetries = fixRemainingRetries(error.config.remainingRetries);
    if (!remainingRetries) {
      if (error.config.isRefreshing) {
        authEvent.emit('change', AuthStatus.UNAUTHORIZED);
        backendAxios.logout();
      }
      return Promise.reject(error);
    }
    // if response status is UNAUTHORIZED
    if (error.response && error.response.status === 401) {
      // if refresh access token process is in progress
      if (authStatus === AuthStatus.AUTHORIZING) {
        if (error.config.isRefreshing) {
          // if this is the refresh access token request
          // logout and return promise rejection
          authEvent.emit('change', AuthStatus.UNAUTHORIZED);
          backendAxios.logout();
          return Promise.reject(error);
        }
        // if this is any other request
        // wait until refresh has ended
        try {
          await new Promise((res, rej) => {
            authEvent.on('change', (authValue: AuthStatus) => {
              if (authValue === AuthStatus.AUTHORIZED) {
                res();
              } else if (authValue === AuthStatus.UNAUTHORIZED) {
                rej(new Error('UNAUTHORIZED'));
              }
            });
          });
        } catch (error2) {
          return Promise.reject(error2);
        }
        // then retry request
        try {
          const response = await retryRequest(error.config);
          return Promise.resolve(response);
        } catch (error2) {
          const result = await processFailedRequest(error2);
          return result;
        }
      } else if (authStatus === AuthStatus.AUTHORIZED) {
        // if access token expired or is not working anymore
        // change authstatus to authorizing
        authEvent.emit('change', AuthStatus.AUTHORIZING);
        const config: ExtendedAxiosRequestConfig = {
          isRefreshing: true,
          originalRequest: error.config,
        };
        try {
          await backendAxios.refresh(config);
          authEvent.emit('change', AuthStatus.AUTHORIZED);
        } catch (error2) {
          authEvent.emit('change', AuthStatus.UNAUTHORIZED);
          const result: any = await processFailedRequest(error2);
          return result;
        }
        try {
          const originalResponse = await retryRequest({
            ...error.config,
            headers: {
              Authorization: `Bearer ${backendAxios.getAccessToken()}`,
            },
          } as any);
          return Promise.resolve(originalResponse);
        } catch (error2) {
          return processFailedRequest(error2);
        }
      }
    } else {
      try {
        const response = await retryRequest(error.config);
        return Promise.resolve(response);
      } catch (error2) {
        const result: any = await processFailedRequest(error2);
        return result;
      }
    }
  };

  const responseSuccessInterceptor = (value: AxiosResponse<any>) => value;
  const responseFailureInterceptor = async (error: ExtendedAxiosError) => {
    const result = await processFailedRequest(error);
    return result;
  };
  backendAxios.instance.interceptors.response.use(responseSuccessInterceptor, responseFailureInterceptor);
  /* eslint-enable @typescript-eslint/no-explicit-any */
  return backendAxios;
};
