import {useNavigation} from '@react-navigation/core';
import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {ScreenNavigationProp} from '../../Types/navigationTypes';

export default function AuthScreen() {
  const navigation = useNavigation<ScreenNavigationProp>();
  return (
    <View>
      <Text>LOG IN</Text>
      <Button
        title="Continue"
        onPress={() =>
          navigation.navigate('MainTabsNavigator', {
            token: '123',
          })
        }
      />
    </View>
  );
}
