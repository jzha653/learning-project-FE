import {useNavigation} from '@react-navigation/core';
import React, {useCallback} from 'react';
import {Button, Text, View} from 'react-native';
import AuthActions from '../../../store/actions/AuthActions';
import AppScreen from '../../Theme/AppScreen/AppScreen';
import {ScreenNavigationProp} from '../../Types/navigationTypes';
import {Provider, useDispatch} from 'react-redux';
import store from '../../../store/store';

export default function AuthScreen() {
  const navigation = useNavigation<ScreenNavigationProp>();
  const navigateToMain = useCallback(
    () => navigation.navigate('MainTabsNavigator'),
    [navigation],
  );
  const dispatch = useDispatch();

  const onLogin = () =>
    dispatch(AuthActions.requestSignUp('test', '1234', '123'));

  return (
    <Provider store={store}>
      <AppScreen title="Auth">
        <View>
          <Text>LOG IN</Text>
          <Button title="Continue" onPress={onLogin} />
        </View>
      </AppScreen>
    </Provider>
  );
}
