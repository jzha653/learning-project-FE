import React from 'react';
import Background from './Background/Background';

export interface AppScreenProps {
  title?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
