import {apiClient} from './ApiClient';
import ApiConfig from '../config/ApiConfig';

export default function signUp(name: string, email: string, password: string) {
  return apiClient.post(ApiConfig.SIGNUP, {name, email, password});
}
