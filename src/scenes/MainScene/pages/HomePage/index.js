import {FlatList, Image, SafeAreaView, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Text from '../../../../components/Text';
import {Color} from '../../../../themes';
import {Icons, Images} from '../../../../assets';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Header from './components/Header';
import ListPoster from './components/ListPoster';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView} />
      <Header />
      <ListPoster title="Recently Added" />
      <ListPoster title="Trending Now" />
    </View>
  );
};

export default HomePage;
