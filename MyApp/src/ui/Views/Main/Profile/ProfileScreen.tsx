import {Button, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {ScreenNavigationProp} from '@ui/Types/navigationTypes';
import AppScreen from '@ui/Theme/AppScreen/AppScreen';

export default function ProfileScreen() {
  const navigation = useNavigation<ScreenNavigationProp>();
  return (
    <AppScreen>
      <View>
        <Text>Profile</Text>
        <Button
          title="Edit Name"
          onPress={() => navigation.navigate('EditNameModal')}
        />
        <Button
          title="Log out"
          onPress={() => navigation.navigate('AuthScreen')}
        />
      </View>
    </AppScreen>
  );
}
