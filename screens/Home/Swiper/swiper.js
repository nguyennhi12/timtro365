import React, {Fragment, Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  
} from 'react-native';
import Swiper from 'react-native-swiper';
import {styles} from './swiper.styles'

const swiper = ()=>{


    return(
        <View style={{height:'30%'}}>
            <Swiper style={styles.wrapper}  autoplay autoplayTimeout={4} >
                <View style={styles.slide1}>           
                    <Image style={styles.image} resizeMode='stretch' source={require('../../../images/timphongtro.png')}></Image>
                </View>
                <View style={styles.slide2}>
                    <Image style={styles.image} resizeMode='stretch' source={require('../../../images/dangtin.png')}></Image>
                </View>
                <View style={styles.slide3}>
                    <Image style={styles.image} resizeMode='stretch' source={require('../../../images/pic_tim_tro.jpg')}></Image>
                </View>
            </Swiper>

        </View>
        
    )
}

export default swiper;