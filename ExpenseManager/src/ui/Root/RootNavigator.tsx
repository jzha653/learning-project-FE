import React from 'react';
import {useSelector} from 'react-redux';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import AuthScreen from '@ui/Views/Auth/AuthScreen';
import MainTabsNavigator from '@ui/Views/Main/MainTabsNavigator';
import NewTransactionScreen from '@ui/Views/NewTransaction/NewTransactionScreen';
import EditNameModal from '@ui/Modal/EditNameModal';
import SelectCategoryModal from '@ui/Modal/SelectCategoryModal';
import {RootRoutes} from '@ui/Routes/Routes';
import {RootStackParamList} from '@ui/Types/navigationTypes';
import SplashScreen from '@ui/Views/SplashScreen/SplashScreeen';
import {getIsUserInitialized} from '@features/selectors/Auth/AuthSelectors';
import {getIsAppInitialized} from '@features/selectors/Core/Bootstrap/BootstrapSelector';

export default function RootNavigator() {
  const Stack = createStackNavigator<RootStackParamList>();

  const isAppInitiailised = useSelector(getIsAppInitialized);
  const isUserInitialised = useSelector(getIsUserInitialized);

  if (!isAppInitiailised) {
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

  if (!isUserInitialised) {
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
