import {RequestStatus} from '@features/reducers';

export interface UserState {
  name: string | null;
  email: string | null;
  updateUserStatus: RequestStatus;
  updateUserError: string | null;
}

export interface UpdatePayload {
  name: string;
}

export interface UpdateResponse {
  email: string;
  name: string;
  token: string;
}
