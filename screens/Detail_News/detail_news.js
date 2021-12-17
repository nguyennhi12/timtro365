import React, { useState,useEffect } from 'react';
import {View,TouchableOpacity,Text, ScrollView,ToastAndroid } from 'react-native';
import {styles} from './detail_news.styles'
import IconBack  from 'react-native-vector-icons/AntDesign';
import Swiper from './Swiper/swiper';
import { Button } from 'react-native-elements';
import InforInnkeeper from './info_Innkeeper/infor_Innkeeper'
import  News from '../../config/News';
import MoreNews from './MoreNews/MoreNews';
import { useIsFocused } from '@react-navigation/native';
import {HookGetSaveNews} from '../../hook/News'
export default function Home({route,navigation}) {
    const data=route.params
    const {savenew,setcheckgetsavenews, checkgetsavenews,statusCodeSave}=HookGetSaveNews()
    const checksavenew=(id_news)=>{
      for(let i=0;i<savenew.length;i++){
          if(savenew[i].id_news==id_news){
              return true
          }
      }
      return false
  }
    const pressHandler =()=>{
      navigation.goBack()
    }
    const pressHandlerHeart =()=>{
      console.log(data)
    }
  
    const pressHandlerHeart_Save =async()=>{
      if(statusCodeSave==200){
        const results= await News.save_news(data.id_news)
        console.log(results)
        if(results.statusCode==200){
          setcheckgetsavenews(!checkgetsavenews)
        }else{
          if(results.statusCode==401){
            ToastAndroid("Bạn chưa đăng nhập",ToastAndroid.SHORT)
          }else{
            if(results.statusCode==400){
              ToastAndroid.show("Bản tin này đã được lưu",ToastAndroid.SHORT)
            }
          }
        }
      }else{
        ToastAndroid.show("Chưa đăng nhập!",ToastAndroid.SHORT)
      }
        
    }
    const pressHandlerHeart_unSave = async()=>{
      if(statusCodeSave==200){
        const results= await News.un_save_news(data.id_news)
        if(results.statusCode==200){
          setcheckgetsavenews(!checkgetsavenews)
        }else{
          if(results.statusCode==401){
           ToastAndroid("Bạn chưa đăng nhập",ToastAndroid.SHORT)
          }else{
            if(results.statusCode==400){
              ToastAndroid.show("Bản tin này đã được lưu",ToastAndroid.SHORT)
            }
          }
        }
      }else{
        ToastAndroid.show("Bạn chưa đăng nhập!",ToastAndroid.SHORT)
      }
      
    }

    const onPressDatLich = ()=>{
      if(statusCodeSave==200){
        navigation.navigate('schedule_news',data)
      }else{
        ToastAndroid.show("Bạn chưa đăng nhập!",ToastAndroid.SHORT)
      }
      
    }
    const isFocused = useIsFocused();    
    useEffect(()=>{
        setcheckgetsavenews(!checkgetsavenews)
     },[isFocused]);
    return (
        <View style={styles.container}>
          {/* header */}
          <View style={styles.navigation}> 
            <TouchableOpacity style={{margin:'2%'}} onPress={pressHandler}>
              <IconBack name="arrowleft" color="#AB49E9" size={28}  />
            </TouchableOpacity>
            {
              savenew==null?<IconBack name="heart" color='#AB49E9' size={28}  />
              :checksavenew(data.id_news)?<TouchableOpacity style={{margin:'2%', marginLeft:'60%'}} onPress={pressHandlerHeart_unSave}>
              <IconBack name="heart" color="red" size={28}  />
              </TouchableOpacity>
              :<TouchableOpacity style={{margin:'2%', marginLeft:'60%'}} onPress={pressHandlerHeart_Save}>
                <IconBack name="heart" color="#AB49E9" size={28}  />
              </TouchableOpacity>
            }
            
            <TouchableOpacity style={{margin:'2%', marginLeft:'5%'}} onPress={pressHandlerHeart}>
              <IconBack name="bars" color="#AB49E9" size={30}  />
            </TouchableOpacity>
          </View>
           {/* Show hình nè */}
           <Swiper id_news={data.id_news} style={styles.card}/> 
          <ScrollView>           
          {/* show header của news nè */}
          <View style={{backgroundColor:'white'}}>
            <Text style={{fontSize:22, margin:'2%',fontWeight: "bold"}}>{data.header}</Text>
            <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:18,fontWeight: "bold",color:'red', marginLeft:'2%', marginTop:'2%'}}>{data.cost} triệu</Text>
              <View style={{marginLeft:'50%'}}>
                {savenew==null?console.log("null nè")
                                :checksavenew(data.id_news)?
                  <Button
                  style={{marginLeft:'50%'}}
                  icon={<IconBack name="heart" size={20} color='red'/>}
                  iconRight
                  onPress={pressHandlerHeart_unSave}
                  title='Bỏ lưu tin  '
                  buttonStyle={{backgroundColor:'#3E0895'}}/>:<Button
                  style={{marginLeft:'50%'}}
                  icon={<IconBack name="heart" size={20} color='white'/>}
                  iconRight
                  onPress={pressHandlerHeart_Save}
                  title='Lưu tin  '
                  buttonStyle={{backgroundColor:'#3E0895'}}/>}
                </View>
            </View>
            <Text style={{fontSize:18,color:'#808080', marginLeft:'2%', marginTop:'2%'}}> Thời gian đăng: {new Date(data.time_create).toLocaleDateString()}</Text>
            <View style={{flexDirection:'row',padding:'2%'}}>
                  <TouchableOpacity>
                    <IconBack name='enviroment' size={27}></IconBack>
                  </TouchableOpacity>
                  <Text style={{marginTop:'1%', marginLeft:'2%', width:'90%'}} >{data.home_number},đường {data.street}, {data.ward}, {data.distric}, {data.city} </Text>
            </View>             
          </View>
          {/* infomation của innkeeper nè */}
          <InforInnkeeper id_user={data.id_user} navigation={navigation}/> 
          {/* Thông tin của bản tin nè */}
          <View style={{backgroundColor:'white', marginTop:'1%', padding:'2%'}}>
              <View style={{flexDirection:'row', marginTop:'1.5%'}}>
                <IconBack name='profile' size={23}></IconBack>
                <Text style={{fontSize:16,marginLeft:'1%'}}>Thông tin chi tiết</Text>
              </View>
              <Text style={{fontSize:16,marginLeft:'7%', marginTop:'1%',marginBottom:'1%'}}>{data.description}</Text>
              <View style={{flexDirection:'row', marginTop:'1.5%'}}>
                <IconBack name='meh' size={23}></IconBack>
                {data.state==1?<Text style={{fontSize:16, marginLeft:'1%'}}>Trạng thái: Còn nhu cầu tìm khách thuê</Text>
              :<Text style={{fontSize:16, marginLeft:'1%'}}>Trạng thái: Đã có khách thê</Text>}
              </View>
              
              
              <View style={{flexDirection:'row', marginTop:'1.5%'}}>
                <IconBack name='enviromento' size={23}></IconBack>
                <Text style={{fontSize:16, marginLeft:'1%'}}>Địa chỉ chủ nhà: {data.address}</Text>
              </View>
              
              <View style={{flexDirection:'row', marginTop:'1.5%'}}>
                  <IconBack name='earth' size={20}></IconBack>
                  <Text style={{fontSize:16, marginLeft:'1%'}}>Diện tích: {data.area} m*m</Text>
              </View>
              <Button
                  style={{marginLeft:'50%'}}
                  icon={<IconBack name="calendar" size={20} color='black'/>}
                  iconLeft
                  title=' Đặt lịch hẹn với chủ nhà  '
                  type='clear'
                  onPress={onPressDatLich}/>
          </View>          
          {/* Danh sách tin tương tự */}
          <MoreNews navigation={navigation} id_news={data.id_news} id_user = {data.id_user} />
          </ScrollView>
          
        </View>
    );
}


