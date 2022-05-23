import React from 'react';
import TabNavigation from './TabNavigation';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthNav} from '../constants/routes';
import Categories from '../screens/Categories/Categories';
import DetailNews from '../screens/DetailNews/DetailNews';
import InformationOfInnKeeper from '../screens/InfomationOfInnKeeper/InformationOfInnKeeper';
const Stack = createStackNavigator();
const RootNavigation = route => {
  return (
    <Stack.Navigator initialRouteName={AuthNav.SPLASH_SCREEN}>
      <Stack.Screen
        name={AuthNav.TAB_NAV}
        component={TabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={AuthNav.CATEGORIES}
        component={Categories}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={AuthNav.DETAIL_NEWS}
        component={DetailNews}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={AuthNav.INFORMATION_INNKEEPER}
        component={InformationOfInnKeeper}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default RootNavigation;
