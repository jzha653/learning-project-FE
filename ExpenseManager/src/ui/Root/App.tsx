import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from '@features/store/store';
import RootNavigator from '@ui/Root/RootNavigator';
import('@config/ReactotronConfig').then(() =>
  console.log('Reactotron Configured'),
);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
}
