import {UpdatePayload, UpdateResponse} from '@features/types/User/UserTypes';
import {call, put} from 'redux-saga/effects';
import {Action} from 're-reduced';
import {UserActions} from '@features/reducers/User/UserReducer';
import {ApiResponse} from 'apisauce';
import {update} from '@features/services/User/UserService';

export default function* updateUserName(action: Action<UpdatePayload>) {
  yield put(UserActions.update_pending());
  try {
    const response: ApiResponse<UpdateResponse> = yield call(
      update,
      action.payload,
    );
    if (response.ok) {
      yield put(UserActions.set_name(response.data?.name));
      yield put(UserActions.update_fulfilled());
    } else {
      yield put(UserActions.update_error(response?.data));
    }
  } catch (e) {
    yield put(
      UserActions.update_error({
        type: 'ERROR',
        payload: (e as Error).message,
      }),
    );
  }
}
