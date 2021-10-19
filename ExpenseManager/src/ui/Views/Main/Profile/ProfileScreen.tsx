import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import Button from '@ui/Theme/Button/AppButton';
import styled from 'styled-components/native';

import {ScreenNavigationProp} from '@ui/Types/navigationTypes';
import AppScreen from '@ui/Theme/AppScreen/AppScreen';
import {AuthActions} from '@features/reducers/Auth/AuthReducer';
import {useDispatch} from 'react-redux';
import ContentCard from '@ui/Theme/Card/ContentCard';
import {ButtonWrapper} from '@ui/Views/Auth/AuthScreen';
const AppScreenWrapper = styled.View`
  align-items: center;
  flex: 1;
`;
export default function ProfileScreen() {
  const navigation = useNavigation<ScreenNavigationProp>();
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    dispatch(AuthActions.logoutAction());
  }, [dispatch]);

  return (
    <AppScreen>
      <AppScreenWrapper>
        {/* <Button
          title="Edit Name"
          onPress={() => navigation.navigate('EditNameModal')}
        /> */}
        <ContentCard>
          <Button theme="secondary" title="Log out" onPress={handleLogout} />
        </ContentCard>
        <ButtonWrapper>
          <Button theme="secondary" title="Log out" onPress={handleLogout} />
        </ButtonWrapper>
      </AppScreenWrapper>
    </AppScreen>
  );
}
