import {apiClient} from '@features/services/ApiClient';
import ApiConfig from '@config/ApiConfig';
import {UpdatePayload} from '@features/types/User/UserTypes';
export function update(payload: UpdatePayload) {
  return apiClient.post(ApiConfig.UPDATE, payload);
}
