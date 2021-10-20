import {State} from '@features/types/RootState';

export const getIsUserInitialized = (state: State) =>
  state.auth.isUserInitialised;

export const getError = (state: State) => state.auth.authError;

export const getIsAuthPending = (state: State) => state.auth.authStatus;

export const getToken = (state: State) => state.auth.token;
