import {View, ScrollView, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';

import {styles} from './PostNews.styles';
import ComponentAddImage from './component/ComponentAddImage/ComponentAddImage';
import ChoosePositionComponent from './component/ChoosePositionComponent/ChoosePositionComponent';
import DetailInfo from './component/DetailInfo/DetailInfo';
const PostNews = () => {
  const [uriImages, setUriImage] = useState([]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.styleTextStyle}>Post News</Text>
        <ChoosePositionComponent />
        <DetailInfo />
        <ComponentAddImage setUriImage={setUriImage} uriImages={uriImages} />
      </ScrollView>
    </View>
  );
};

export default PostNews;
