import React from 'react';
import {
  View,
  Image,
  ActivityIndicator
} from 'react-native';
import Swiper from 'react-native-swiper';
import {styles} from './swiper.styles'
import {HookImageNewsbyIdnews} from '../../../hook/News'
const swiper = (id_news)=>{ 
    const{results,check}=HookImageNewsbyIdnews(id_news.id_news)
    return(
        <View style={{height:'30%'}}>
            {
                 check==false?<ActivityIndicator size="large" color="#3E0895" style={{padding:'20%'}}/>
                 :<Swiper style={styles.wrapper}>
                 {
                     results.map((item)=>(
                     <View style={styles.slide1} key={item.id_images}>           
                         <Image style={styles.image} resizeMode='stretch' source={{uri:item.image}}></Image>
                     </View>
                     ))
                 }
                  </Swiper>
            }            
        </View>
    )
}

export default swiper;