import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {styles} from './ItemFollower.styles';
import {useNavigation} from '@react-navigation/native';
import {AuthNav} from '../../constants/routes';
const ItemFollower = ({item}) => {
  const navigation = useNavigation();
  // Xem detail news
  return (
    <TouchableOpacity style={styles.setItemNews}>
      <Image
        source={{
          uri: item.follower_image,
        }}
        style={styles.imageNews}
      />
      <Text style={styles.itemName} numberOfLines={2}>
        {item.follower_name}
      </Text>
      <Text style={styles.itemPrice}>{item.follower_phone}</Text>
    </TouchableOpacity>
  );
};
export default ItemFollower;
