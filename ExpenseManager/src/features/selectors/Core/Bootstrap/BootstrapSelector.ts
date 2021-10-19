import {State} from '@features/types/RootState';

export const getIsAppInitialized = (state: State) =>
  state.core.bootstrap.isAppInitiailised;
