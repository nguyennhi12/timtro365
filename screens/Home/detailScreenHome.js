import React, { useState } from 'react';
import {  Text, View, Button, ScrollView } from 'react-native';
import Swiper from './Swiper/swiper';
import {styles} from './home.styles'
import DanhMuc from './DanhMuc/danhmuc';
import News from './News_new/News';
import { Searchbar } from 'react-native-paper';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { SearchAll } from '../../hook/News';
export default function Home({navigation}) {    
    const[searchkey, setSearchkey]=useState('');
    

    const onPress =()=>{
        navigation.navigate("searchall",searchkey)
        //console.log("search nhe",searchkey)
    }
    return (
        <View style={styles.container}>  
            <Searchbar placeholder="Type Here..." platform='android' onChangeText={(text)=>setSearchkey(text)} 
            value={searchkey} searchIcon={<Icon name="search" color="black" size={20}  />} 
            cancelIcon={<Icon name="search" color="black" size={20}/>}
            onIconPress={()=>onPress()}
            />
            <Swiper style={styles.card}/> 
            <ScrollView>                     
                <DanhMuc navigation={navigation}/> 
                <News navigation={navigation}/>
            </ScrollView>
           
        </View>
    );
}

