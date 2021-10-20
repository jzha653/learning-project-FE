import {create} from 'apisauce';
import ApiConfig from '@config/ApiConfig';

export const headers = {
  Accept: 'application/json',
};

const apiClient = create({
  headers,
  baseURL: ApiConfig.BASE_URL,
  responseType: 'json',
  withCredentials: true,
});

export {apiClient};

export const setAuthToken = (token: string | undefined) => {
  apiClient.headers.Authorization = '';
  delete apiClient.headers.Authorization;

  if (token) {
    apiClient.headers.Authorization = `Bearer ${token}`;
  }
};
