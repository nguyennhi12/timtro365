import React from 'react';
import LoginScreen from '../components/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import RegisterScreen from '../components/RegisterScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './More';
import HeaderHome from './../../Shareds/HeaderHome/headerHome';
import Save_News from '../Save_News/save_news'
import DetailNews from '../Detail_News/detail_news'
import Help from '../Help/help';
import Cuochenduocdatlich from '../CuocHenDuocDatLich/cuochenduocdatlich';
import Follow from '../Follow/Follow'
import InformationUser from '../components/InformationUser';
const Stack= createNativeStackNavigator();
const StackMore=()=>{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={ProfileScreen} name='Thêm' options={{ title: 'Thêm' }}/>
        <Stack.Screen component={LoginScreen} name='Đăng nhập'/>
        <Stack.Screen component={RegisterScreen} name='Đăng kí'/>
        <Stack.Screen component={Save_News} name='save_news' options={{headerShown: false}} />
        <Stack.Screen component={DetailNews} name='detail_news' options={{headerShown: false}}/>
        <Stack.Screen component={Help} name='help' options={{headerShown: false}}/>
        <Stack.Screen component={Cuochenduocdatlich} name='cuochenduocdatlich' options={{headerShown: false}}/>
        <Stack.Screen component={Follow} name='follow' options={{headerShown: false}}/>
        <Stack.Screen component={InformationUser} name='Information' options={{ title: 'Thông tin cá nhân'}}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  )
};
export default StackMore;
