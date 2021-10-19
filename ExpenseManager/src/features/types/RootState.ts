import {AuthState} from '@features/types/Auth/AuthTypes';
import {BootstrapState} from './Core/CoreTypes';

export interface State {
  auth: AuthState;
  core: {bootstrap: BootstrapState};
}
