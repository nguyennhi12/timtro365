import React, { useState,useCallback,useEffect } from 'react';
import {StyleSheet, View, Text, StatusBar, Image, TouchableOpacity, ToastAndroid} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './Morestyles';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GetAccount,ReloadPage} from '../../hook/Account'
import { useIsFocused } from '@react-navigation/native';

 const ProfileScreen =  ({navigation}) => {
  
    const ProfileItem = ({icon, name, _onpress}) => (
      <View style={styles.itemContainer}>
        <MaterialCommunityIcons name={icon} size={26} color="#4a027f" />
        {_onpress=='SignOut'?<Text style={[styles.itemText, {marginLeft: icon ? 20 : 0}]} onPress={SignOut} >{name}</Text>:<Text style={[styles.itemText, {marginLeft: icon ? 20 : 0}]} >{name}</Text>}
        <FontAwesome name="angle-right" size={26} color="#4a027f" />
      </View>
    ); 
    
    const{account,setaccount}=GetAccount()
    async function SignOut(){
      await AsyncStorage.removeItem('account')        
      console.log('1234')
      setaccount(null)
      window.location.href = window.location.href;
      
    } 
    const onPress_TinDang_Luu =async ()=>{
      //const account = JSON.parse(await AsyncStorage.getItem("account"))
      if(account==null){
        ToastAndroid.show("Bạn chưa đăng nhập",ToastAndroid.SHORT)
      }else{
        navigation.navigate('save_news',account)
      }
      
    } 
    const onPress_Help =async ()=>{
      navigation.navigate('help')
      
    } 
    const onPress_Cuochen =async ()=>{
      const account = JSON.parse(await AsyncStorage.getItem("account"))
      if(account==null){
        ToastAndroid.show("Bạn chưa đăng nhập",ToastAndroid.SHORT)
      }else{
        navigation.navigate('cuochenduocdatlich',account)
      }
      
    } 
    const onPress_Follow =async ()=>{
      //const account = JSON.parse(await AsyncStorage.getItem("account"))
      if(account==null){
        ToastAndroid.show("Bạn chưa đăng nhập",ToastAndroid.SHORT)
      }else{
        navigation.navigate('follow',account)
      }
      
    }
    const isFocused = useIsFocused();
    const fetchRoadmap = useCallback( async()=>{
      console.log("uaaa")
      var result=JSON.parse(await AsyncStorage.getItem("account"))
      setaccount(result)
    },[]) 
    useEffect(()=>{
        console.log("hihi")
        fetchRoadmap()
     },[isFocused]);
    return (
        <View style={styles.bodyContainer}>
          <View style={styles.userContainer}>
          {account==null? <View style={styles.avatarContainer}>
                            <MaterialIcons name="person" size={26} color="#fff" 
                            onPress={()=>navigation.navigate('Information')}/>
                          </View>
                        :<Image source={{
                          uri: account.image,
                        }} style={styles.itemImage}/>}
            <View style={styles.textContainer}>
              <Text style={styles.welcomeText}>Chào mừng bạn đến với Nhà trọ 365</Text>
              {account==null?<Text style={styles.authText} onPress={()=>navigation.navigate('Đăng nhập')}>Đăng nhập/Đăng ký </Text>
                              :<Text style={styles.authText} onPress={()=>navigation.navigate('Information',account)}>{account.displayname} </Text>}
              
            </View>            
            <FontAwesome name="angle-right" size={26} color="#1e88e5" />
          </View>
          <View style={styles.divider} />
          <TouchableOpacity onPress={onPress_TinDang_Luu}>
            <ProfileItem icon="heart" name="Tin đăng đã lưu"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress_Cuochen}>
            <ProfileItem icon="calendar" name="Cuộc hẹn được đặt lịch" />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress_Follow}> 
            <ProfileItem icon="human-male-male" name="Theo dõi" />
          </TouchableOpacity>
          
          <TouchableOpacity onPress={onPress_Help}>
            <ProfileItem icon="help" name="Trợ giúp" />
          </TouchableOpacity>
          
          {/* <ProfileItem icon="cog-outline" name="Cài đặt" /> */}
          {account==null?console.log("null roi")
                              :<ProfileItem icon="logout" name="Đăng xuất" _onpress='SignOut'/>}
          
          
        </View>
      
    );
  };
export default ProfileScreen; 