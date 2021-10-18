import React from 'react';
import Background from '@ui/Theme/AppScreen/Background/Background';

export interface AppScreenProps {
  title?: string;
  children?: React.ReactElement<any> | null;
  headerLeft?: React.ReactElement<any> | null;
  headerRight?: React.ReactElement<any> | null;
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
