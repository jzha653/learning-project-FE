import {apiClient} from '@domain/services/ApiClient';
import ApiConfig from '@config/ApiConfig';
import {SignUpActionPayload} from '@domain/types/AuthTypes';
export default function signUp(payload: SignUpActionPayload) {
  return apiClient.post(ApiConfig.SIGNUP, payload);
}
