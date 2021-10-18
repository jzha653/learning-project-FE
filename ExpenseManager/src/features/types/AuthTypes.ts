export interface AuthState {
  isAppInitiailised: boolean;
  isUserInitialised: boolean;
  isAuthPending: boolean;
  authError: string | null;
  token: string | null;
}

export interface SignUpActionPayload {
  name: string;
  email: string;
  password: string;
}

export interface SignUpResponseAction {
  type: string;
  email: string;
  password: string;
  token: string;
}
