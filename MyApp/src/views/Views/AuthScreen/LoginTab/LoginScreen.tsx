import {Button, Text, View} from 'react-native';
import * as React from 'react';

export default function LoginScreen({navigation}) {
  return (
    <View>
      <Text>LOG IN</Text>
      <Button title="Log In" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
