import React , {useState, useEffect}from 'react';
import {
  Image,
  View,
  Text,
  ScrollView,
} from 'react-native';
import { Button } from 'react-native-elements';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {HookGetGoiY_News} from '../../../hook/News'
import {styles} from './MoreNews.styles'
import {HookGetSaveNews} from '../../../hook/News'
import { useIsFocused } from '@react-navigation/native';

const ProductItem = ({navigation,item}) =>{ 
    const {savenew,setcheckgetsavenews, checkgetsavenews}=HookGetSaveNews()    
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
    const pressListItem =()=>{
        var checksave=false
        if(checksavenew(item.id_news)==true){
            checksave=true
        }else{
            checksave=false
        }
        const data={
            ...item,
            checksave:checksave
        }
        navigation.push('detail_news',data)
    }
    const isFocused = useIsFocused();    
    useEffect(()=>{
        console.log("hihi")
        setcheckgetsavenews(!checkgetsavenews)
     },[isFocused]);
    
return(
  <View style={styles.itemContainer}>  
  <TouchableOpacity onPress={pressListItem} >  
    <Image source={{
          uri: item.image,
        }} style={styles.itemImage} />
    <Text style={styles.itemName} numberOfLines={2}>
      {item.header}
    </Text>
    <View style={{flexDirection:'row'}}>
        <Text style={styles.itemPrice}>{item.cost} VNĐ</Text>
        {savenew==null?console.log("null nè"):checksavenew(item.id_news)==true?<Icon name="heart" style={{marginTop:'1%', marginLeft:'20%'}} size={20} color='red'/>
        :<Icon name="heart" size={20}  style={{marginTop:'1%', marginLeft:'20%'}} color='pink'/>}
    </View>
    </TouchableOpacity>
  </View>
)};

const MoreNews = ({navigation, id_news, id_user}) => {
    const {listnews,setcheckget, checkget} = HookGetGoiY_News({id_user, id_news})
    
    return (
    <View style={styles.sectionContainer}>
      {/*  */}
      <Text style={styles.sectionTitle}>Tin đăng mới</Text>     
      {/*  */}      
      {/*  */}
      <ScrollView horizontal={true}>
        <View style={styles.listItemContainer}>
          {listnews==null?console.log("null"):listnews.map((item, index) => (
            
                <View key={index.toString()}>
                    <ProductItem
                        item={item}
                        navigation={navigation}
                    />              
                </View>
        
          ))}
        </View>
      </ScrollView>
      {/*  */}
      <View style={styles.seeMoreContainer}>
        <Text style={styles.seeMoreText}>Không còn tin nào khác </Text>
      </View>
    </View>
  );
};

export default MoreNews;

