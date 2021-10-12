import React from 'react';
import Background from './Background/Background';

export interface AppScreenProps {
  children?: React.ReactElement<any> | null;
}

export default function AppScreen(props: AppScreenProps) {
  return <Background children={props.children}></Background>;
}
