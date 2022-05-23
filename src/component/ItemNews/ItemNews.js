import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {styles} from './ItemNews.styles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {AuthNav} from '../../constants/routes';
const ItemNews = ({
  item,
  isSaveNews,
  setIsStartSave,
  setIdStartSave,
  statusCodeSaveNews,
}) => {
  const navigation = useNavigation();
  const isSaved = isSaveNews();
  const startSaveOrUnSave = () => {
    setIsStartSave(!isSaved);
    setIdStartSave(item.id_news);
  };
  // Xem detail news
  const onViewDetailNews = () => {
    if (statusCodeSaveNews == 200) {
      navigation.navigate(AuthNav.DETAIL_NEWS, item);
    } else {
      navigation.navigate(AuthNav.DETAIL_NEWS, item);
    }
  };
  return (
    <TouchableOpacity style={styles.setItemNews} onPress={onViewDetailNews}>
      <TouchableOpacity
        style={{
          width: 30,
          height: 30,
          position: 'absolute',
          zIndex: 100,
          backgroundColor: 'rgba(192,192,192,0.6)',
          right: 5,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
          margin: 5,
        }}
        onPress={startSaveOrUnSave}>
        {isSaved ? (
          <IconAntDesign name="heart" size={20} style={{color: 'red'}} />
        ) : (
          <IconAntDesign name="hearto" size={20} style={{color: 'black'}} />
        )}
      </TouchableOpacity>

      <Image
        source={{
          uri: item.image,
        }}
        style={styles.imageNews}
      />
      <Text style={styles.itemName} numberOfLines={2}>
        {item.header}
      </Text>
      <Text style={styles.itemPrice}>{item.cost} triệu VNĐ</Text>
    </TouchableOpacity>
  );
};
export default ItemNews;
