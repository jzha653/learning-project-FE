import {RequestStatus} from '@features/reducers';
export interface AuthState {
  isUserInitialised: boolean;
  authStatus: RequestStatus;
  authError: string | null;
  token: string | null;
}

export interface SignUpActionPayload {
  name: string;
  email: string;
  password: string;
}

export interface LoginActionPayload {
  email: string;
  password: string;
}

export interface SignUpResponse {
  email: string;
  name: string;
  token: string;
}
