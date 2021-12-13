
import React from 'react';
import {Text, View, Button,TouchableOpacity } from 'react-native';
import IconBack from 'react-native-vector-icons/AntDesign';
import { styles } from './cuochenduocdatlich.styles';
import { Avatar} from 'react-native-paper';
import { TabView, SceneMap } from 'react-native-tab-view';
import {StyleSheet, StatusBar, FlatList, useWindowDimensions} from 'react-native';
import SecondRoute from './SecondRoute/SecondRoute'
import FirstRoute from './FirstRoute/FirstRoute'
 
export default function Help({route,navigation}) {
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
    const data= route.params
    const pressHandle = ()=>{
        navigation.goBack();
    }
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'ĐÃ HẸN', data:data},
        { key: 'second', title: 'ĐƯỢC HẸN' ,data:data},
    ]);

    return (
        <View style={styles.container}>
            <View style={styles.navigation}> 
                <TouchableOpacity style={{padding:'2%'}} onPress={pressHandle}>
                    <IconBack name="arrowleft" color="white" size={28}  />
                </TouchableOpacity>
                <Text style={{color:'white', fontWeight:'bold',fontSize:23, paddingTop:'1.5%'}}>Cuộc hẹn đã được đặt lịch</Text>
            </View>
            <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            />

        </View>
    );
}
