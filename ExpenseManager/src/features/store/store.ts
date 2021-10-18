import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {persistStore} from 'redux-persist';
import {AuthPersistedReducer} from '@features/reducers/AuthReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '@features/sagas/RootSaga';

const reducers = combineReducers({auth: AuthPersistedReducer});
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: false, // we'll exclusively use saga middleware to handle side-effects
      serializableCheck: false,
      immutableCheck: false,
    }).concat(sagaMiddleware),
});

export const persistor = persistStore(store, undefined, () => {
  sagaMiddleware.run(rootSaga);
});