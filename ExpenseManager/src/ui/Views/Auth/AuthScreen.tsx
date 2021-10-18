import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import SwitchSelector from 'react-native-switch-selector';

import AppScreen from '@ui/Theme/AppScreen/AppScreen';
import Colors from '@ui/Theme/Colours';
import Fonts from '@ui/Theme/Fonts';

import {AuthActions} from '@features/reducers/AuthReducer';
import styled from 'styled-components/native';
import ContentCard from '@ui/Theme/Card/ContentCard';
import Button from '@ui/Theme/Button/AppButton';
import {getError, getIsAuthPending} from '@features/selectors/AuthSelectors';

const AppScreenWrapper = styled.View`
  align-items: center;
  flex: 1;
`;

const SwitchWrapper = styled.View`
  margin-top: 20px;
  width: 100%;
`;

const CardContentWrapper = styled.View`
  flex-direction: column;
  width: 100%;
`;

const CardInput = styled.TextInput`
  margin-top: 5px;
  font-size: ${Fonts.big};
  border-bottom-color: blue;
  border-bottom-width: 1px;
`;

const InputLabel = styled.Text`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: ${Fonts.base};
  color: ${Colors.inputLabel};
`;

const ButtonWrapper = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 150px;
  width: 100%;
`;

const ErrorMessage = styled.Text`
  color: ${Colors.errorMessage};
  width: 100%;
  text-align: center;
  font-size: ${Fonts.big};
`;

export default function AuthScreen() {
  const dispatch = useDispatch();
  const errorMessage = useSelector(getError);
  const authLoading = useSelector(getIsAuthPending);

  const [selectedType, setSelectedType] = useState(1);
  const [name, setName] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined | null>(undefined);

  const handleAuth = useCallback(() => {
    if (selectedType === 1) {
      dispatch(AuthActions.signUpAction({name, password, email}));
    } else {
      dispatch(AuthActions.loginAction({password, email}));
    }
  }, [dispatch, email, name, password, selectedType]);

  useEffect(() => {
    setError(errorMessage);
  }, [errorMessage]);

  const handleNameChange = useCallback(nameInput => {
    setError(null);
    setName(nameInput);
  }, []);

  const handleEmailChange = useCallback(emailInput => {
    setError(null);
    setEmail(emailInput);
  }, []);

  const handlePasswordChange = useCallback(passwordInput => {
    setError(null);
    setPassword(passwordInput);
  }, []);

  const handleAuthTypeChange = useCallback(type => {
    setError(null);
    setPassword(undefined);
    setEmail(undefined);
    setName(undefined);
    setSelectedType(type as number);
  }, []);

  const options = [
    {label: 'Signup', value: 1},
    {label: 'Login', value: 2},
  ];

  return (
    <AppScreen title="Auth">
      <AppScreenWrapper>
        <SwitchWrapper>
          <SwitchSelector
            textColor={Colors.titleBar}
            selectedColor={Colors.titleText}
            buttonColor={Colors.titleBar}
            borderColor={Colors.titleBar}
            borderRadius={10}
            initial={0}
            onPress={handleAuthTypeChange}
            options={options}
          />
        </SwitchWrapper>
        <ContentCard>
          <CardContentWrapper>
            {selectedType === 1 && <InputLabel>Name</InputLabel>}
            {selectedType === 1 && (
              <CardInput onChangeText={handleNameChange} value={name} />
            )}
            <InputLabel>Email</InputLabel>
            <CardInput
              keyboardType="email-address"
              onChangeText={handleEmailChange}
              value={email}
            />
            <InputLabel>Password</InputLabel>
            <CardInput onChangeText={handlePasswordChange} value={password} />
          </CardContentWrapper>
        </ContentCard>
        <ButtonWrapper>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Button
            theme="primary"
            title="Continue"
            onPress={handleAuth}
            isLoading={authLoading}
          />
        </ButtonWrapper>
      </AppScreenWrapper>
    </AppScreen>
  );
}
