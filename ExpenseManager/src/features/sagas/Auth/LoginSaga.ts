import {call, put} from 'redux-saga/effects';
import {Login} from '@features/services/Auth/AuthService';
import {
  LoginActionPayload,
  SignUpResponse,
} from '@features/types/Auth/AuthTypes';
import {AuthActions} from '@features/reducers/Auth/AuthReducer';
import {Action} from 're-reduced';
import {ApiResponse} from 'apisauce';
export default function* login(action: Action<LoginActionPayload>) {
  yield put(AuthActions.login_pending_action());

  const payload: LoginActionPayload = action.payload;

  try {
    const response: ApiResponse<SignUpResponse> = yield call(Login, payload);
    if (response.ok) {
      if (response.data && response.data.token) {
        yield put(AuthActions.setToken(response.data?.token));
        yield put(AuthActions.login_fulfilled_action());
      } else {
        yield put(AuthActions.login_error_action('No Token Found'));
      }
    } else {
      yield put(AuthActions.login_error_action(response?.data));
    }
  } catch (e) {
    yield put(
      AuthActions.login_error_action({
        type: 'ERROR',
        payload: (e as Error).message,
      }),
    );
  }
}
