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
import {HookImageNewsbyIdnews} from '../../../hook/News'
const swiper = (id_news)=>{
    //console.log(id_news)
    //const {results}= HookImageNewsbyIdnews(id_news.id_news)
    //console.log("data",results.data)
    const results={data:[{
        id_images:"image_1",
        image:'https://cdn.tgdd.vn/Files/2020/03/30/1245627/kinh-nghiem-tim-phong-tro-gia-re-top-xx-website-t.jpg'
    },
    {
        id_images:"image_2",
        image:'https://timviec365.com/pictures/news/2020/03/13/pvk1584102929.jpg'
    },
    {
        id_images:"image_3",
        image:'https://image.finhou.com/Resource/Blogs/Thumbnails/109/4251/tong-hop-kinh-nghiem-tim-nha-tro-sinh-vien-4251.jpg'
    },
    {
        id_images:"image_4",
        image:'https://cdn.tgdd.vn/Files/2020/03/30/1245627/kinh-nghiem-tim-phong-tro-gia-re-top-xx-website-t.jpg'
    }]}
    return(
        <View style={{height:'30%'}}>
            {
                 results.length==0?<Swiper style={styles.wrapper}>
                     <View style={styles.slide1}>           
                         <Image style={styles.image} resizeMode='stretch' source={{uri:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fisocarp.org%2Fapp%2Fuploads%2F2014%2F05%2Fnoimage.jpg&imgrefurl=https%3A%2F%2Fisocarp.org%2F%3Fattachment_id%3D6158&tbnid=XYIOfiIviSb59M&vet=12ahUKEwjP_6Tsvcb0AhW_tUsFHRe3AhsQMygBegUIARCwAQ..i&docid=XUcjjXlRKWkv8M&w=275&h=275&q=noimage&ved=2ahUKEwjP_6Tsvcb0AhW_tUsFHRe3AhsQMygBegUIARCwAQ'}}></Image>
                     </View>
                  
                  </Swiper>
                 :<Swiper style={styles.wrapper}>
                 {
                     results.data.map((item)=>(
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