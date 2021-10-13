/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import {call, put} from 'redux-saga/effects';
// import { delay } from 'redux-saga';

import signUp from '../../services/AuthService';
import AuthActions from '../actions/AuthActions';
import {SignUpRequest, SignUpResponse} from 'src/models/api/Auth';

// Our worker Saga that logins the user
export interface ResponseGenerator {
  config?: any;
  data: SignUpResponse;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
export default function* signUpSaga(action: SignUpRequest) {
  try {
    const response: ResponseGenerator = yield call(
      signUp,
      action.name,
      action.email,
      action.password,
    );
    yield put(AuthActions.onSignUpResponse(response.data));
  } catch (e: any) {
    yield put({type: 'failed', message: e.message});
  }
}
