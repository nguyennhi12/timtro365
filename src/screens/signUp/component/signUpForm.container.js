import React, {useState, useEffect} from 'react';
import SignUpForm from './signUpForm';
import {useNavigation} from '@react-navigation/native';
import {AuthNav} from '../../../constants/routes';
const SignUpFormContainer = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('nhicute');
  const [password, setPassword] = useState('');
  const [isFullNameError, setIsFullNameError] = useState(true);
  const [isEmailError, setIsEmailError] = useState(true);
  const [isPassWordError, setIsPasswordError] = useState(true);
  const [isEnableButton, setIsEnableButton] = useState(false);
  const onCreateAccount = () => {
    navigation.navigate(AuthNav.LOGIN, {email: email});
  };
  useEffect(() => {
    isEmailError || isPassWordError || isFullNameError
      ? setIsEnableButton(false)
      : setIsEnableButton(true);
  }, [isEmailError, isPassWordError, isFullNameError]);
  return (
    <SignUpForm
      setEmail={setEmail}
      setPassword={setPassword}
      setFullName={setFullName}
      setIsFullNameError={setIsFullNameError}
      setIsPasswordError={setIsPasswordError}
      setIsEmailError={setIsEmailError}
      isEnableButton={isEnableButton}
      onCreateAccount={onCreateAccount}
    />
  );
};
export default SignUpFormContainer;
