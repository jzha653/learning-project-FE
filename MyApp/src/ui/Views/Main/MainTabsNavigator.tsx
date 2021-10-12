import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OverviewScreen from './Overview/OverviewScreen';
import ProfileScreen from './Profile/ProfileScreen';
import {RootRoutes} from '../../Routes/Routes';
import ActivityScreen from './Activity/ActivityScreen';
import Colours from '../../Theme/Colours';

const Tab = createBottomTabNavigator();
export default function MainScreen() {
  return (
    <Tab.Navigator
      initialRouteName={RootRoutes.ScreensGroup.MainTabsNavigator.name}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colours.titleBar,
        },
      }}>
      <Tab.Screen
        name={RootRoutes.ScreensGroup.MainTabsNavigator.OverviewScreen}
        component={OverviewScreen}
        options={{
          tabBarLabel: 'Homescreen',
          headerShown: false,
          // tabBarIcon: ({focused}) =>
          //   focused ? (
          //     <Icon
          //       color={Colors.primaryBackground}
          //       name={'stroopwafel'}
          //       size={40}
          //     />
          //   ) : (
          //     <Icon color={Colors.primaryBackground} name={'tea'} size={40} />
          //   ),
        }}
      />
      <Tab.Screen
        name={RootRoutes.ScreensGroup.MainTabsNavigator.ActivityScreen}
        component={ActivityScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={RootRoutes.ScreensGroup.MainTabsNavigator.ProfileScreen}
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
