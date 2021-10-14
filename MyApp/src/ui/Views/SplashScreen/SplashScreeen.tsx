import {Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {initApp, initUser} from '../../../store/reducers/AuthReducer';
export default function SplashScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(initApp());
    }, 3000);
  });
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{backgroundColor: 'red', width: '100%', height: '100%'}}>
      <Text>blablabla</Text>
    </View>
  );
}
