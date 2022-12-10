import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import Text from '../../../../components/Text';
import {Color} from '../../../../themes';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text color={Color.white}>Recently Added</Text>
    </View>
  );
};

export default HomePage;
