import React from 'react';
import {View} from 'react-native';
import HeaderCategories from './component/HeaderCategories/HeaderCategories';
import ListNews from './component/ListNews/ListNews';
import {styles} from './Categories.styles';
const Categories = ({route}) => {
  const itemCategory = route.params;
  return (
    <View style={styles.container}>
      <HeaderCategories itemCategory={itemCategory} />
      <ListNews itemCategory={itemCategory} />
    </View>
  );
};
export default Categories;
