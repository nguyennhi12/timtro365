import React, { useState } from 'react';
import {Text, View, Button, ScrollView } from 'react-native';
import { styles } from './SecondRoute.styles';
import {ListItem } from 'react-native-elements';
import { Avatar} from 'react-native-paper';
import IconBack from 'react-native-vector-icons/AntDesign'
import{getfollowerofme} from '../../../hook/Account'
export default function FirstRoute(data) {
    const{follow,setcheckfollow,checkfollow}=getfollowerofme()
    console.log(follow)
    return (
        <View >
            {
                follow!=null?<View>
                    <Text>Được theo dõi: {follow.length}</Text>
                    <ScrollView>
                        {follow.map(item=>(
                            <ListItem key={item.id_follow} bottomDivider>  
                            {/* <Avatar rounded size='large' source={{ uri: item.image}}></Avatar>                       */}
                            <Avatar.Image  source={{uri:item.follower_image}}size={90}></Avatar.Image>
                            <ListItem.Content>
                            <ListItem.Title>{item.follower_name}</ListItem.Title>
                            <ListItem.Title>Email: {item.follower_email}</ListItem.Title>
                            <ListItem.Title>SĐT: {item.follower_phone}</ListItem.Title>
                            
                                
                            </ListItem.Content>
                            </ListItem>
                        ))}
                    </ScrollView>
                </View>:console.log("")
            }
            
            
        </View>
    );
}

