import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailDanhMuc from './DanhMuc';
import Home from '../Home/detailScreenHome';
import DetailNews from '../Detail_News/detail_news'
import InforInnkeeper from '../Infomation_of_Innkeeper/infomation_innkeeper';
import ScheduleNews from '../ScheduleNews/ScheduleNews'
import searchall from '../Home/SearchAll/searchall';
const Stack= createNativeStackNavigator();
const StackDanhMuc=()=>{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Home} name='home' options={{headerShown: false}}/>
        <Stack.Screen component={DetailDanhMuc} name='danhmuc' options={{headerShown: false}}/>   
        <Stack.Screen component={DetailNews} name='detail_news' options={{headerShown: false}}/>
        <Stack.Screen component={InforInnkeeper} name='info_innkeeper' options={{headerShown: false}}/> 
        <Stack.Screen component={ScheduleNews} name='schedule_news' options={{headerShown: false}}/>
        <Stack.Screen component={searchall} name='searchall' options={{headerShown: false}}/>      
      </Stack.Navigator>
    </NavigationContainer>
  )
};
export default StackDanhMuc;
