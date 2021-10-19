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
