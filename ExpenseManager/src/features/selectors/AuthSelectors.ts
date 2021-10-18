import {State} from '@features/types/RootState';

export const getIsAppInitialized = (state: State) =>
  state.auth.isAppInitiailised;

export const getIsUserInitialized = (state: State) =>
  state.auth.isUserInitialised;

export const getError = (state: State) => state.auth.authError;
