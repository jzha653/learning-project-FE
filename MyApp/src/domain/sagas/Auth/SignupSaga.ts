import {call, put} from 'redux-saga/effects';
import signUp from '@domain/services/AuthService';
import {
  SignUpActionPayload,
  SignUpResponseAction,
} from '@domain/types/AuthTypes';
import {Action} from 're-reduced';

export interface SignUpResponseGenerator {
  config?: any;
  data: SignUpResponseAction;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
export default function* signUpAction(action: Action<SignUpActionPayload>) {
  const payload: SignUpActionPayload = action.payload;
  try {
    const response: SignUpResponseGenerator = yield call(signUp, payload);
    yield put(response.data);
  } catch (e: any) {
    yield put({type: 'failed', message: e.message});
  }
}
