import React, {useEffect, useState} from 'react';
import AuthNavigation from './src/routes/AuthNavigation';
import RootNavigation from './src/routes/RootNavigation';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {LogBox} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ASYNC_STORAGE} from './src/constants';
const App = () => {
  LogBox.ignoreLogs(
    ["exported from 'deprecated-react-native-prop-types'."],
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  );
  const [account, setAccount] = useState(null);
  const onLogin = async () => {
    await AsyncStorage.getItem(ASYNC_STORAGE.ACCOUNT, (err, result) => {
      setAccount(JSON.parse(result));
    });
    SplashScreen.hide();
  };
  useEffect(() => {
    onLogin();
  }, []);
  return (
    <NavigationContainer>
      {!!account ? <RootNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};
export default App;
