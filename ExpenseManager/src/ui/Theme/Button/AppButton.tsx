import React, {useCallback} from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import Colours from '../Colours';
const PrimaryButtonWrapper = styled.TouchableOpacity`
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${Colours.buttonPrimaryBackground};
  border-width: 0;
  width: 100%;
  height: 50px;
`;
const PrimaryButtonText = styled.Text`
  color: ${Colours.buttonPrimaryText};
`;

const SecondaryButtonWrapper = styled.TouchableOpacity`
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${Colours.buttonSecondaryBackground};
  border-color: ${Colours.buttonSecondaryBorder};
  border-width: 0;
  width: 100%;
  height: 50px;
  border-width: 2px;
`;
const SecondaryButtonText = styled.Text`
  color: ${Colours.buttonSecondaryText};
`;

export interface ButtonProps {
  theme?: 'primary' | 'secondary'; // default "Primary"
  title?: string;
  isLoading?: boolean; // works with Primary, Secondary, Tertiary variants only for far
  onPress?: () => void;
}

export default function Button(props: ButtonProps) {
  const renderBtn = useCallback(() => {
    if (props.theme === 'primary') {
      return (
        <PrimaryButton
          title={props.title}
          isLoading={props.isLoading}
          onPress={props.onPress}
        />
      );
    }
    return (
      <SecondaryButton
        title={props.title}
        isLoading={props.isLoading}
        onPress={props.onPress}
      />
    );
  }, [props]);
  return renderBtn();
}

function PrimaryButton(props: ButtonProps) {
  return (
    <PrimaryButtonWrapper onPress={props.onPress} disabled={props.isLoading}>
      {!props.isLoading ? (
        <PrimaryButtonText>
          {props.title && props.title.toUpperCase()}
        </PrimaryButtonText>
      ) : (
        <ActivityIndicator size="small" color={Colours.titleText} />
      )}
    </PrimaryButtonWrapper>
  );
}

function SecondaryButton(props: ButtonProps) {
  return (
    <SecondaryButtonWrapper onPress={props.onPress} disabled={props.isLoading}>
      {!props.isLoading ? (
        <SecondaryButtonText>
          {props.title && props.title.toUpperCase()}
        </SecondaryButtonText>
      ) : (
        <ActivityIndicator size="small" color={Colours.titleText} />
      )}
    </SecondaryButtonWrapper>
  );
}
