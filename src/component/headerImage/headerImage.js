import React from 'react';
import {View, Image, Text, TextInput, ImageBackground} from 'react-native';
import {styles} from './headerImage.styles';
const HeaderImage = props => {
  return (
    <ImageBackground
      source={require('../../asset/phongTroNew.jpg')}
      style={styles.imageHeader}
      imageStyle={styles.imageHeader.imageStyles}>
      {/* <View style={styles.imageHeader.logoImage}>
        <Image
          source={require('../../asset/logo.jpg')}
          style={{
            borderRadius: 50,
            width: 100,
            height: 100,
            resizeMode: 'stretch',
          }}
        />
      </View> */}
    </ImageBackground>
  );
};
export default HeaderImage;
