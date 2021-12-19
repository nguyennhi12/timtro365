
import React , {useState, useEffect}from 'react';
import {
  FlatList,
  Image,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import {styles} from './News.styles'
import {HookNews} from '../../../hook/News'
import {HookGetSaveNews} from '../../../hook/News'
const item_image_1 = require('../../../images/canho.jpg');
const item_image_2 = require('../../../images/canho.jpg');
const item_image_3 = require('../../../images/canho.jpg');
const item_image_4 = require('../../../images/canho.jpg');

const Item = ({ item }) => (
  <View style={styles.itemContainer}>    
    <Image source={{
          uri: item.image,
        }} style={styles.itemImage} />
    <Text style={styles.itemName} numberOfLines={2}>
      {item.header}
    </Text>
    <Text style={styles.itemPrice}>{item.cost/10} triệu VNĐ</Text>
  </View>
); 
const HomeSectionComponent = ({navigation}) => {
  const {results, statusresult}= HookNews();  
  const checksavenew=(id_news)=>{    
    for(let i=0;i<savenew.length;i++){        
        if(savenew[i].id_news==id_news){           
            return true
        }
    }
    return false
}
  const {savenew,statusCodeSave}=HookGetSaveNews()
  const pressListItem =(item)=>{
    var checksave=false
    if(statusCodeSave==200){
        if(checksavenew(item.id_news)==true){
            checksave=true
        }else{
            checksave=false
        }
        const data={
            ...item,
            checksave:checksave,
            statusCodeSave:true
        }
        navigation.navigate('detail_news',data)
    } else{
        const data={
            ...item,
            checksave:false,            
            statusCodeSave:false
        }
        navigation.navigate('detail_news',data)
    }       
    
}
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={pressListItem.bind(this,item)}>                    
                <Item item={item} />  
    </TouchableOpacity>
  );  
  return (
    <View style={styles.sectionContainer}>
      {/*  */}
      <Text style={styles.sectionTitle}>Tin đăng mới</Text>     
      {/*  */}      
      {/*  */}
      {statusresult==null?<ActivityIndicator size="large" color="#3E0895" />
        :results==null?<View style={styles.seeMoreContainer}>
        <Text style={styles.seeMoreText}>Hôm nay không có bài viết mới</Text>
        </View>:<View>
          <FlatList
            contentContainerStyle={{alignSelf: 'flex-start'}}
            numColumns='2'
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={results}
            renderItem={renderItem} 
            style={{marginLeft:'7%'}}
        />
        {/*  */}
          <View style={styles.seeMoreContainer}>
            <Text style={styles.seeMoreText}>Không còn tin nào khác </Text>
          </View>
        </View>
      }
     </View>
  );
};

export default HomeSectionComponent;


