import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

import Colours from '@ui/Theme/Colours';
import Dimension from '@ui/Theme/Measure';

const Container = styled.View`
  width: 100%;
  background-color: ${Colours.background};
  height: ${Dimension.titleHeight};
`;

const TitleView = styled.View`
  width: 100%;
  background-color: ${Colours.titleBar};
  height: ${Dimension.titleHeight};
  border-bottom-left-radius: 30px;
  flex-direction: row;
  justify-content: space-between;
  text-align-vertical: center;
  align-items: center;
  padding: 15px;
`;

const TitleText = styled.Text`
  color: ${Colours.titleText};
  font-weight: 500;
  font-size: 18px;
  margin-top: 10px;
  text-align: left;
`;

interface Props {
  title?: string;
  headerLeft?: React.ReactElement<any> | null;
  headerRight?: React.ReactElement<any> | null;
}

export default function AppScreenTitle(props: Props) {
  return (
    <Container>
      <TitleView>
        {props.headerLeft ? props.headerLeft : <View />}
        <TitleText>{props.title}</TitleText>
        {props.headerRight ? props.headerRight : <View />}
      </TitleView>
    </Container>
  );
}
