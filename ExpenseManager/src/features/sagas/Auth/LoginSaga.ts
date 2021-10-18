import {call, put} from 'redux-saga/effects';
import {Login} from '@features/services/AuthService';
import {
  LoginActionPayload,
  SignUpResponseAction,
} from '@features/types/AuthTypes';
import {AuthActions} from '@features/reducers/AuthReducer';
import {Action} from 're-reduced';
import {AxiosResponse} from 'axios';

export default function* login(action: Action<LoginActionPayload>) {
  yield put(AuthActions.login_pending_action());

  const payload: LoginActionPayload = action.payload;

  try {
    const response: AxiosResponse<SignUpResponseAction> = yield call(
      Login,
      payload,
    );
    if (response.data.token) {
      yield put(AuthActions.set_token(response.data.token));
      yield put(AuthActions.login_fulfilled_action());
    } else {
      yield put(AuthActions.login_error_action(response.data));
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
