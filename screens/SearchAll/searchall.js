import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ListItem, Avatar, Button } from 'react-native-elements';
import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid } from 'react-native';
import  {SearchAll} from '../../hook/News';
import { Searchbar } from 'react-native-paper';
import IconBack  from 'react-native-vector-icons/AntDesign';
import { Select ,NativeBaseProvider, Center} from 'native-base';
import {HookGetSaveNews} from '../../hook/News';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { styles } from './searchall.styles';

export default function searchall({route,navigation}) {
    const key=route.params
    console.log(key)
    const [searchkey,setsearchkey]=useState(key)
    
    const {results,setcheck, check}=SearchAll(searchkey)
    console.log(results)
    //console.log(data)
    
    const[selectkey, set_selectkey]=useState('')
    const pressHandler =()=>{
        navigation.goBack()
    }
    const pressListItem =(item)=>{
        var checksave=false
        if(statusCodeSave==200){
            if(checksavenew(item.id_news)==true){
                checksave=true
            }else{
                checksave=false
            }
            const data={
                ...item,
                checksave:checksave,
                statusCodeSave:true
            }
            navigation.navigate('detail_news',data)
        } else{
            const data={
                ...item,
                checksave:false,
                statusCodeSave:false
            }
            navigation.navigate('detail_news',data)
        }       
        
    }

    

    // lấy hook ở đây giờ lỗi database sài gán cứng trc
   
    const {savenew,setcheckgetsavenews, checkgetsavenews,statusCodeSave}=HookGetSaveNews()
    //console.log("re",results)
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
    const onIconPress = ()=>{
        if(searchkey!=""){
            setcheck(!check)
        }else{
            ToastAndroid.show("Bạn chưa nhập key ",ToastAndroid.SHORT)
        }
    }
    //Chờ fix database xong mở
    const onPressSave=async(id_news)=>{
        console.log(id_news)
        const results= await News.save_news(id_news)
        console.log(results)
        if(results.statusCode==200){
            setcheckgetsavenews(!checkgetsavenews)
        }
    }
    const onPressUnSave=async(id_news)=>{
        console.log(id_news)
        console.log(id_news)
        const results= await News.un_save_news(id_news)
        console.log(results)
        if(results.statusCode==200){
            setcheckgetsavenews(!checkgetsavenews)
        }
    }

    return (
      <View style={styles.container}>  
      <View style={styles.navigation}> 
          <TouchableOpacity style={{marginTop:'4%'}} onPress={pressHandler}>
              <IconBack name="arrowleft" color="white" size={28}  />
          </TouchableOpacity>
          <Searchbar placeholder="Type here" searchIcon={<Icon name="search" color="black" size={20}  />} 
          cancelIcon={<Icon name="search" color="black" size={20}  />} onChangeText={(key)=>setsearchkey(key)} value={searchkey} 
          style={{width:'90%', margin:'1%'}} 
          onIconPress={()=>onIconPress()}/>
      </View>
      {/* <View style={styles.selection}>
          <IconBack name="enviroment" color="black" size={30} style={{margin:'2%'}} />
          <Text  style={{marginTop:'3%', marginRight:'2%',fontSize:18}}>Khu vực:</Text>
          <NativeBaseProvider>
              <Select selectedValue={selectkey}
              fontSize='15'
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Choose Service"
              onValueChange={(itemvalue)=>set_selectkey(itemvalue)}>
                  {District.map(item=>(
                      <Select.Item key={item.code} label={item.name_with_type} value={JSON.stringify(item).toString()}/>
                  ))}   
              </Select>
          </NativeBaseProvider>    
      </View> */}
      <View style={styles.listItem}>
          {results!=null?results.statusCode==200?results.data.map((item)=>(
                  <ListItem key={item.id_news} onPress={pressListItem.bind(this,item)}  bottomDivider>  
                      <Avatar rounded size='large' source={{ uri: item.image}}></Avatar>                      
                      <ListItem.Content>
                      <ListItem.Title>{item.header}</ListItem.Title>
                      <ListItem.Title style={{color:'red'}}>Giá phòng:{item.cost} VNĐ</ListItem.Title>
                      <View style={styles.selection}>
                          <Icon name='calendar'iconLeft style={{margin:'4.5%'}}/>
                          <ListItem.Subtitle style={{marginTop:'3%'}}> Thời gian đăng: {new Date(item.time_create).toLocaleDateString()}</ListItem.Subtitle>
                          {statusCodeSave==200?savenew==null?console.log("null nè")
                          :checksavenew(item.id_news)==true?<Button
                              style={{marginLeft:'8%'}}
                              icon={<Icon name="heart" size={15} color='red'/>}
                              iconRight
                              type='clear'
                               onPress={onPressUnSave.bind(this,item.id_news)}
                              />:                                
                          <Button
                              style={{marginLeft:'8%'}}
                              icon={<Icon name="heart" size={15} color='pink'/>}
                              iconRight
                              type='clear'
                               onPress={onPressSave.bind(this,item.id_news)}
                              />:console.log("chưa dang nhap")}
                      </View>
                          
                      </ListItem.Content>
                  </ListItem>
             
              
          )):<View style={{alignItems:'center',alignContent:'center'}}>
              <Text style={{alignItems:'center', fontSize:20, fontWeight:'bold'}}>Không có bản tin phù hợp</Text>
          </View>:console.log("null")} 
      </View>
      
  </View>
    );
}


