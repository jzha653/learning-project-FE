import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthScreen from '../Views/Auth/AuthScreen';
import MainTabsNavigator from '../Views/Main/MainTabsNavigator';
import NewTransactionScreen from '../Views/NewTransaction/NewTransactionScreen';
import EditNameModal from '../Modal/EditNameModal';
import SelectCategoryModal from '../Modal/SelectCategoryModal';

import {RootRoutes} from '../Routes/Routes';
import Reactotron from 'reactotron-react-native';
import {RootStackParamList} from '../Types/navigationTypes';
import SplashScreen from '../Views/SplashScreen/SplashScreeen';
import {store} from '../../store/store';
// TODO: move to App, move config to SRC
import('../../config/ReactotronConfig').then(() =>
  console.log('Reactotron Configured'),
);

export default function RootNavigator() {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  Reactotron.log!('hello rendering world');

  const Stack = createStackNavigator<RootStackParamList>();

  console.log('init');

  console.log(store.getState().auth.isAppInitiailised);

  if (!store.getState().auth.isAppInitiailised) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTransparent: true,
          }}>
          <Stack.Group>
            <Stack.Screen
              name={RootRoutes.ScreensGroup.SplashScreen}
              component={SplashScreen}
              options={{
                headerShown: false,
                headerTransparent: true,
              }}
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  if (!store.getState().auth.isUserInitialised) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTransparent: true,
          }}>
          <Stack.Group>
            <Stack.Screen
              name={RootRoutes.ScreensGroup.AuthScreen}
              component={AuthScreen}
              options={{
                headerShown: false,
                headerTransparent: true,
              }}
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
        }}>
        <Stack.Group>
          <Stack.Screen
            name={RootRoutes.ScreensGroup.MainTabsNavigator.name}
            component={MainTabsNavigator}
            options={{
              headerShown: false,
              headerTransparent: false,
              title: 'doge',
            }}
          />
          <Stack.Screen
            name={RootRoutes.ScreensGroup.NewTransactionScreen}
            component={NewTransactionScreen}
            options={{
              headerShown: false,
              headerTransparent: true,
            }}
          />
        </Stack.Group>
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen
            name={RootRoutes.ModalsGroup.EditNameModal}
            component={EditNameModal}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={RootRoutes.ModalsGroup.SelectCategoryModal}
            component={SelectCategoryModal}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
