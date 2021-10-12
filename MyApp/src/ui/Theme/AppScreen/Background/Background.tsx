import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import Colours from '../../Colours';
import Title from '../Title/Title';
const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${Colours.titleBar};
  flex-direction: column;
`;
const Background = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${Colours.background};
  border-top-right-radius: 30px;
`;

interface Props {
  theme?: string;
  children?: React.ReactElement<any> | null;
}
export default function ViewBackground(props: Props) {
  return (
    <Container>
      <Title />
      <Background>{props.children}</Background>
    </Container>
  );
}
