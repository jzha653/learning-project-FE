import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {persistStore} from 'redux-persist';
import {AuthPersistedReducer} from '@domain/reducers/AuthReducer';
import createSagaMiddleware from 'redux-saga';

const reducers = combineReducers({auth: AuthPersistedReducer});
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: reducers,
  middleware: [sagaMiddleware],
});

export const persistor = persistStore(store);
