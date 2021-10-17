import signUpSaga from './SignupSaga';
import {signUpAction} from '@domain/reducers/AuthReducer';
import {all, takeLatest} from 'redux-saga/effects';
export default function* sagaWatcher() {
  yield all([takeLatest(signUpAction.type, signUpSaga)]);
}
