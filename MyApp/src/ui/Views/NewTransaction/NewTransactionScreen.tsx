import {Button, Text, View} from 'react-native';
import * as React from 'react';
import {ScreenNavigationProp} from '../../Types/navigationTypes';
import {useNavigation} from '@react-navigation/native';
import AppScreen from '../../Theme/AppScreen/AppScreen';

export default function NewTransactionScreen() {
  const navigation = useNavigation<ScreenNavigationProp>();
  const content: React.ReactElement<React.JSXElementConstructor<any>> = (
    <View>
      <Text>New Transaction</Text>
      <Button
        title="Modal"
        onPress={() => navigation.navigate('SelectCategoryModal')}
      />
    </View>
  );
  return <AppScreen children={content}></AppScreen>;
}
