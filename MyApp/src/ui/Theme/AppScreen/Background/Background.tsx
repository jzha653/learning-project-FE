import React from 'react';
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
  title?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: React.ReactElement<any> | null;
  headerLeft?: React.ReactElement<any> | null;
  headerRight?: React.ReactElement<any> | null;
}
export default function ViewBackground(props: Props) {
  return (
    <Container>
      <Title
        title={props.title}
        headerLeft={props.headerLeft}
        headerRight={props.headerRight}
      />
      <Background>{props.children}</Background>
    </Container>
  );
}
