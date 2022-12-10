import {FlatList, Image, View} from 'react-native';
import React from 'react';
import Text from '../../../../../../components/Text';
import {Color} from '../../../../../../themes';
import styles from './styles';

const data = [1, 2, 3, 4, 5];

const ListPoster = ({title}) => {
  const renderItem = () => {
    return (
      <Image
        source={{
          uri: 'https://m.media-amazon.com/images/M/MV5BM2MzYThlMWQtYWQyYy00ZWZmLTljMmMtMWEzZmYyZTNjZWYyXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg',
        }}
        style={styles.posterImage}
      />
    );
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
      />
    </View>
  );
};

export default ListPoster;
