import IconBack  from 'react-native-vector-icons/AntDesign';
import {View,TouchableOpacity,Text, ScrollView,Image, ToastAndroid } from 'react-native';
import { Button } from 'native-base';
import React,{useState} from 'react';
import {Calendar,CalendarList, Agenda} from 'react-native-calendars';
import { Avatar} from 'react-native-paper';
import { styles } from './ScheduleNews.styles';
import {GetInfoUserbyID} from '../../hook/Account'
import  News from '../../config/News';
import {HookGetSche_by_id_user_id_news} from '../../hook/News'

export default function ScheduleNews({route,navigation}) {
    const data=route.params  
    const pressHandle = ()=>{
        navigation.goBack();
    }
    const {listsche,setcheckget, newDaysObject, status}=HookGetSche_by_id_user_id_news({id_news:data.id_news})
    const {info,account}=GetInfoUserbyID({id_user:data.id_user})
    const Check_Date_inArrSetDate = (date)=>{
        for(var i=0; i<listsche.length;i++){
            if(listsche[i].date==date){
                return false
            }
        }
        return true
    }
    const Set_Date = async(date)=>{
        console.log("sta",status)
        if(status==false){
            if(Check_Date_inArrSetDate(date.dateString)==true){  
                var info={
                    id_news:data.id_news,
                    id_innkeeper: data.id_user,
                    date_time:date.dateString,
                    address: data.address
                }
                //console.log("xóa")
                console.log(info)
                const result = await News.create_schedule(info)
                console.log(result.statusCode)
                if(result.statusCode==200){
                    setcheckget(false)
                }else{
                    ToastAndroid.show(result.message,ToastAndroid.LONG)
                }            
                //rồi dk ngày cho chủ xác nhận đi 
                //gọi hàm đi 
            }else{
                const sche ={
                    id_news:data.id_news,
                    date: date.dateString
                }
            
                const result = await News.delete_schedule_byid_news_id_user_date(sche)
                console.log(result)
                if(result.statusCode==200){
                setcheckget(false)
                }else{
                    ToastAndroid.show(result.message,ToastAndroid.LONG)
                }
                //rồi dk ngày cho chủ xác nhận đi 
                //gọi hàm đi 
            }
        }else{
            ToastAndroid.show("Cuộc hẹn đã được xác nhận. Không thể thay đổi",ToastAndroid.LONG)
        }
    }
    const onPressLong = (date)=>{
        if(data.year<new Date().getFullYear()){
            ToastAndroid.show("Ngày đã qua không set được lịch",ToastAndroid.LONG)
            ToastAndroid.show("Ngày đã qua không set được lịch",ToastAndroid.LONG)
        }else{
            if(date.year==new Date().getFullYear()){
                if(date.month < new Date().getMonth()+1){
                    ToastAndroid.show("Ngày đã qua không set được lịch",ToastAndroid.LONG)
                }else{
                    if(date.month==new Date().getMonth()+1){
                        if(date.day<new Date().getDate()){
                            ToastAndroid.show("Ngày đã qua không set được lịch",ToastAndroid.LONG,ToastAndroid.CENTER)
                            
                        }else{
                            Set_Date(date)
                        }
                    }else{
                        Set_Date(date)
    
                    }
                }
            }else{
                Set_Date(date)
            }
            
        }
        
    }
    return (
        <View style={styles.container}>
              {/* header nè */}
           <View style={styles.navigation}> 
            <TouchableOpacity style={{margin:'2%'}} onPress={pressHandle}>
              <IconBack name="arrowleft" color="white" size={28}  />
            </TouchableOpacity> 
            <Text style={{color:'white', fontWeight:'bold', fontSize:20, marginTop:'2%', marginLeft:'2%'}}>Đặt lịch hẹn</Text>
          </View>
            <Text style={{fontSize:20, fontWeight:'bold', backgroundColor:'white'}}>Mã tin: {data.id_news} - {data.header}</Text>
            <View style={{flexDirection:'row', width:'100%', height:'20%', backgroundColor:'white', marginTop:'1%', marginBottom:'1%'}}>
                <Image style={styles.image} resizeMode='stretch' source={{uri:data.image}}></Image>
                <View style={{marginLeft:'3%', marginRight:"2%"}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Giá: {data.cost} VNĐ</Text>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Địa chỉ: {data.address}</Text>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Diện tích:{data.area} m*m </Text>
                </View>
                
            </View>
            {info==null||account==null?console.log(null):
            <View style={{flexDirection:'row', paddingTop:'2%',paddingLeft:'2%',paddingBottom:'3%', backgroundColor:'white'}}>
                
                <View>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Người đăng tin:</Text>
                    <View style={{flexDirection:'row'}}>
                        <Avatar.Image  source={{uri:info[0].image}}size={50}></Avatar.Image>
                        <View style={{marginLeft:'3%'}}> 
                            <Text style={{fontSize:14,  marginLeft:'3%'}}>{info[0].displayname}</Text>
                            <Text style={{fontSize:14,  marginLeft:'3%'}}>{info[0].phonenumber}</Text>
                        </View>
                        
                    </View>
                </View>
                <View style={{paddingLeft:'3%'}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>Người xem tin:</Text>
                    <View style={{flexDirection:'row'}}>
                        <Avatar.Image  source={{uri:account.image}}size={50}></Avatar.Image>
                        <View style={{marginLeft:'3%'}}> 
                            <Text style={{fontSize:14,  marginLeft:'3%'}}>{account.displayname}</Text>
                            <Text style={{fontSize:14,  marginLeft:'3%'}}>{account.phonenumber}</Text>
                        </View>
                        
                    </View>
                </View>
            </View>}
            <View style={{marginTop:'2%'}}>
                <Text style={{fontSize:20, fontWeight:'bold', backgroundColor:'white'}}>Chọn ngày phù hợp để xem nhà</Text>
                <Calendar
                    // Collection of dates that have to be marked. Default = {}
                    markedDates={newDaysObject}
                    onDayLongPress={date=>onPressLong(date)}
                />
            </View>
          
        </View>
    );
}
