import {all, takeLatest} from 'redux-saga/effects';
import {BootstrapActions} from '@features/reducers/Core/Bootstrap/BootstrapReducer';
import initApp from './InitAppSaga';
export function* initAppSaga() {
  yield all([takeLatest(BootstrapActions.initApp.type, initApp)]);
}
