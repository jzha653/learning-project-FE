import React, {useCallback} from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';

import AppScreen from '@ui/Theme/AppScreen/AppScreen';
import {initUser} from '@domain/reducers/AuthReducer';

export default function AuthScreen() {
  const dispatch = useDispatch();

  const onLogin = useCallback(() => {
    dispatch(initUser());
  }, [dispatch]);

  return (
    <AppScreen title="Auth">
      <View>
        <Text>LOG IN</Text>
        <Button title="Continue" onPress={onLogin} />
      </View>
    </AppScreen>
  );
}
