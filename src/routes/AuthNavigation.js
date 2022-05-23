import React from 'react';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import LoginScreen from '../screens/Login/loginScreen';
import RootNavigation from './RootNavigation';
import SignUp from '../screens/signUp/signUp';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthNav} from '../constants/routes';
const Stack = createStackNavigator();
const AuthNavigation = route => {
  return (
    <Stack.Navigator initialRouteName={AuthNav.LOGIN}>
      <Stack.Screen
        name={AuthNav.LOGIN}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={AuthNav.ROOT_NAV}
        component={RootNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={AuthNav.SIGN_UP}
        component={SignUp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default AuthNavigation;
