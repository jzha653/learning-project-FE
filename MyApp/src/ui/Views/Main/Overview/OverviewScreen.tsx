import {Text} from 'react-native';
import * as React from 'react';
import AppScreen from '../../../Theme/AppScreen/AppScreen';

export default function OverviewScreen() {
  const content = <Text>Overview</Text>;
  return <AppScreen children={content}></AppScreen>;
}
