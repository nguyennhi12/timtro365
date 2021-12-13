import React, { useState } from 'react';
import {Text, View, Button, ScrollView } from 'react-native';
import {Calendar,CalendarList, Agenda} from 'react-native-calendars';
import {HookGetSche_by_id_user} from '../../../hook/News'
import {HookGet_schedule_iduser_date} from '../../../hook/News'
import News  from '../../../config/News';
import { Avatar } from 'react-native-elements';
import { color } from 'react-native-reanimated';
export default function FirstRoute(data) {
    const {listsche,setcheckget, newDaysObject}=HookGetSche_by_id_user()
    console.log(listsche)
    const [show,setshow]=useState(false)
    const [listshow, setlistshow]=useState([])
    //const [date_time, setdate]=useState()
    //const{listnews,setcheck, checkget}=HookGet_schedule_iduser_date({date: date_time})
    const Show_detail_schedule = async(date)=>{
        console.log(date)
        if(show==false){
            const detail=await News.getschedulebyid_user_date({date:date.dateString});    
            console.log(detail)
            setlistshow(detail.data)
        }
        setshow(!show)
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
                                <Text>Trạng thái: {item.sche_state}</Text>
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

