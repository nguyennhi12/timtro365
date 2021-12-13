import React, {Fragment, Component} from 'react';
import {
  View,
  Text,
} from 'react-native';
import {Button } from 'react-native-elements';
import { Avatar} from 'react-native-paper';
import {GetInfoUserbyID} from '../../../hook/Account'
const InforInnkeeper = ({id_user,navigation})=>{
    const {info,checkinfo}=GetInfoUserbyID({id_user})
    // const info=[{
    //     image:"https://bizweb.dktcdn.net/100/340/942/files/hoa-hong-leo-trong-bao-lau-thi-ra-hoa-min-1.jpg?v=1617793248941",
    //     displayname:"Nguyễn Nhi Cute",
    //     address:"Nhà ở đâu hỏi chi",
    //     phonenumber:"đéo",
    // }]
    //console.log("info",info,checkinfo)
    const pressViewPage = ()=>{
        navigation.navigate('info_innkeeper',info)
    }
    return(
        <View style={{backgroundColor:'white', marginTop:'1%'}}>
            {info==null?console.log(null):
                <View style={{flexDirection:'row',  marginTop:'4%', marginLeft:'2%'}}>
                   <Avatar.Image  source={{uri:info[0].image}}size={80}></Avatar.Image>
                    <View style={{margin:'2%'}}>
                        <Text style={{fontSize:18, color:'red', fontWeight:'bold'}}>{info[0].displayname}</Text>
                        <Text style={{fontSize:13, marginTop:'3%'}}>{info[0].address}</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{marginTop:'3%'}}>{info[0].phonenumber}</Text>
                            <View style={{marginLeft:'37%'}}>
                                <Button title='Xem trang'
                                type='clear'
                                onPress={pressViewPage}></Button>
                            </View>
                            
                        </View>
                        
                    </View>
                     
                </View>
            }
            
        </View>
    )
}

export default InforInnkeeper;