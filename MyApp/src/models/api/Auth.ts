export interface SignUpRequest {
  name: string;
  email: string;
  password: string;
}

export interface SignUpResponse {
  name: string;
  email: string;
  token: string;
}
