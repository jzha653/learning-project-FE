import {all, takeLatest} from 'redux-saga/effects';
import {UserActions} from '@features/reducers/User/UserReducer';
import updateUserName from './UpdateUserNameSaga';
export function* updateNameSaga() {
  yield all([takeLatest(UserActions.update.type, updateUserName)]);
}
