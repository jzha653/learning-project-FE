import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';
import {UserState} from '@features/types/User/UserTypes';
import {RequestStatus} from '@features/reducers/index';

const UserInitialState: UserState = {
  name: null,
  email: null,
  updateUserStatus: RequestStatus.Idle,
  updateUserError: null,
};

export const UserReducer = createSlice({
  name: 'user',
  initialState: UserInitialState,
  reducers: {
    update: (_state, _signUpAction) => undefined,
    resetUpdateStatus(state) {
      state.updateUserStatus = RequestStatus.Idle;
    },
    update_pending(state) {
      state.updateUserStatus = RequestStatus.Pending;
    },
    update_fulfilled(state) {
      state.updateUserStatus = RequestStatus.Fulfilled;
    },
    update_error(state, error) {
      state.updateUserStatus = RequestStatus.Failed;
      state.updateUserError = error.payload;
    },
    set_name(state, name) {
      state.name = name.payload;
    },
    set_email(state, email) {
      state.email = email.payload;
    },
    reset: () => UserInitialState,
  },
});

const persistConfig = {
  key: 'UserInitialState',
  storage: AsyncStorage,
  whitelist: [],
};

export const UserActions = UserReducer.actions;

export const UserPersistedReducer = persistReducer(
  persistConfig,
  UserReducer.reducer,
);
