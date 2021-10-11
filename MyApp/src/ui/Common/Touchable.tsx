import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

const noop = () => null;

interface TouchableProperties extends TouchableOpacityProps {
  children?: any;
  disabled?: boolean;
}

export default function Touchable(props: TouchableProperties): JSX.Element {
  const onPress = props.disabled ? noop : props.onPress;

  return <TouchableOpacity {...props} onPress={onPress} />;
}
