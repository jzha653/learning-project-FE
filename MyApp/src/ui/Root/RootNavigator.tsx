import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthScreen from '../Views/Auth/AuthScreen';
import MainTabsNavigator from '../Views/Main/MainTabsNavigator';
import NewTransactionScreen from '../Views/NewTransaction/NewTransactionScreen';
import EditNameModal from '../Modal/EditNameModal';
import SelectCategoryModal from '../Modal/SelectCategoryModal';

import {RootRoutes} from '../Routes/Routes';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {useCallback} from 'react';
import {View} from 'react-native';
import Colours from '../Theme/Colours';

export default function App() {
  const Stack = createStackNavigator();
  const getTitle = useCallback(route => {
    let routeName = getFocusedRouteNameFromRoute(route) ?? 'Overview';
    switch (routeName) {
      case 'OverviewScreen':
        routeName = 'Overview';
        break;

      case 'ActivityScreen':
        routeName = 'Activity';
        break;

      case 'ProfileScreen':
        routeName = 'Profile';
        break;

      default:
        routeName = 'Overview';
        break;
    }
    return routeName;
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name={RootRoutes.ScreensGroup.AuthScreen}
            component={AuthScreen}
            options={{
              headerStyle: {
                backgroundColor: Colours.titleBar,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen
            name={RootRoutes.ScreensGroup.MainTabsNavigator.name}
            component={MainTabsNavigator}
            options={({route}) => ({
              title: getTitle(route),
              headerLeft: () => <View />,
              headerStyle: {
                backgroundColor: Colours.titleBar,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
              headerTintColor: '#fff',
            })}
          />
          <Stack.Screen
            name={RootRoutes.ScreensGroup.NewTransactionScreen}
            component={NewTransactionScreen}
            options={{
              headerStyle: {
                backgroundColor: Colours.titleBar,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
              headerTintColor: '#fff',
            }}
          />
        </Stack.Group>
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen
            name={RootRoutes.ModalsGroup.EditNameModal}
            component={EditNameModal}
          />
          <Stack.Screen
            name={RootRoutes.ModalsGroup.SelectCategoryModal}
            component={SelectCategoryModal}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
