import signUp from './SignupSaga';
import {AuthActions} from '@features/reducers/Auth/AuthReducer';
import {all, takeLatest} from 'redux-saga/effects';
import login from './LoginSaga';
import logOut from './LogoutSaga';
export function* signUpSaga() {
  yield all([takeLatest(AuthActions.signUpAction.type, signUp)]);
}
export function* loginSaga() {
  yield all([takeLatest(AuthActions.loginAction.type, login)]);
}

export function* logoutSaga() {
  yield all([takeLatest(AuthActions.logoutAction.type, logOut)]);
}
