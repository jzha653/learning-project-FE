import {RequestStatus} from '@features/reducers';

export interface UserState {
  name: string | null;
  email: string | null;
  updateUserStatus: RequestStatus;
  updateUserError: string | null;
}
