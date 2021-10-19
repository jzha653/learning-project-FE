import React from 'react';
import Background from '@ui/Theme/AppScreen/Background/Background';

export interface AppScreenProps {
  title?: string;
  children?: React.ReactElement<unknown> | null;
  headerLeft?: React.ReactElement<unknown> | null;
  headerRight?: React.ReactElement<unknown> | null;
}

export default function AppScreen(props: AppScreenProps) {
  return (
    <Background
      title={props.title}
      headerLeft={props.headerLeft}
      headerRight={props.headerRight}>
      {props.children}
    </Background>
  );
}
