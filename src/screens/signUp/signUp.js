import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import HeaderImage from '../../component/headerImage/headerImage';
import SignUpFormContainer from './component/signUpForm.container';
import {styles} from './signUp.styles';
import {useNavigation} from '@react-navigation/native';
const SignUpScreen = () => {
  const navigation = useNavigation();
  const onLoginAccount = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <HeaderImage textWelCome={'Start \nfrom Scratch'} />
      <SignUpFormContainer />
      <View style={styles.optionSignUp}>
        <Text style={styles.textAlready}>Already have an account?</Text>
        <TouchableOpacity onPress={onLoginAccount}>
          <Text style={styles.textLogin}>Login Here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SignUpScreen;
