import {Button, Image, Text, View, TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';
import {ScreenNavigationProp} from '../../Types/navigationTypes';
import {useNavigation} from '@react-navigation/native';
import AppScreen from '../../Theme/AppScreen/AppScreen';

export default function NewTransactionScreen() {
  const Assets = {
    back: require('../../../../assets/images/icons/BackButtonForDark.webp'),
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
      <View>
        <Text>New Transaction</Text>
        <Button
          title="Modal"
          onPress={() => navigation.navigate('SelectCategoryModal')}
        />
      </View>
    </AppScreen>
  );
}
