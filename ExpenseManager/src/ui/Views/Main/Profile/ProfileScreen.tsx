import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import Button from '@ui/Theme/Button/AppButton';
import styled from 'styled-components/native';

import {ScreenNavigationProp} from '@ui/Types/navigationTypes';
import AppScreen from '@ui/Theme/AppScreen/AppScreen';
import {AuthActions} from '@features/reducers/Auth/AuthReducer';
import {useDispatch, useSelector} from 'react-redux';
import ContentCard from '@ui/Theme/Card/ContentCard';
import {ButtonWrapper, CardContentWrapper} from '@ui/Views/Auth/AuthScreen';
import {
  getUserEmail,
  getUserName,
} from '@features/selectors/User/UserSelectors';
import {Text} from 'react-native';
import {UserActions} from '@features/reducers/User/UserReducer';

const AppScreenWrapper = styled.View`
  align-items: center;
  flex: 1;
`;

const EditRowWrapper = styled.View`
  flex-direction: row;
  width: 100%;
`;

const EditButtonWrapper = styled.View`
  width: 30%;
  justify-content: flex-end;
`;
export default function ProfileScreen() {
  const navigation = useNavigation<ScreenNavigationProp>();
  const name = useSelector(getUserName);
  const email = useSelector(getUserEmail);
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    dispatch(AuthActions.logoutAction());
  }, [dispatch]);

  const handleOpenUpdateModal = useCallback(() => {
    dispatch(UserActions.resetUpdateStatus());
    navigation.navigate('EditNameModal');
  }, [dispatch, navigation]);

  return (
    <AppScreen>
      <AppScreenWrapper>
        <ContentCard>
          <CardContentWrapper>
            <EditRowWrapper>
              <Text>Name: </Text>
              <Text>{name}</Text>
              <EditButtonWrapper>
                <Button
                  theme="primary"
                  title="Edit"
                  onPress={handleOpenUpdateModal}
                />
              </EditButtonWrapper>
            </EditRowWrapper>
            <EditRowWrapper>
              <Text>Email: </Text>
              <Text>{email}</Text>
            </EditRowWrapper>
          </CardContentWrapper>
        </ContentCard>
        <ButtonWrapper>
          <Button theme="secondary" title="Log out" onPress={handleLogout} />
        </ButtonWrapper>
      </AppScreenWrapper>
    </AppScreen>
  );
}
