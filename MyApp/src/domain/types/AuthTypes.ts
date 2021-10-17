export interface AuthState {
  isAppInitiailised: boolean;
  isUserInitialised: boolean;
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
