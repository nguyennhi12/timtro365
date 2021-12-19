import React, { useState } from 'react';
import {View,TouchableOpacity,Text,StyleSheet, ScrollView, ToastAndroid,ActivityIndicator } from 'react-native';
import IconBack  from 'react-native-vector-icons/AntDesign';
import {styles} from './infomation_of_innkeeper.styles'
import { Avatar} from 'react-native-paper';
import { Button,ListItem } from 'react-native-elements';
import IconFeather  from 'react-native-vector-icons/Feather';
import {HookGetNewsbyIdUser} from '../../hook/News'
import {HookGetSaveNews} from '../../hook/News'
import  News from '../../config/News';
import Account from '../../config/Account';
import {get_follower_id_user_id_follower,getfollowerbyid_user,getfollowerbyid_follower} from '../../hook/Account'
export default function Infomation_of_Innkeeper({route,navigation}) {
    const data=route.params
    //console.log(data[0].id_user)
    const {listnews,setcheckget, checkget}= HookGetNewsbyIdUser(data[0].id_user)
    const {savenew,setcheckgetsavenews, checkgetsavenews}=HookGetSaveNews() 
    const {followid_follower,setcheckfollowid_follower,checkfollowid_follower,check_follow}= get_follower_id_user_id_follower({id_follower:data[0].id_user})
    const {followid_user,setcheckfollowid_user,checkfollowid_user}=getfollowerbyid_user({id_user:data[0].id_user})
    const {followidfollower,setcheckfollowidfollower,checkfollowidfollower}=getfollowerbyid_follower({id_user:data[0].id_user})
    const pressHandle = ()=>{
        navigation.goBack();
    }
    const checksavenew=(id_news)=>{
      //console.log(savenew.length)
      for(let i=0;i<savenew.length;i++){
          //console.log(savenew[i].id_news,id_news)
          if(savenew[i].id_news==id_news){
              //console.log(savenew[i].id_news,id_news)
              //set_checksave(true)
              return true
          }
      }
      return false
  }
    const onPressSave=async(id_news)=>{
      //console.log(id_news)
      const results= await News.save_news(id_news)
      //console.log(results)
      if(results.statusCode==200){
          setcheckgetsavenews(!checkgetsavenews)
      }
  }
  const onPressUnSave=async(id_news)=>{
      // console.log(id_news)
      // console.log(id_news)
      const results= await News.un_save_news(id_news)
      //console.log(results)
      if(results.statusCode==200){
          setcheckgetsavenews(!checkgetsavenews)
      }
  }
  const onPressFollow = async()=>{
    //console.log("follow")
    const result=await Account.create_follow(data[0].id_user)
    if(result.statusCode==200){
      setcheckfollowid_follower(!checkfollowid_follower)
      setcheckfollowid_user(!checkfollowid_user)
      setcheckfollowidfollower(!checkfollowidfollower)
    }else{
      if(result.statusCode==401){
        ToastAndroid.show("Bạn chưa đăng nhập!!", ToastAndroid.SHORT);
      }else{
        ToastAndroid.show("Có 1 số lỗi",ToastAndroid.SHORT)
      }
      
    }
  }
  const onPressunFollow= async()=>{
    // console.log("unfollow")
    // console.log("follow")
    const result=await Account.delete_follow(data[0].id_user)
    if(result.statusCode==200){
      //console.log(result)
      setcheckfollowid_follower(!checkfollowid_follower)
      setcheckfollowid_user(!checkfollowid_user)
      setcheckfollowidfollower(!checkfollowidfollower)
    }else{
      ToastAndroid.show("Có 1 số lỗi",ToastAndroid.SHORT)
    }
  }

    return (      
        <View style={styles.container} >
          {/* header nè */}
          
          {followid_follower==null||followid_user==null||listnews==null?<ActivityIndicator size="large" color="#AB49E9" style={{paddingTop:'70%', paddingBottom:'70%'}}/>:
            <View>
            <View style={styles.navigation}> 
              <TouchableOpacity style={{margin:'2%'}} onPress={pressHandle}>
                <IconBack name="arrowleft" color="#AB49E9" size={28}  />
              </TouchableOpacity>  
            </View>
            <ScrollView>
              {/* thông tin của người dùng */}
              
            <View style={{flexDirection:'row', padding:'3%', backgroundColor:'#F5E1FD'}}>
              <Avatar.Image  source={{uri:data[0].image}}size={100}></Avatar.Image>
              <View>
                <Text style={{marginTop:'3%', fontSize:18, fontWeight:'bold', marginLeft:'10%'}}>{data[0].displayname}</Text>
                <View style={{flexDirection:'row'}}>
                  <Text style={{marginTop:'3%', fontSize:12, marginLeft:'10%'}}>Số người theo dõi: {followidfollower.length}</Text>
                  <Text style={{marginTop:'3%', fontSize:12, marginLeft:'10%'}}>Đang theo dõi: {followid_user.length}</Text>
                
                </View>
                <View style={{flexDirection:'row', marginLeft:'10%', marginTop:'2%'}}>
                  {check_follow==false?<Button
                      style={{marginLeft:'3%'}}
                      icon={<IconBack name="plus" size={20} color='white'/>}
                      iconLeft
                      title='Follow '
                      containerStyle={{backgroundColor:'#FFF'}}
                      buttonStyle={{backgroundColor:'#3E0895'}}
                      onPress={onPressFollow}
                      />:<Button
                      style={{marginLeft:'3%'}}
                      icon={<IconBack name="plus" size={20} color='white'/>}
                      iconLeft
                      title='Unfollow '
                      containerStyle={{backgroundColor:'#FFF'}}
                      buttonStyle={{backgroundColor:'#3E0895'}}
                      onPress={onPressunFollow}
                      />}
                </View>              
              </View>
            </View>
            {/* thông tin chi tiết hơn */}
            <View style={{backgroundColor:'white', marginTop:'1%', paddingLeft:'1%'}}>
              <View style={{flexDirection:'row', marginTop:'2%'}}>
                <IconFeather name="star" size={25} color='#777777'/>
                <Text style={{marginTop:'1%', marginLeft:'3%', color:'#777777'}}>Đánh giá: Chưa có đánh giá</Text>
              </View>
              <View style={{flexDirection:'row', marginTop:'2%'}}>
                <IconBack name="enviromento" size={25} color='#777777'/>
                <Text style={{marginTop:'1%', marginLeft:'3%', color:'#777777'}}>Địa chỉ: {data[0].address} </Text>
              </View>
              <View style={{flexDirection:'row', marginTop:'2%'}}>
                <IconBack name="mail" size={25} color='#777777'/>
                <Text style={{marginTop:'1%', marginLeft:'3%', color:'#777777'}}>Email: {data[0].email} </Text>
              </View>
              <View style={{flexDirection:'row', marginTop:'2%'}}>
                <IconFeather name="phone-call" size={25} color='#777777'/>
                <Text style={{marginTop:'1%', marginLeft:'3%', color:'#777777'}}>Số điện thoại: {data[0].phonenumber} </Text>
              </View>
            </View>

            {/* Các tin đã đăng */}
            <View style={styles.listItem}>
                  <Text style={{marginLeft:'2%', marginTop:'2%', fontSize:18, fontWeight:'bold'}}>Tin đang đăng - {listnews.length} tin</Text>
                  {listnews.map((item)=>(
                          <ListItem key={item.id_news}  bottomDivider>  
                              <Avatar.Image  source={{uri:item.image}}size={80}></Avatar.Image>
                                                  
                              <ListItem.Content>
                              <ListItem.Title>{item.header}</ListItem.Title>
                              <ListItem.Title style={{color:'red'}}>Giá phòng:{item.cost} VNĐ</ListItem.Title>
                              <View style={styles.selection}>
                                  <IconBack name='calendar'iconLeft style={{margin:'4.5%'}}/>
                                  <ListItem.Subtitle style={{marginTop:'3%'}}> Thời gian đăng: {new Date(item.time_create).toLocaleDateString()}</ListItem.Subtitle>
                                  {savenew==null?console.log("null nè"):checksavenew(item.id_news)==true?<Button
                                      style={{marginLeft:'8%'}}
                                      icon={<IconBack name="heart" size={15} color='red'/>}
                                      iconRight
                                      type='clear'
                                      onPress={onPressUnSave.bind(this,item.id_news)}/>:                                
                                  <Button
                                      style={{marginLeft:'8%'}}
                                      icon={<IconBack name="heart" size={15} color='pink'/>}
                                      iconRight
                                      type='clear'
                                      onPress={onPressSave.bind(this,item.id_news)}/>}
                              </View>
                                  
                              </ListItem.Content>
                          </ListItem>
                    
                      
                  ))} 
              </View>
            </ScrollView>
            
          </View>}
        </View>
    );
}

