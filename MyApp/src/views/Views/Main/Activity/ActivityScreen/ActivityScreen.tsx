import * as React from 'react';
import {Button, Text, View} from 'react-native';

export default function ActivityScreen({navigation}) {
  return (
    <View>
      <Text>Activity </Text>
      <Button
        title="New"
        onPress={() => navigation.navigate('NewTransaction')}
      />
    </View>
  );
}
