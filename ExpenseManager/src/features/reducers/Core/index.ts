import {combineReducers} from 'redux';
import {BootstrapPersistedReducer} from './Bootstrap/BootstrapReducer';

export const CoreReducers = combineReducers({
  bootstrap: BootstrapPersistedReducer,
});
