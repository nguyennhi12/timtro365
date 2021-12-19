import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import { Text, View, TouchableOpacity,ScrollView,ActivityIndicator} from 'react-native';
import { styles } from './save_news.styles';
import IconBack from 'react-native-vector-icons/AntDesign'
import { Avatar} from 'react-native-paper';
import {HookGetSaveNews} from '../../hook/News'
import { ListItem,Button } from 'react-native-elements';
import { useIsFocused } from '@react-navigation/native';
export default function Save_News({route,navigation}) {
    const data = route.params
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
    const isFocused = useIsFocused();    
    useEffect(()=>{
        setcheckgetsavenews(!checkgetsavenews)
     },[isFocused]);
    return (
        <View style={styles.container} >
            <ScrollView>
                <View style={styles.navigation}> 
                <TouchableOpacity style={{margin:'2%'}} onPress={pressHandle}>
                <IconBack name="arrowleft" color="#FB708D" size={28}  />
                </TouchableOpacity> 
                <Text style={{color:'black', fontSize:21, marginTop:'2%', marginLeft:'2%'}}>Tin đăng đã lưu</Text>
                </View>
                
                <View style={styles.listItem}>
                    {checkgetsavenews==false||statusCodeSave==null?<ActivityIndicator size="large" color="#3E0895"  style={{paddingTop:'70%', paddingBottom:'100%'}} />
                    :savenew.length!=0?savenew.map((item)=>(
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
                    
                        
                    )):<Text>Không có bản tin nào được lưu</Text>} 
                </View>
            </ScrollView>
            
        </View>
    );
}

