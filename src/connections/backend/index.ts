/* eslint-disable */
import {
  AxiosResponse,
} from 'axios';
import {
  ExtendedAxios,
} from 'utils';
import {
  ExtendedAxiosRequestConfig,
} from 'connections';
import {
  Settings,
} from 'settings';

export enum AuthStatus {
  AUTHORIZED,
  AUTHORIZING,
  UNAUTHORIZED,
}

export const backendAxiosFactory = () => {

  const setBaseURL = () => Settings.config.REACT_APP_BASE_URL;
  const apiKey = () => Settings.config.REACT_APP_MOVIE_API_KEY;
  const baseURL = setBaseURL();

  const backendAxios = new ExtendedAxios({
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
  return backendAxios;
};
