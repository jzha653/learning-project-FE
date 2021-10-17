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
