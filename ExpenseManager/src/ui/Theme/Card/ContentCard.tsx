import React from 'react';
import styled from 'styled-components/native';

import Colours from '@ui/Theme/Colours';

export interface ContentCardProps {
  children?: React.ReactElement<unknown> | null;
}

const Container = styled.View`
  background-color: ${Colours.cardBackground};
  flex-direction: column;
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px;
  padding-bottom: 30px;
  width: 100%;
`;

export default function ContentCard(props: ContentCardProps) {
  return <Container>{props.children}</Container>;
}
