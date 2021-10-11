import {useNavigation} from '@react-navigation/core';
import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {RootRoutes} from '../../Routes/Routes';

export default function AuthScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>LOG IN</Text>
      <Button
        title="Continue"
        onPress={() =>
          navigation.navigate(RootRoutes.ScreensGroup.MainTabsNavigator)
        }
      />
    </View>
  );
}
