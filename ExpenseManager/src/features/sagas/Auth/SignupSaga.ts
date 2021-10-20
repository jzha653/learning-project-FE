import {call, put} from 'redux-saga/effects';
import {signUp} from '@features/services/Auth/AuthService';
import {
  SignUpActionPayload,
  SignUpResponse,
} from '@features/types/Auth/AuthTypes';
import {AuthActions} from '@features/reducers/Auth/AuthReducer';
import {Action} from 're-reduced';
import {ApiResponse} from 'apisauce';
import {setAuthToken} from '@features/services/ApiClient';
import {UserActions} from '@features/reducers/User/UserReducer';

export default function* signup(action: Action<SignUpActionPayload>) {
  yield put(AuthActions.signup_pending_action());
  const payload: SignUpActionPayload = action.payload;

  try {
    // change type to APIresponse<SignupResponse>
    const response: ApiResponse<SignUpResponse> = yield call(signUp, payload);
    // check status code / ok fro successful
    if (response.ok) {
      yield put(AuthActions.setToken(response.data?.token));
      yield put(UserActions.set_name(response.data?.name));
      yield put(UserActions.set_email(response.data?.email));
      setAuthToken(response.data?.token);
      yield put(AuthActions.signup_fulfilled_action());
    } else {
      yield put(AuthActions.signup_error_action(response.data));
    }
  } catch (e) {
    yield put(
      AuthActions.signup_error_action({
        type: 'ERROR',
        payload: (e as Error).message,
      }),
    );
  }
}
