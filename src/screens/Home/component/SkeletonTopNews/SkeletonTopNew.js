import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './SkeletonTopNew.styles';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
const CustomSkeletonCategories = () => {
  return (
    <SkeletonPlaceholder>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.setItemNews}>
          <Image style={styles.imageNews} />
          <Text style={styles.itemName}></Text>
          <Text style={styles.itemPrice}></Text>
        </View>
        <View style={styles.setItemNews}>
          <Image style={styles.imageNews} />
          <Text style={styles.itemName}></Text>
          <Text style={styles.itemPrice}></Text>
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export default CustomSkeletonCategories;
