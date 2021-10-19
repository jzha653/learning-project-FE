import {AuthActions} from '@features/reducers/Auth/AuthReducer';
import {BootstrapActions} from '@features/reducers/Core/Bootstrap/BootstrapReducer';
import {put} from 'redux-saga/effects';

export default function* logOut() {
  yield put(AuthActions.reset());
  yield put(BootstrapActions.reset());
}
