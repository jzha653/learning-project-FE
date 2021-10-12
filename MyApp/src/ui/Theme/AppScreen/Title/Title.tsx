import React from 'react';
import styled from 'styled-components/native';
import Colours from '../../Colours';

const Container = styled.View`
  width: 100%;
  background-color: ${Colours.background};
  height: 30px;
`;

const TitleView = styled.View`
  background-color: ${Colours.titleBar};
  height: 30px;
  border-bottom-left-radius: 30px;
`;

export default function AppScreenTitle() {
  return (
    <Container>
      <TitleView></TitleView>
    </Container>
  );
}
