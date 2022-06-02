import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './ChoosePositionComponent.styles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {AuthNav} from '../../../../constants/routes';
import {useSelector} from 'react-redux';
import {
  getAddress,
  getLatitudeLongitude,
} from '../../../../redux/selector/news.selector';
const ChoosePositionComponent = () => {
  const address = useSelector(getAddress);
  const latitudeLongitude = useSelector(getLatitudeLongitude);
  console.log(address, latitudeLongitude);
  const navigation = useNavigation();
  const onViewMap = () => {
    navigation.navigate(AuthNav.SELECT_POSITION_SCREEN);
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 3}}>
        <View style={styles.styleTextChoos}>
          <Text style={styles.styleTextHeader}>Choose position</Text>
          <TouchableOpacity onPress={onViewMap}>
            <IconAntDesign
              name="enviroment"
              size={styles.sizeIconEnv}
              color={styles.colorIconEnv}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.styleGroupTextInput}>
          <Text style={styles.styleTextHeaderGroup}>Address:</Text>
          <Text style={styles.styleTextInputGroup}>
            {address || 'Your address ....'}{' '}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ChoosePositionComponent;
