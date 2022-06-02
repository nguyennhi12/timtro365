import React, {useEffect, useState} from 'react';
import AuthNavigation from './src/routes/AuthNavigation';
import RootNavigation from './src/routes/RootNavigation';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {LogBox, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ASYNC_STORAGE} from './src/constants';
import {Provider} from 'react-redux';
import {store} from './src/redux/configStore';
import {enableLatestRenderer} from 'react-native-maps';
import messaging from '@react-native-firebase/messaging';
async function saveTokenToDatabase(token) {
  // Assume user is already signed in
  const userId = auth().currentUser.uid;
  // Add the token to the users datastore
  await firestore()
    .collection('users')
    .doc(userId)
    .update({
      tokens: firestore.FieldValue.arrayUnion(token),
    });
}
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
    // Get the device token
    messaging()
      .getToken()
      .then(token => {
        console.log(token);
        return saveTokenToDatabase(token);
      });

    // If using other push notification providers (ie Amazon SNS, etc)
    // you may need to get the APNs token instead for iOS:
    // if(Platform.OS == 'ios') { messaging().getAPNSToken().then(token => { return saveTokenToDatabase(token); }); }

    // Listen to whether the token changes
    return messaging().onTokenRefresh(token => {
      saveTokenToDatabase(token);
    });
  }, []);
  useEffect(() => {
    onLogin();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  }, []);
  enableLatestRenderer();
  return (
    <Provider store={store}>
      <NavigationContainer>
        {!!account ? <RootNavigation /> : <AuthNavigation />}
      </NavigationContainer>
    </Provider>
  );
};
export default App;
