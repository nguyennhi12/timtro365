import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from './HeaderHome.styles';
import {useNavigation} from '@react-navigation/native';
import {AuthNav} from '../../../../constants/routes';
const HeaderHome = () => {
  const navigation = useNavigation();
  const onNavigate = () => {
    navigation.navigate(AuthNav.MESSAGE);
  };
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <IconAntDesign
          name="search1"
          size={30}
          style={styles.search.iconSearch}
        />
        <TextInput placeholder="Search" style={styles.search.inputSearch} />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <IconAntDesign
          name="bells"
          size={30}
          style={{marginRight: 20, color: 'black'}}
        />
        <TouchableOpacity onPress={onNavigate}>
          <IconAntDesign
            name="message1"
            size={30}
            style={{marginRight: 20, color: 'black'}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderHome;
