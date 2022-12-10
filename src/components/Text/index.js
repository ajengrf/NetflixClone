import React from 'react';
import {Text as RNText} from 'react-native';

const Text = ({children, color, style, ...props}) => {
  return (
    <RNText style={[{color}, style]} {...props}>
      {children}
    </RNText>
  );
};

export default Text;
