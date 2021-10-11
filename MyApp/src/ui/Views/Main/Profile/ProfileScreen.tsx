import {Button, Text, View} from 'react-native';
import * as React from 'react';
import {RootRoutes} from '../../../Routes/Routes';

export default function ProfileScreen({navigation}) {
  return (
    <View>
      <Text>Profile</Text>
      <Button
        title="Log out"
        onPress={() => navigation.navigate(RootRoutes.ScreensGroup.AuthScreen)}
      />
    </View>
  );
}
