import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {persistStore} from 'redux-persist';
import {AuthPersistedReducer} from '@features/reducers/Auth/AuthReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '@features/sagas/RootSaga';
import {CoreReducers} from '@features/reducers/Core';
import {UserPersistedReducer} from '@features/reducers/User/UserReducer';

const reducers = combineReducers({
  auth: AuthPersistedReducer,
  core: CoreReducers,
  user: UserPersistedReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
      immutableCheck: false,
    }).concat(sagaMiddleware),
});

export const persistor = persistStore(store, undefined, () => {
  sagaMiddleware.run(rootSaga);
});
