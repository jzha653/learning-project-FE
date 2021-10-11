import {Button, Text, View} from 'react-native';
import * as React from 'react';

export default function ProfileScreen({navigation}) {
  return (
    <View>
      <Text>Profile</Text>
      <Button title="Log out" onPress={() => navigation.navigate('Auth')} />
    </View>
  );
}
