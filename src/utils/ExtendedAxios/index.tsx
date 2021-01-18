import axios, {
  AxiosRequestConfig,
  AxiosInstance,
} from 'axios';
import {
  ExtendedAxiosConstructor,
  DefaultHeaders,
  ResponseData,
  RequestBody,
  DefaultParams,
  HTTPMethods,
} from './types';

export class ExtendedAxios {
  defaultHeaders: DefaultHeaders = {};

  defaultParams: DefaultParams = {};

  instance: AxiosInstance;

  constructor(constructor: ExtendedAxiosConstructor) {
    const {
      axiosRequestConfig,
      defaultHeaders,
      requestInterceptor,
      responseInterceptor,
      defaultParams,
    } = constructor;
    if (defaultHeaders) {
      this.defaultHeaders = defaultHeaders;
    }
    if (defaultParams) {
      this.defaultParams = defaultParams;
    }
    this.instance = axios.create(axiosRequestConfig);
    if (requestInterceptor) {
      const {
        onFulfilled,
        onRejected,
      } = requestInterceptor;
      this.instance.interceptors.request.use(onFulfilled, onRejected);
    }
    if (responseInterceptor) {
      const {
        onFulfilled,
        onRejected,
      } = responseInterceptor;
      this.instance.interceptors.response.use(onFulfilled, onRejected);
    }
  }

  updateDefaultHeaders(headers: DefaultHeaders) {
    this.defaultHeaders = {
      ...this.defaultHeaders,
      ...headers,
    };
    this.instance.defaults.headers = this.defaultHeaders;
  }

  updateDefaultParams(params: DefaultParams) {
    this.defaultParams = {
      ...this.defaultParams,
      ...params,
    };
  }

  getMethodParams(method: HTTPMethods) {
    const params: Record<string, any> = {};
    Object.entries(this.defaultParams)
      .filter(([, value]) => !value.methods || value.methods.includes(method))
      .forEach(([key, value]) => {
        params[key] = value.value;
      });
    return params;
  }

  processConfig(method: HTTPMethods, config?: AxiosRequestConfig) {
    let configParams = {
      ...this.getMethodParams(method),
    };
    if (config) {
      configParams = {
        ...configParams,
        ...config.params,
      };
    }
    return {
      ...this.defaultHeaders,
      ...config,
      params: configParams,
    };
  }

  async httpGet(requestPath: string, config?: AxiosRequestConfig): Promise<ResponseData> {
    const axiosResponse = await this.instance.get(requestPath, this.processConfig(HTTPMethods.GET, config));
    return axiosResponse.data;
  }

  async httpPost(requestPath: string, data: RequestBody, config?: AxiosRequestConfig): Promise<ResponseData> {
    const axiosResponse = await this.instance.post(requestPath, data, this.processConfig(HTTPMethods.POST, config));
    return axiosResponse.data;
  }

  async httpPut(requestPath: string, data: RequestBody, config?: AxiosRequestConfig): Promise<ResponseData> {
    const axiosResponse = await this.instance.put(requestPath, data, this.processConfig(HTTPMethods.PUT, config));
    return axiosResponse.data;
  }

  async httpDelete(requestPath: string, config?: AxiosRequestConfig): Promise<ResponseData> {
    const axiosResponse = await this.instance.delete(requestPath, this.processConfig(HTTPMethods.DELETE, config));
    return axiosResponse.data;
  }
}

export * from './types';
