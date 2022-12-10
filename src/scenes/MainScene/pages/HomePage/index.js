import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import Navbar from './components/Navbar';
import ListPoster from './components/ListPoster';
import {TYPE} from './components/ListPoster/constants';

import styles from './styles';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView} />
      <Navbar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}>
        <ListPoster
          title="Top 10 TV Shows in Indonesia Today"
          type={TYPE.WITH_NUMBER}
          posterImageStyle={styles.posterImageWithNumber}
        />
        <ListPoster title="Recently Added" />
        <ListPoster title="Trending Now" />
        <ListPoster title="Only on Netflix" />
        <ListPoster title="Continue Watching for You" type={TYPE.WITH_PLAYER} />
        <ListPoster title="Anime" />
      </ScrollView>
    </View>
  );
};

export default HomePage;
