import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {createSlice} from '@reduxjs/toolkit';
import {AuthState} from '@domain/types/AuthTypes';

const initialState: AuthState = {
  isAppInitiailised: false,
  isUserInitialised: false,
  token: null,
};

export const AuthReducer = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    initApp(state) {
      state.isAppInitiailised = true;
    },
    initUser(state) {
      state.isUserInitialised = true;
    },
    signUpAction(state) {
      state.isUserInitialised = true;
    },
  },
});

const persistConfig = {
  key: 'initialState',
  storage: AsyncStorage,
  whitelist: ['token'],
};

export const {initApp, initUser, signUpAction} = AuthReducer.actions;

export const AuthPersistedReducer = persistReducer(
  persistConfig,
  AuthReducer.reducer,
);
