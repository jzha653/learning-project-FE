import signUp from './SignupSaga';
import {AuthActions} from '@features/reducers/AuthReducer';
import {all, takeLatest} from 'redux-saga/effects';
export default function* signUpSaga() {
  yield all([takeLatest(AuthActions.signUpAction.type, signUp)]);
}
