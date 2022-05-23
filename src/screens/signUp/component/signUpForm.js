import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CustomInputText from '../../../component/CustomInputText/CustomInputText';
import CustomButton from '../../../component/CustomButton/CustomButton';
import {styles} from './signUpForm.styles';
import {STATE_TEXT} from '../../../constants/stateText';
const SignUpForm = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.textCreate}>Please login to continue.</Text>
      <CustomInputText
        label="Full name"
        placeholder="Nguyễn Nhi"
        onChangeText={props.setFullName}
        setError={props.setIsFullNameError}
      />
      <CustomInputText
        label="Email"
        placeholder="nguyennhi@gmail.com"
        onChangeText={text => props.setEmail(text)}
        stateText={STATE_TEXT.EMAIL}
        setError={props.setIsEmailError}
      />
      <CustomInputText
        label="Password"
        placeholder=""
        onChangeText={props.setPassword}
        setError={props.setIsPasswordError}
      />

      <CustomButton
        label="Create Account"
        isEnableButton={props.isEnableButton}
        onClick={props.onCreateAccount}
      />
    </View>
  );
};
export default SignUpForm;
