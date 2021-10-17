import {Text} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {initApp} from '@domain/reducers/AuthReducer';
import styled from 'styled-components';

const Backgroud = styled.View`
  backgroundcolor: red;
  width: 100%;
  height: 100%;
`;

export default function SplashScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(initApp());
    }, 3000);
  });

  return (
    <Backgroud>
      <Text>blablabla</Text>
    </Backgroud>
  );
}
