import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ActivityScreen from './ActivityScreen/ActivityScreen';
import NewTransactionScreen from './NewTransaction/NewTransactionScreen';

const Stack = createNativeStackNavigator();

export default function ActivityNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ActivityScreen" component={ActivityScreen} />
      <Stack.Screen name="NewTransaction" component={NewTransactionScreen} />
    </Stack.Navigator>
  );
}
