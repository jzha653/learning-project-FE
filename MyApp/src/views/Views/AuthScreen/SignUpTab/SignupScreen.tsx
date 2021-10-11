import {Button, Text, View} from 'react-native';
import * as React from 'react';

export default function SignUpScreen({navigation}) {
  return (
    <View>
      <Text>SIGN UP</Text>
      <Button title="SIGN UP" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
