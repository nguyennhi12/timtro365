import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  Text, View, Button } from 'react-native';
import { globalStyles } from '../../styles/global';
import Swiper from './Swiper/swiper';
import {styles} from './home.styles'
import Navibar from '../../routes/HomeStack'

export default function Home({navigation}) {
    return (
        <Navibar/>
    );
}

