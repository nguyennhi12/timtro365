import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import DetailScreenHome from '../screens/Home/detailScreenHome'

import React from 'react'
import HeaderHome from '../Shareds/HeaderHome/headerHome';
import ReviewDetails from '../screens/reviewDetails'
import bottom_navigation from './../screens/Home/BottomNavigation/bottomnavigation';
const screens={
    Home:{
        screen: DetailScreenHome,
        navigationOptions:{
            header:()=> <HeaderHome/> 
        }
    },
    
}


const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
