import React from 'react';
import {View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {styles} from './ViewInfoInnkeeper.styles';
import {AuthNav} from '../../../../constants/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ASYNC_STORAGE} from '../../../../constants';
const ViewInfoInnkeeper = props => {
  const navigation = useNavigation();
  const onPressViewPage = async () => {
    console.log(props.info[0]);
    const account = JSON.parse(
      await AsyncStorage.getItem(ASYNC_STORAGE.ACCOUNT),
    );
    console.log(account);
    if (props.info[0].email == account.email) {
      navigation.reset({
        index: 0,
        routes: [{name: AuthNav.TAB_NAV, params: {name: 'settings'}}],
      });
    } else {
      navigation.navigate(AuthNav.INFORMATION_INNKEEPER, props.info[0]);
    }
  };
  return (
    <View style={styles.container}>
      <Avatar.Image
        source={{uri: props.info[0].image}}
        size={80}></Avatar.Image>
      <View style={{marginLeft: 6}}>
        <Text style={styles.textName}>{props.info[0].displayname}</Text>
        <Text style={styles.textAddress}>{props.info[0].address}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textPhoneNumber}>
            {props.info[0].phonenumber}
          </Text>
          <View style={{marginLeft: '28%'}}>
            <TouchableOpacity
              style={styles.buttonViewInfo}
              onPress={onPressViewPage}>
              <Text style={styles.buttonViewInfo.textButton}>Xem trang</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ViewInfoInnkeeper;
