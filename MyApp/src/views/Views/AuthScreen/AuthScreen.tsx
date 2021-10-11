import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from './LoginTab/LoginScreen';
import SignUpScreen from './SignUpTab/SignupScreen';

const Tab = createBottomTabNavigator();
export default function AuthScreen({navigation}) {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Sign Up" component={SignUpScreen} />
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarLabel: 'Log In',
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
    </Tab.Navigator>
  );
}
