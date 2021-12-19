import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostScreen from './Post';
import Home from '../Home/detailScreenHome'
import Login from '../components/LoginScreen/index'

const Stack= createNativeStackNavigator();
const StackPost=()=>{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={PostScreen} name='Chọn địa chỉ'options={{headerShown: false}}/>
        <Stack.Screen component={Home} name='home'options={{headerShown: false}}/>
       
      </Stack.Navigator>
    </NavigationContainer>
  )
};
export default StackPost;