import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from '../../store/store';
import RootNavigator from './RootNavigator';
export default function App() {
  //   store.subscribe(() => {
  //     console.log('store update, current state:');
  //     console.log(store.getState().auth.isAppInitiailised);
  //   });

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
}
