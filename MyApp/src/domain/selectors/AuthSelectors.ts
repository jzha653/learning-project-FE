import {State} from '@domain/types/RootState';

export const getIsAppInitialized = (state: State) =>
  state.auth.isAppInitiailised;

export const getIsUserInitialized = (state: State) =>
  state.auth.isUserInitialised;
