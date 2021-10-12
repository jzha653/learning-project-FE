import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Button, Text, View} from 'react-native';
import AppScreen from '../../../Theme/AppScreen/AppScreen';
import {ScreenNavigationProp} from '../../../Types/navigationTypes';

export default function ActivityScreen() {
  const navigation = useNavigation<ScreenNavigationProp>();
  const content = (
    <View>
      <Text>Activity </Text>
      <Button
        title="New"
        onPress={() => navigation.navigate('NewTransactionScreen')}
      />
    </View>
  );
  return <AppScreen children={content}></AppScreen>;
}