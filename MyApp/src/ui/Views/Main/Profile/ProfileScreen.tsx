import {Button, Text, View} from 'react-native';
import * as React from 'react';
import {ScreenNavigationProp} from '../../../Types/navigationTypes';
import {useNavigation} from '@react-navigation/native';
import AppScreen from '../../../Theme/AppScreen/AppScreen';

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
