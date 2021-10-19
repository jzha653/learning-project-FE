import {apiClient} from '@features/services/ApiClient';
import ApiConfig from '@config/ApiConfig';
import {
  LoginActionPayload,
  SignUpActionPayload,
} from '@features/types/Auth/AuthTypes';
export function signUp(payload: SignUpActionPayload) {
  return apiClient.post(ApiConfig.SIGNUP, payload);
}

export function Login(payload: LoginActionPayload) {
  return apiClient.post(ApiConfig.LOGIN, payload);
}
