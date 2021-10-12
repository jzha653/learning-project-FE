import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {ScreenNavigationProp} from '../../../Types/navigationTypes';

export default function ActivityScreen() {
  const navigation = useNavigation<ScreenNavigationProp>();

  return (
    <View>
      <Text>Activity </Text>
      <Button
        title="New"
        onPress={() => navigation.navigate('NewTransactionScreen')}
      />
      <Button
        title="Modal"
        onPress={() => navigation.navigate('EditNameModal')}
      />
    </View>
  );
}
