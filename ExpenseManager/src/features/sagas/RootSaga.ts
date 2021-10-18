import {all} from 'redux-saga/effects';
import signUpSaga from '@features/sagas/Auth/AuthSaga';

export default function* rootSaga() {
  yield all([signUpSaga()]);
}
