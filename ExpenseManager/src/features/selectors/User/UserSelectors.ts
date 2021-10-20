import {State} from '@features/types/RootState';

export const getUserName = (state: State) => state.user.name;

export const getUserEmail = (state: State) => state.user.email;

export const getUpdateUserStatus = (state: State) =>
  state.user.updateUserStatus;

export const getUpdateUserError = (state: State) => state.user.updateUserError;
