import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import HeaderImage from '../../component/headerImage/headerImage';
import LoginFormContainer from './component/loginForm/loginForm.container';
import {styles} from './loginScreen.styles';
import {useNavigation} from '@react-navigation/native';
import {AuthNav} from '../../constants/routes';
const LoginScreen = ({route}) => {
  const navigation = useNavigation();
  const onCreateAccount = () => {
    navigation.navigate(AuthNav.SIGN_UP);
  };

  return (
    <View style={styles.container}>
      <HeaderImage textWelCome={'Welcom Back'} />
      <LoginFormContainer email={route?.params?.email} />
      <View style={styles.optionSignUp}>
        <Text style={styles.textAlready}>New to TimTro365?</Text>
        <TouchableOpacity onPress={onCreateAccount}>
          <Text style={styles.textLogin}>Create Account Here?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default LoginScreen;
