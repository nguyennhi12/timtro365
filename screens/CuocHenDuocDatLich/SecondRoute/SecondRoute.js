import React, { useState } from 'react';
import {Text, View, Button, ScrollView, ToastAndroid } from 'react-native';
import {Calendar,CalendarList, Agenda} from 'react-native-calendars';
import {HookGetSche_by_id_innkeeper} from '../../../hook/News'
import Innkeeper  from '../../../config/Innkeeper';
import { Avatar } from 'react-native-elements';

export default function SecondRoute(data) {
    const {listsche,setcheckget, newDaysObject}=HookGetSche_by_id_innkeeper()
    console.log("123",listsche)
    const [show,setshow]=useState(false)
    const [listshow, setlistshow]=useState([])
    //const [date_time, setdate]=useState()
    //const{listnews,setcheck, checkget}=HookGet_schedule_iduser_date({date: date_time})
    const Show_detail_schedule = async(date)=>{
        console.log(date)
        if(show==false){
            const detail=await Innkeeper.getschedulebyid_innkeeper_date({date:date.dateString});    
            console.log(detail)
            setlistshow(detail.data)
        }
        setshow(!show)
    }
    const onPressXacNhan = async(item)=>{
        //console.log("xác nhận",item)
        const result= await Innkeeper.acceptschedulebyinnkeeper({id_schedule:item.id_schedule})
        console.log(result)
        if(result.statusCode=200){
            const schedule= {
                id_news:item.id_news,
                id_user:item.sche_iduser
            }
            const re= await Innkeeper.delete_schedule_byid_news_id_inn_await(schedule)
            setcheckget(false)
        }else{
            ToastAndroid.show("Có 1 số vấn đề!!")
        }
    }
    return (
        <View >
            <ScrollView>
            <View >
                
                <Calendar
                    // Collection of dates that have to be marked. Default = {}
                    markedDates={newDaysObject}
                    onDayPress={date=>Show_detail_schedule(date)}
                />
               
            </View>
            <View style={{backgroundColor:'white'}}>
                    {show==true?<View>
                        <Text style={{fontSize:20, fontWeight:'bold'}}>Các cuộc hẹn:</Text>
                        {listshow.map((item)=>(
                            <View style={{flexDirection:'row'}} key={item.id_schedule}>
                              <Text style={{fontSize:60, fontWeight:'bold'}}>{new Date(item.date_time).getDate()}</Text> 
                              <View style={{marginLeft:'2%', marginTop:'1%'}}>
                                <Text>{item.id_news}</Text>
                                <Text>Chủ nhà: {item.displayname} - {item.phonenumber}</Text>
                                <Text>Địa chỉ: {item.sche_address}</Text>
                                <View style={{flexDirection:'row'}}>
                                    <Text>Trạng thái: {item.sche_state}</Text>
                                    <Text onPress={onPressXacNhan.bind(this,item)} style={{color:'blue'}}>Xác nhận?</Text>
                                </View>
                               
                              </View>
                              <View style={{marginLeft:'1%', marginTop:'3%', marginBottom:'2%'}}>
                                <Avatar size='large' source={{uri: item.image}} ></Avatar>
                              </View>
                              
                            </View>
                        ))}
                    </View>:console.log("no show")}

                </View>
            </ScrollView>
        
        </View>
    );
}

