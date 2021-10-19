import {BootstrapActions} from '@features/reducers/Core/Bootstrap/BootstrapReducer';
import {delay, put} from 'redux-saga/effects';

export default function* initApp() {
  yield delay(3000);
  yield put(BootstrapActions.initApp_fulfilled());
}
