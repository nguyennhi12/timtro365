import React, { useEffect } from 'react';
import {View,Text, ToastAndroid,ActivityIndicator} from 'react-native';
import { ListItem, Avatar, Button } from 'react-native-elements';
import {styles} from './List_Item.styles'
import Icon  from 'react-native-vector-icons/FontAwesome';
import {HookGetNews} from '../../../hook/News'
import {HookGetSaveNews} from '../../../hook/News'
import  News from '../../../config/News';
import { useIsFocused } from '@react-navigation/native';
export default function List_Item({data,navigation}) {    
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
    const {results}= HookGetNews(data.id);
    const {savenew,setcheckgetsavenews, checkgetsavenews,statusCodeSave}=HookGetSaveNews()   
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
        const results= await News.save_news(id_news)    
        if(results.statusCode==200){
            setcheckgetsavenews(!checkgetsavenews)
        }else{
            if(results.statusCode==401){
                ToastAndroid.show("Bạn chưa đăng nhập!!",ToastAndroid.SHORT)
            }
        }
    }
    const onPressUnSave=async(id_news)=>{        
        const results= await News.un_save_news(id_news)        
        if(results.statusCode==200){
            setcheckgetsavenews(!checkgetsavenews)
        }
    }
    const isFocused = useIsFocused();    
    useEffect(()=>{
        //console.log("hihi")
        setcheckgetsavenews(!checkgetsavenews)
     },[isFocused]);
    return (
        <View>
            {statusCodeSave==false||results==null?<ActivityIndicator size="large" color="#3E0895"  style={{paddingTop:'70%'}} />:
                <View style={styles.listItem}>
                    {results.statusCode==200?results.data.map((item)=>(
                            <ListItem key={item.id_news} onPress={pressListItem.bind(this,item)}  bottomDivider>  
                                <Avatar rounded size='large' source={{ uri: item.image}}></Avatar>                      
                                <ListItem.Content>
                                <ListItem.Title>{item.header}</ListItem.Title>
                                <ListItem.Title style={{color:'red'}}>Giá phòng:{item.cost} VNĐ</ListItem.Title>
                                <View style={styles.selection}>
                                    <Icon name='calendar'iconLeft style={{margin:'4.5%'}}/>
                                    <ListItem.Subtitle style={{marginTop:'3%'}}> Thời gian đăng: {new Date(item.time_create).toLocaleDateString()}</ListItem.Subtitle>
                                    {checksavenew(item.id_news)==true?<Button
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
                                        />}
                                </View>
                                </ListItem.Content>
                            </ListItem>
                    )):<View style={{alignItems:'center',alignContent:'center'}}>
                        <Text style={{alignItems:'center', fontSize:20, fontWeight:'bold'}}>Không có bản tin phù hợp</Text>
                    </View>} 
                </View>
            }
            
        </View>
    );
}

