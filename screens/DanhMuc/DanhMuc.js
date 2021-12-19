import React from 'react';
import { ScrollView,View} from 'react-native';
import {styles} from './DanhMuc.styles'
import Search_bar from './Searchbar/Searchbar';
import List_Item from './List_Item/List_Item';
export default function DetailDanhMuc({route,navigation}) {
    var data = route.params   
    return (
        
        <ScrollView style={styles.container}>  
            <Search_bar data={data} navigation={navigation}/>
            <List_Item data={data} navigation={navigation} />
        </ScrollView>
    );
}

