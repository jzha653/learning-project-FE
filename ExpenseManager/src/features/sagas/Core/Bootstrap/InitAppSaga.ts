import {AuthActions} from '@features/reducers/Auth/AuthReducer';
import {BootstrapActions} from '@features/reducers/Core/Bootstrap/BootstrapReducer';
import {getToken} from '@features/selectors/Auth/AuthSelectors';
import {setAuthToken} from '@features/services/ApiClient';
import {delay, put, select} from 'redux-saga/effects';

export default function* initApp() {
  yield delay(3000);
  yield put(BootstrapActions.initApp_fulfilled());
  const result: string = yield select(getToken);
  if (result) {
    // should get user info here after BE support
    setAuthToken(result);
    yield put(AuthActions.login_fulfilled_action());
  }
}
