import React, {useState} from 'react';
import {Avatar} from 'react-native-paper';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './Categories.styles';
import LIST_CATEGORIES from '../../../../constants/categories';
import {useNavigation} from '@react-navigation/native';
import {AuthNav} from '../../../../constants/routes';
const Item = ({item}) => (
  <View style={styles.categogy}>
    <Avatar.Image source={item.srce} size={80}></Avatar.Image>
    <Text style={styles.title}>{item.title}</Text>
  </View>
);

const Categories = () => {
  const navigation = useNavigation();
  const onViewCategories = item => {
    navigation.navigate(AuthNav.CATEGORIES, item);
  };
  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => onViewCategories(item)}>
      <Item item={item} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.danhmuc}>Categories: </Text>
      <FlatList
        contentContainerStyle={{alignSelf: 'flex-start'}}
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={LIST_CATEGORIES}
        renderItem={renderItem}
        style={{}}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Categories;
