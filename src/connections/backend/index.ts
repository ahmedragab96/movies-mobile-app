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

  const setBaseURL = () => Settings.config.REACT_APP_BASE_URL;
  const apiKey = () => Settings.config.REACT_APP_MOVIE_API_KEY;
  const baseURL = setBaseURL();

  const backendAxios = new BackendAxios({
    axiosRequestConfig: {
      baseURL,
      timeout: 100000000,
    },
    defaultParams: {},
  });

  const requestSuccessInterceptor = (async (value: ExtendedAxiosRequestConfig) => {
    value.params.api_key = apiKey();
    value.params.language = 'en-US';
    return value;
  });
  backendAxios.instance.interceptors.request.use(requestSuccessInterceptor);

  const responseSuccessInterceptor = (value: AxiosResponse<any>) => value;

  backendAxios.instance.interceptors.response.use(responseSuccessInterceptor);
  /* eslint-enable @typescript-eslint/no-explicit-any */
  return backendAxios;
};
