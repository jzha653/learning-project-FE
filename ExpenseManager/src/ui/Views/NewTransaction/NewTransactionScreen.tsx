import {Button, Image, Text, View, TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';

import {ScreenNavigationProp} from '@ui/Types/navigationTypes';
import AppScreen from '@ui/Theme/AppScreen/AppScreen';
const AppScreenWrapper = styled.View`
  align-items: center;
  flex: 1;
`;
export default function NewTransactionScreen() {
  const Assets = {
    back: require('@icons/BackButtonForDark.webp'),
  };
  const navigation = useNavigation<ScreenNavigationProp>();
  const navigateBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const leftIcon: React.ReactElement<any> = (
    <TouchableOpacity onPress={navigateBack}>
      <Image source={Assets.back} />
    </TouchableOpacity>
  );

  return (
    <AppScreen title="New Transaction" headerLeft={leftIcon}>
      <AppScreenWrapper>
        <Text>New Transaction</Text>
        <Button
          title="Modal"
          onPress={() => navigation.navigate('SelectCategoryModal')}
        />
      </AppScreenWrapper>
    </AppScreen>
  );
}
