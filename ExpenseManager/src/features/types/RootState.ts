import {AuthState} from '@features/types/Auth/AuthTypes';
import {BootstrapState} from './Core/CoreTypes';
import {UserState} from './User/UserTypes';

export interface State {
  auth: AuthState;
  core: {bootstrap: BootstrapState};
  user: UserState;
}
