import {apiClient} from '@features/services/ApiClient';
import ApiConfig from '@config/ApiConfig';
import {SignUpActionPayload} from '@features/types/AuthTypes';
export default function signUp(payload: SignUpActionPayload) {
  return apiClient.post(ApiConfig.SIGNUP, payload);
}
