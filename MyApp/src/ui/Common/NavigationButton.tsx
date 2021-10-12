import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Button} from 'react-native';

export default function NavigationButton() {
  const navigation = useNavigation();

  return (
    <Button
      title="Back"
      onPress={() => {
        navigation.goBack();
      }}
    />
  );
}
