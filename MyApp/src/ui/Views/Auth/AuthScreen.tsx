import React, {useCallback} from 'react';
import {Button, Text, View} from 'react-native';
import AppScreen from '../../Theme/AppScreen/AppScreen';
// import {ScreenNavigationProp} from '../../Types/navigationTypes';
import {useDispatch} from 'react-redux';
import {initUser} from '../../../store/reducers/AuthReducer';

export default function AuthScreen() {
  // const navigation = useNavigation<ScreenNavigationProp>();
  // const navigateToMain = useCallback(
  //   () => navigation.navigate('MainTabsNavigator'),
  //   [navigation],
  // );
  const dispatch = useDispatch();

  const onLogin = () => {
    dispatch(initUser);
    console.log('login');
  };

  return (
    <AppScreen title="Auth">
      <View>
        <Text>LOG IN</Text>
        <Button title="Continue" onPress={onLogin} />
      </View>
    </AppScreen>
  );
}
