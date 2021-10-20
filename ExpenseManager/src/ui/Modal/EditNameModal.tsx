import {
  getUpdateUserStatus,
  getUserName,
} from '@features/selectors/User/UserSelectors';
import {useNavigation} from '@react-navigation/native';
import Button from '@ui/Theme/Button/AppButton';
import ContentCard from '@ui/Theme/Card/ContentCard';
import {ScreenNavigationProp} from '@ui/Types/navigationTypes';
import {
  ButtonWrapper,
  CardContentWrapper,
  CardInput,
  InputLabel,
} from '@ui/Views/Auth/AuthScreen';
import React, {useCallback, useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {useDispatch, useSelector} from 'react-redux';
import {Platform} from 'react-native';
import {UserActions} from '@features/reducers/User/UserReducer';
import {RequestStatus} from '@features/reducers';
const AppScreenWrapper = styled.KeyboardAvoidingView`
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: green;
`;

export const ModalButtonWrapper = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 50px;
  width: 100%;
  padding: 10px;
`;
export default function EditNameModal() {
  const userName = useSelector(getUserName);
  const updateStatus = useSelector(getUpdateUserStatus);
  const dispatch = useDispatch();

  const navigation = useNavigation<ScreenNavigationProp>();
  const [name, setName] = useState<string | undefined>(undefined);
  useEffect(() => setName(userName ? userName : undefined), [userName]);
  const handleNameChange = useCallback(nameInput => {
    setName(nameInput);
  }, []);
  useEffect(
    () =>
      updateStatus === RequestStatus.Fulfilled
        ? navigation.goBack()
        : undefined,
    [navigation, updateStatus],
  );

  const handleUpdate = useCallback(() => {
    dispatch(UserActions.update({name}));
  }, [dispatch, name]);

  return (
    <AppScreenWrapper>
      <AppScreenWrapper behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ContentCard>
          <CardContentWrapper>
            <InputLabel>Name</InputLabel>
            <CardInput onChangeText={handleNameChange} value={name} />
          </CardContentWrapper>
        </ContentCard>
        <ModalButtonWrapper>
          <Button
            theme="secondary"
            title="Cancel"
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Button
            theme="primary"
            title="update"
            onPress={handleUpdate}
            isLoading={updateStatus === RequestStatus.Pending}
          />
        </ModalButtonWrapper>
      </AppScreenWrapper>
    </AppScreenWrapper>
  );
}
