import {BootstrapState} from '@features/types/Core/CoreTypes';
import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

const BootstrapInitialState: BootstrapState = {
  isAppInitiailised: false,
};

export const BootstrapReducer = createSlice({
  name: 'bootstrap',
  initialState: BootstrapInitialState,
  reducers: {
    // create bootstrap saga, select(selector functions): get token from state, if not null initialise user, action executing
    initApp: () => undefined,
    initApp_fulfilled(state) {
      state.isAppInitiailised = true;
    },
    reset: () => BootstrapInitialState,
  },
});

const persistConfig = {
  key: 'BootstrapInitialState',
  storage: AsyncStorage,
  blacklist: ['isAppInitiailised'],
};

export const BootstrapActions = BootstrapReducer.actions;

export const BootstrapPersistedReducer = persistReducer(
  persistConfig,
  BootstrapReducer.reducer,
);
