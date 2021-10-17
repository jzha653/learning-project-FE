import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';

import AppScreen from '@ui/Theme/AppScreen/AppScreen';
import {ScreenNavigationProp} from '@ui/Types/navigationTypes';

export default function ActivityScreen() {
  const navigation = useNavigation<ScreenNavigationProp>();
  return (
    <AppScreen>
      <View>
        <Text>Activity </Text>
        <Button
          title="New"
          onPress={() => navigation.navigate('NewTransactionScreen')}
        />
      </View>
    </AppScreen>
  );
}
