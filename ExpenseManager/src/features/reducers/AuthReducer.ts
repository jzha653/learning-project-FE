import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {createSlice} from '@reduxjs/toolkit';
import {AuthState} from '@features/types/AuthTypes';

const initialState: AuthState = {
  isAppInitiailised: false,
  isUserInitialised: false,
  isAuthPending: false,
  authError: null,
  token: null,
};

export const AuthReducer = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    initApp(state) {
      state.isAppInitiailised = true;
    },
    set_token(state, payload) {
      state.token = payload.payload;
    },
    signUpAction: (_state, _signUpAction) => {
      return undefined;
    },
    signup_pending_action(state) {
      state.isAuthPending = true;
    },
    signup_fulfilled_action(state) {
      state.isAuthPending = false;
      state.isUserInitialised = true;
    },
    signup_error_action(state, error) {
      state.isAuthPending = false;
      state.authError = error.payload;
    },
    loginAction: (_state, _loginAction) => {
      return undefined;
    },
    login_pending_action(state) {
      state.isAuthPending = true;
    },
    login_fulfilled_action(state) {
      state.isAuthPending = false;
      state.isUserInitialised = true;
    },
    login_error_action(state, error) {
      state.isAuthPending = false;
      state.authError = error.payload;
    },
    logoutAction(state) {
      state.isUserInitialised = false;
      state.token = null;
    },
  },
});

const persistConfig = {
  key: 'initialState',
  storage: AsyncStorage,
  whitelist: ['token'],
};

export const AuthActions = AuthReducer.actions;

export const AuthPersistedReducer = persistReducer(
  persistConfig,
  AuthReducer.reducer,
);
