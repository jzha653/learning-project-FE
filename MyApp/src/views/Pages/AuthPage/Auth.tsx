import * as React from 'react';
import {Button} from 'react-native';

export const AuthScreen = ({navigation}) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
    />
  );
};
