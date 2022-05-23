import React from 'react';
import {View, TextInput} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from './HeaderHome.styles';
const HeaderHome = () => {
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
        <IconAntDesign
          name="message1"
          size={30}
          style={{marginRight: 20, color: 'black'}}
        />
      </View>
    </View>
  );
};

export default HeaderHome;
