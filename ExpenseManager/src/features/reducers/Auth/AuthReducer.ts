import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {createSlice} from '@reduxjs/toolkit';
import {AuthState} from '@features/types/Auth/AuthTypes';
import {RequestStatus} from '@features/reducers/index';

const initialState: AuthState = {
  isUserInitialised: false,
  authStatus: RequestStatus.Idle, //  status
  authError: null,
  token: null,
};

export const AuthReducer = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setToken(state, payload) {
      state.token = payload.payload;
    },
    signUpAction: (_state, _signUpAction) => undefined,
    signup_pending_action(state) {
      state.authStatus = RequestStatus.Pending;
    },
    signup_fulfilled_action(state) {
      state.authStatus = RequestStatus.Fulfilled;
      state.isUserInitialised = true;
    },
    signup_error_action(state, error) {
      state.authStatus = RequestStatus.Failed;
      state.authError = error.payload;
    },
    loginAction: (_state, _loginAction) => undefined,
    login_pending_action(state) {
      state.authStatus = RequestStatus.Pending;
    },
    login_fulfilled_action(state) {
      state.authStatus = RequestStatus.Fulfilled;
      state.isUserInitialised = true;
    },
    login_error_action(state, error) {
      state.authStatus = RequestStatus.Failed;
      state.authError = error.payload;
    },
    logoutAction: () => undefined,
    reset: () => initialState,
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
