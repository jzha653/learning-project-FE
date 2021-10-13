import {SignUpResponse} from 'src/models/api/Auth';

export function requestSignUp(name: string, email: string, password: string) {
  return {
    type: 'requestSignUp',
    name,
    email,
    password,
  };
}

export function onSignUpResponse(response: SignUpResponse) {
  return {
    type: 'success',
    token: response.token,
    email: response.email,
    name: response.name,
  };
}

export default {requestSignUp, onSignUpResponse};
