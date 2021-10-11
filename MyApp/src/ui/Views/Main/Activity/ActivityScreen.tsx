import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {RootRoutes} from '../../../Routes/Routes';

export default function ActivityScreen({navigation}) {
  return (
    <View>
      <Text>Activity </Text>
      <Button
        title="New"
        onPress={() =>
          navigation.navigate(RootRoutes.ScreensGroup.NewTransactionScreen)
        }
      />
      <Button
        title="Modal"
        onPress={() =>
          navigation.navigate(RootRoutes.ModalsGroup.EditNameModal)
        }
      />
    </View>
  );
}
