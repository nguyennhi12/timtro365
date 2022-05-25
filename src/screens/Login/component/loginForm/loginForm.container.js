import React, {useState, useEffect, useContext} from 'react';
import LoginForm from './loginForm';
import {ASYNC_STORAGE, AuthNav} from '../../../../constants/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import ApiAccountUntil from '../../../../untils/ApiAccountUntils';
import {ToastAndroid} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loginHandle} from '../../../../redux/action/account.action';
const LoginFormContainer = props => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState('');
  const [isEmailError, setIsEmailError] = useState(true);
  const [isPassWordError, setIsPasswordError] = useState(true);
  const [isEnableButton, setIsEnableButton] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    setEmail(props?.email);
  }, [props?.email]);
  useEffect(() => {
    isEmailError || isPassWordError
      ? setIsEnableButton(false)
      : setIsEnableButton(true);
  }, [isEmailError, isPassWordError]);
  const onLogin = async () => {
    let username = email;
    var account = {username, password};
    //dispatch(loginHandle(account));
    // console.log('wwww');
    var message = '';
    var result = await ApiAccountUntil.login(account);
    console.log('result', result);
    if (result.statusCode == 200) {
      await AsyncStorage.setItem(
        ASYNC_STORAGE.ACCOUNT,
        JSON.stringify(result.data).toString(),
      );
      ToastAndroid.show('Đăng nhập thành công', ToastAndroid.SHORT);
      navigation.navigate(AuthNav.ROOT_NAV);
    } else {
      message = result.message;
      ToastAndroid.show(message, ToastAndroid.SHORT);
    }
  };
  return (
    <LoginForm
      email={email}
      setEmail={setEmail}
      setPassword={setPassword}
      errorEmail={isEmailError}
      setIsPasswordError={setIsPasswordError}
      setIsEmailError={setIsEmailError}
      isEnableButton={isEnableButton}
      onClick={onLogin}
    />
  );
};
export default LoginFormContainer;
