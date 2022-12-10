import React from 'react';
import {Alert, FlatList, Image, Pressable, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Text from '../../../../../../components/Text';

import {TYPE} from './constants';
import {getNumber} from './utils';

import {Color} from '../../../../../../themes';
import styles from './styles';

const data = [1, 2, 3, 4, 5];

const ListPoster = ({title, type, posterImageStyle}) => {
  const renderItem = ({index, item}) => {
    const onPress = () => {
      Alert.alert(JSON.stringify(item));
    };

    switch (type) {
      case TYPE.WITH_NUMBER:
        return (
          <Pressable
            onPress={onPress}
            style={[styles.posterContainer, styles.posterWithNumberContainer]}>
            <Image source={getNumber(index)} style={styles.number} />
            <Image
              source={{
                uri: 'https://m.media-amazon.com/images/M/MV5BM2MzYThlMWQtYWQyYy00ZWZmLTljMmMtMWEzZmYyZTNjZWYyXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg',
              }}
              style={[styles.posterImage, posterImageStyle]}
            />
          </Pressable>
        );

      case TYPE.WITH_PLAYER:
        return (
          <Pressable onPress={onPress} style={styles.posterContainer}>
            <View>
              <Image
                source={{
                  uri: 'https://m.media-amazon.com/images/M/MV5BM2MzYThlMWQtYWQyYy00ZWZmLTljMmMtMWEzZmYyZTNjZWYyXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg',
                }}
                style={[
                  styles.posterImage,
                  styles.posterImageWithPlayer,
                  posterImageStyle,
                ]}
              />

              <View style={styles.playIconWrapper}>
                <Ionicons
                  name="play-circle-outline"
                  color={Color.white}
                  size={80}
                />
              </View>
            </View>
            <View style={styles.infoSection}>
              <Feather name="info" color={Color.white} size={20} />
              <Entypo
                name="dots-three-vertical"
                color={Color.white}
                size={18}
              />
            </View>
          </Pressable>
        );

      default:
        return (
          <Pressable onPress={onPress} style={styles.posterContainer}>
            <Image
              source={{
                uri: 'https://m.media-amazon.com/images/M/MV5BM2MzYThlMWQtYWQyYy00ZWZmLTljMmMtMWEzZmYyZTNjZWYyXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg',
              }}
              style={styles.posterImage}
            />
          </Pressable>
        );
    }
  };

  return (
    <View>
      <Text color={Color.white} style={styles.title}>
        {title}
      </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        contentContainerStyle={styles.listPosterImage}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ListPoster;
