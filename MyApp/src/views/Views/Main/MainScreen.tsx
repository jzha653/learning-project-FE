import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OverviewScreen from './Overview/OverviewScreen';
import ProfileScreen from './Profile/ProfileScreen';
import ActivityNavigator from './Activity/ActivityNavigator';

const Tab = createBottomTabNavigator();
export default function MainScreen() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Overview"
        component={OverviewScreen}
        options={{
          tabBarLabel: 'Homescreen',
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
        name="ActivityNav"
        component={ActivityNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
