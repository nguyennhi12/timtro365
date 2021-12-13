
import React , {useState, useEffect}from 'react';
import {
  FlatList,
  Image,
  View,
  Text,
  TouchableOpacity
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
    <Text style={styles.itemPrice}>{item.cost} VNĐ</Text>
  </View>
); 
const HomeSectionComponent = ({navigation}) => {
  const {results, setcheck, check,setresult}= HookNews();
  if(results==null){
    console.log(results)
    
  }
  const checksavenew=(id_news)=>{
    //console.log(savenew.length)
    for(let i=0;i<savenew.length;i++){
        //console.log(savenew[i].id_news,id_news)
        if(savenew[i].id_news==id_news){
            //console.log(savenew[i].id_news,id_news)
            //set_checksave(true)
            return true
        }
    }
    return false
}
  const {savenew,setcheckgetsavenews, checkgetsavenews,statusCodeSave}=HookGetSaveNews()
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
            //checksave:checksave,
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
  );
};

export default HomeSectionComponent;


