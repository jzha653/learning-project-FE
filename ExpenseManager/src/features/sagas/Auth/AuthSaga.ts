import signUp from './SignupSaga';
import {AuthActions} from '@features/reducers/AuthReducer';
import {all, takeLatest} from 'redux-saga/effects';
import login from './LoginSaga';
export function* signUpSaga() {
  yield all([takeLatest(AuthActions.signUpAction.type, signUp)]);
}
export function* loginSaga() {
  yield all([takeLatest(AuthActions.loginAction.type, login)]);
}
