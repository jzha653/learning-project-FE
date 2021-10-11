import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthScreen from '../Views/AuthScreen/AuthScreen';
import MainScreen from '../Views/Main/MainScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{
            headerBackButtonMenuEnabled: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={MainScreen}
          options={{
            headerBackButtonMenuEnabled: false,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
