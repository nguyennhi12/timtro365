import React, {useState,Component,useEffect} from 'react';
import {Image, TextInput,View,StyleSheet,Text, ScrollView, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Input} from 'react-native-elements';
import { NativeBaseProvider,Link ,Button} from 'native-base';
import {createStackNavigator} from '@react-navigation/stack';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/core';
import Account from '../../../config/Account'
import showAlert from '../../untils/Alert'
import { launchImageLibrary } from 'react-native-image-picker';
import { Avatar } from 'react-native-paper';
const InformationUser =({route})=>{
  const navigation = useNavigation();
  const data=route.params
  console.log(data)
  const [image, setImage] = useState({});
  useEffect(() => {
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      })();
    }, []);

 
    return(
        
        <NativeBaseProvider>
       
        <View style={styles.bottomView}>
            <View style={{paddingTop:'5%'}}>
                <View style={{marginBottom:'3%'}}>
                  <View style={{alignItems:'center'}}>
                    <Avatar.Image source={{uri:data.image}} size={150}></Avatar.Image>
                    <Text style={{fontSize:25, fontWeight:'bold', marginTop:'2%'}}>{data.displayname}</Text>
                    <Text style={{fontSize:18,marginTop:'2%'}}>{data.username}</Text>
                  </View>
                  </View>
                  <View style={{marginTop:'5%', marginLeft:'10%'}} >
                    <View style={{flexDirection:'row', marginBottom:'4%'}}>
                      <Icon name='phone' size={25}></Icon>
                      <Text style={{marginTop:'2%', marginLeft:'3%'}} >{data.phonenumber}</Text>
                    </View>
                    <View style={{flexDirection:'row', marginBottom:'4%'}}>
                      <Icon name='mail' size={25} style={{marginTop:'2%'}}></Icon>
                      <Text style={{marginTop:'2%',marginLeft:'3%'}}>{data.email}</Text>
                    </View>
                    <View style={{flexDirection:'row', marginBottom:'4%'}}>
                      <Icon name='home' size={25} style={{marginTop:'1%'}}></Icon>
                      <Text style={{marginTop:'2%',marginLeft:'3%'}}>{data.address}</Text>
                    </View>
                    <View style={{flexDirection:'row', marginBottom:'4%'}}>
                      <Icon name='lock' size={25} style={{marginTop:'1%'}}></Icon>
                      <Text style={{marginTop:'2%',marginLeft:'3%'}} onPress={()=>navigation.navigate('ChangePassword')}>Đổi mật khẩu</Text>
                    </View>
                  </View>
                  
                    
                  
                </View>
                 
           
        </View>
        </NativeBaseProvider>
      
    );
    
};
export default InformationUser;

const styles=StyleSheet.create({
    brandView:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        
    },
    brandViewText:{
        color: '#ffffff',
        fontSize: 30,
        fontWeight: 'bold',
        
    },
    bottomView:{
        flex: 1.5,
        backgroundColor: '#ffffff',
    },
});