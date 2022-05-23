import React from 'react';
import {View, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import Carousel from 'react-native-snap-carousel';
import {styles} from './SwiperQC.styles';
import {DATA_SWIPER} from '../../../../constants/categories';
const SwiperQC = () => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.slide1} key={item.id}>
        <Image
          style={styles.image}
          resizeMode="stretch"
          source={item.img}></Image>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Swiper autoplay autoplayTimeout={4}>
        {DATA_SWIPER.map(item => (
          <View style={styles.slide1} key={item.id}>
            <Image
              style={styles.image}
              resizeMode="stretch"
              source={item.img}></Image>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default SwiperQC;
