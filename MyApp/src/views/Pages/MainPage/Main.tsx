import * as React from 'react';
import {Text} from 'react-native';
export const HomeScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};
