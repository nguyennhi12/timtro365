
import React,{useState} from 'react';
import { TouchableOpacity, View} from 'react-native';
import { Searchbar } from 'react-native-paper';
import IconBack  from 'react-native-vector-icons/AntDesign';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { styles } from './Searchbar.styles';
export default function Search_bar({data,navigation}) {   
    const pressHandler =()=>{
        navigation.goBack()
    }
    const[searchkey, setSearchkey]=useState('')
    const onPress =()=>{
        navigation.navigate("searchall",searchkey)        
    }
    return (
        <View style={styles.navigation}> 
            <TouchableOpacity style={{marginTop:'4%'}} onPress={pressHandler}>
                <IconBack name="arrowleft" color="#3E0895" size={28}  />
            </TouchableOpacity>
            <Searchbar placeholder={data.title} searchIcon={<Icon name="search" color="#3E0895" size={20}  />} 
            cancelIcon={<Icon name="search" color="black" size={20}  />} onChangeText={(text)=>setSearchkey(text)} value={searchkey} 
            style={{width:'90%', margin:'1%'}}
            onIconPress={()=>onPress()} />
        </View>
    );
}

