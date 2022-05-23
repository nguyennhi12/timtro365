import React from 'react';
import {View, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import Carousel from 'react-native-snap-carousel';
import {styles} from './SwiperNews.styles';
import {useGetImageNewsByIdNews} from '../../../../hooks/useGetNews';
const SwiperNews = ({news}) => {
  const {listImageNews, isLoadingGetImage} = useGetImageNewsByIdNews(
    news.id_news,
  );

  return (
    <View style={styles.container}>
      <Swiper autoplay autoplayTimeout={4}>
        {listImageNews.map(item => (
          <View style={styles.slide1} key={item.id_images}>
            <Image
              style={styles.image}
              resizeMode="stretch"
              source={{uri: item.image}}></Image>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default SwiperNews;
