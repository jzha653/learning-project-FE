import {Button, Text, View} from 'react-native';
import * as React from 'react';
import {RootRoutes} from '../../Routes/Routes';

export default function NewTransactionScreen({navigation}) {
  return (
    <View>
      <Text>NEW TRANSACTION</Text>
      <Button
        title="ADD"
        onPress={() =>
          navigation.navigate(
            RootRoutes.ScreensGroup.MainTabsNavigator.ActivityScreen,
          )
        }
      />
    </View>
  );
}
