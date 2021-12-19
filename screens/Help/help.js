
import React from 'react';
import {Text, View, Button,TouchableOpacity } from 'react-native';
import IconBack from 'react-native-vector-icons/AntDesign'
import { styles } from './help.styles';
import { Avatar} from 'react-native-paper';
export default function Help({navigation}) {
    const pressHandle = ()=>{
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.navigation}> 
                <TouchableOpacity style={{padding:'2%'}} onPress={pressHandle}>
                    <IconBack name="arrowleft" color="white" size={28}  />
                </TouchableOpacity>
                <Text style={{color:'white', fontWeight:'bold',fontSize:23, paddingTop:'1.5%'}}>Trợ giúp</Text>
            </View>
            <View style={{alignItems:'center', marginTop:'3%'}}>
                <Text style={{color:'red', fontSize:20,fontWeight:'bold'}}>Mọi vấn đề xin liên hệ đội hỗ trợ</Text>
            </View>
            <View style={{flexDirection:'row', marginTop:'2%', padding:'3%', justifyContent:'center'}}>
                <View style={{marginRight:'5%'}}>
                    <Avatar.Image source={{uri:'https://thuthuatnhanh.com/wp-content/uploads/2019/10/anh-avatar-soai-ca-superman.jpg'}}
                     size={120}></Avatar.Image>
                    <View style={{alignItems:'center'}}>
                        <Text style={{fontWeight:'bold', fontSize:15}}>Bùi Đức Huy</Text>
                        <Text>MSSV: 18110117</Text>
                        <Text>SĐT: 0797772505</Text>
                    </View>
                </View>
                <View style={{marginLeft:'8%'}}>
                    <Avatar.Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToGetRwQBY1zQ6lTQBJ_6UlJEmCyKKGiHZYZ8C_hPp1l0KdM23wAtqFhUEtGF29TBafzk&usqp=CAU'}}
                     size={120}></Avatar.Image>
                    <View style={{alignItems:'center'}}>
                        <Text style={{fontWeight:'bold', fontSize:15}}>Nguyễn Thị Yến Nhi</Text>
                        <Text>MSSV: 18110170</Text>
                        <Text>SĐT: 0786962329</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
