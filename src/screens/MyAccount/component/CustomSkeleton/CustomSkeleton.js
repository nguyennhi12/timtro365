import React from 'react';
import {View, Image, Text} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
const CustomSkeleton = () => {
  return (
    <SkeletonPlaceholder>
      <View>
        <Image style={{width: 400, height: 300}} />
        <View style={{marginLeft: 20, marginTop: 10}}>
          <View style={{width: 300, height: 20, borderRadius: 4}} />
          <View
            style={{marginTop: 6, width: 250, height: 20, borderRadius: 4}}
          />
        </View>
        <View style={{marginLeft: 20, marginTop: 30}}>
          <View style={{width: 300, height: 20, borderRadius: 4}} />
          <View
            style={{marginTop: 6, width: 250, height: 20, borderRadius: 4}}
          />
        </View>
        <View style={{marginLeft: 20, marginTop: 30}}>
          <View style={{width: 300, height: 20, borderRadius: 4}} />
          <View
            style={{marginTop: 6, width: 250, height: 20, borderRadius: 4}}
          />
          <View style={{width: 300, height: 20, borderRadius: 4}} />
          <View
            style={{marginTop: 6, width: 250, height: 20, borderRadius: 4}}
          />
          <View style={{width: 300, height: 20, borderRadius: 4}} />
          <View
            style={{marginTop: 6, width: 250, height: 20, borderRadius: 4}}
          />
          <View style={{width: 300, height: 20, borderRadius: 4}} />
          <View
            style={{marginTop: 6, width: 250, height: 20, borderRadius: 4}}
          />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export default CustomSkeleton;
