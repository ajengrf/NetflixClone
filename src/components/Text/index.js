import React from 'react';
import {Text as RNText} from 'react-native';

const Text = ({children, color}) => {
  return <RNText style={[{color}]}>{children}</RNText>;
};

export default Text;
