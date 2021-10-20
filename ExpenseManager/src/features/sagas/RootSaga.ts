import {all} from 'redux-saga/effects';
import {signUpSaga, loginSaga, logoutSaga} from '@features/sagas/Auth';
import {initAppSaga} from './Core/Bootstrap';
import {updateNameSaga} from './User';

export default function* rootSaga() {
  yield all([
    signUpSaga(),
    loginSaga(),
    logoutSaga(),
    initAppSaga(),
    updateNameSaga(),
  ]);
}
