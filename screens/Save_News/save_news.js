import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import { Text, View, TouchableOpacity,ScrollView} from 'react-native';
import { styles } from './save_news.styles';
import IconBack from 'react-native-vector-icons/AntDesign'
import { Avatar} from 'react-native-paper';
import {HookGetSaveNews} from '../../hook/News'
import { ListItem,Button } from 'react-native-elements';
import { useIsFocused } from '@react-navigation/native';
export default function Save_News({route,navigation}) {
    const data = route.params
    console.log(data)
    const pressHandle = ()=>{
        navigation.goBack();
    }
    const pressListItem = (item)=>{
        //console.log("hehe")
        const data={
            ...item,
            checksave:true,
            statusCodeSave:true
        }
        navigation.navigate('detail_news',data)
    }
    const {savenew,setcheckgetsavenews, checkgetsavenews,statusCodeSave}=HookGetSaveNews()
    console.log(savenew)
    const isFocused = useIsFocused();    
    useEffect(()=>{
        console.log("hihi")
        setcheckgetsavenews(!checkgetsavenews)
     },[isFocused]);
    return (
        <View style={styles.container} >
            <ScrollView>
                <View style={styles.navigation}> 
                <TouchableOpacity style={{margin:'2%'}} onPress={pressHandle}>
                <IconBack name="arrowleft" color="white" size={28}  />
                </TouchableOpacity> 
                <Text style={{color:'white', fontWeight:'bold', fontSize:20, marginTop:'2%', marginLeft:'2%'}}>Tin đăng đã lưu</Text>
                </View>
                <View style={{alignItems:'center', paddingTop:'3%', marginTop:'1%',marginBottom:'1%', backgroundColor:'white'}}>
                    <Avatar.Image  source={{uri:data.image}}size={150}></Avatar.Image>
                    <Text style={{fontWeight:'bold', fontSize:20}}>{data.displayname} </Text>
                    <Text style={{fontSize:15}}>{data.phonenumber} </Text>
                </View>
                <View style={styles.listItem}>
                    {savenew.length!=0?savenew.map((item)=>(
                            <ListItem key={item.id_news} onPress={pressListItem.bind(this,item)}  bottomDivider>  
                                {/* <Avatar rounded size='large' source={{ uri: item.image}}></Avatar>                       */}
                                <Avatar.Image  source={{uri:item.image}}size={90}></Avatar.Image>
                                <ListItem.Content>
                                <ListItem.Title>{item.header}</ListItem.Title>
                                <ListItem.Title style={{color:'red'}}>Giá phòng:{item.cost} VNĐ</ListItem.Title>
                                <View style={styles.selection}>
                                    <IconBack name='calendar'iconLeft style={{margin:'4.5%'}}/>
                                    <ListItem.Subtitle style={{marginTop:'3%'}}> Thời gian đăng: {new Date(item.time_create).toLocaleDateString()}</ListItem.Subtitle>
                                <Button
                                        style={{marginLeft:'8%'}}
                                        icon={<IconBack name="heart" size={15} color='red'/>}
                                        iconRight
                                        type='clear'
                                        />
                                </View>
                                    
                                </ListItem.Content>
                            </ListItem>
                    
                        
                    )):console.log("null")} 
                </View>
            </ScrollView>
            
        </View>
    );
}

