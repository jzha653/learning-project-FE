import React from 'react';
import styled from 'styled-components/native';

import Colours from '@ui/Theme/Colours';
import Title from '@ui/Theme/AppScreen/Title/Title';

const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${Colours.titleBar};
  flex-direction: column;
`;

const Background = styled.View`
  width: 100%;
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;
  background-color: ${Colours.background};
  border-top-right-radius: 30px;
`;

interface Props {
  theme?: string;
  title?: string;
  children?: React.ReactElement<unknown> | null;
  headerLeft?: React.ReactElement<unknown> | null;
  headerRight?: React.ReactElement<unknown> | null;
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
