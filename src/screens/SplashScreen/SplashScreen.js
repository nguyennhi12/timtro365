import React, {useState} from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import {styles} from './SplashScreen.styles';
import {AuthNav} from '../../constants/routes';
import {useNavigation} from '@react-navigation/native';
const SplashScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../asset/nhatro_1.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.name}>
        <Text style={styles.text}>Nhà trọ 365</Text>
      </View>
      <View style={styles.note}>
        <Text>Đến với chúng tôi, bạn sẽ có trải nghiệm thú vị nhất!</Text>
      </View>
      <View style={styles.button}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    </View>
  );
};
export default SplashScreen;
