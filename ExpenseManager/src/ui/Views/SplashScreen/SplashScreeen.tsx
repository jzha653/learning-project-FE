import {Text} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {AuthActions} from '@features/reducers/AuthReducer';
import styled from 'styled-components/native';
import Colours from '@ui/Theme/Colours';

const Backgroud = styled.View`
  background-color: ${Colours.background};
  width: 100%;
  height: 100%;
`;

export default function SplashScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(AuthActions.initApp());
    }, 3000);
  });

  return (
    <Backgroud>
      <Text>blablabla</Text>
    </Backgroud>
  );
}
