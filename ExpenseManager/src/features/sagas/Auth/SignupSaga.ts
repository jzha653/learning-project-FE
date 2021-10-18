import {call, put} from 'redux-saga/effects';
import signUp from '@features/services/AuthService';
import {
  SignUpActionPayload,
  SignUpResponseAction,
} from '@features/types/AuthTypes';
import {AuthActions} from '@features/reducers/AuthReducer';
import {Action} from 're-reduced';
import {AxiosResponse} from 'axios';

export interface SignUpResponseGenerator {
  config?: unknown;
  data: SignUpResponseAction;
  headers?: unknown;
  request?: unknown;
  status?: number;
  statusText?: string;
}
export default function* signup(action: Action<SignUpActionPayload>) {
  yield put(AuthActions.signup_pending_action());
  const payload: SignUpActionPayload = action.payload;

  try {
    const response: AxiosResponse<SignUpResponseAction> = yield call(
      signUp,
      payload,
    );
    if (response.data.token) {
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
