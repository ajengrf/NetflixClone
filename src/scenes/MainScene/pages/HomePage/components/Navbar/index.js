import {Image, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Icons, Images} from '../../../../../../assets';

const Navbar = () => {
  return (
    <View style={styles.container}>
      <Image source={Icons.netflixLogo} style={styles.logo} />
      <View style={styles.rightContainer}>
        <Image source={Images.defaultProfile} style={styles.profileImage} />
        <Octicons name="search" size={23} style={styles.searchIcon} />
        <MaterialIcons name="cast" size={23} />
      </View>
    </View>
  );
};

export default Navbar;
