import {persistReducer} from 'redux-persist';
import {AsyncStorage} from 'react-native';
import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  isAppInitiailised: false,
  isUserInitialised: false,
  token: null,
};

export const AuthReducer = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    initApp(state) {
      console.log('123');
      state.isAppInitiailised = true;
    },
    initUser(state) {
      console.log('321');

      state.isUserInitialised = true;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export const {initApp, initUser} = AuthReducer.actions;

export const AuthPersistedReducer = persistReducer(
  persistConfig,
  AuthReducer.reducer,
);
