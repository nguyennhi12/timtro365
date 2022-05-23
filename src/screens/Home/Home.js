import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {styles} from './Home.styles';
import Categories from './component/Categories/Categories';
import HeaderHome from './component/HeaderHome/HeaderHome';
import TopNewsInDay from './component/TopNewsInDay/TopNewsInDay';
import SwiperQC from './component/Swiper/SwiperQC';
const Home = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <HeaderHome />
        <View style={styles.viewSwiper}>
          <SwiperQC />
        </View>
        <Categories />
        <View style={styles.secondsScreen}>
          <Text style={styles.textTopInNewsDay}>Top news in day</Text>
          <TopNewsInDay />
        </View>
        <View style={styles.secondsScreen}>
          <Text style={styles.textTopInNewsDay}>
            Top news with high ratting
          </Text>
          <TopNewsInDay />
        </View>
      </View>
    </ScrollView>
  );
};
export default Home;
