import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from './HeaderCategories.styles';
import {useNavigation} from '@react-navigation/native';
const HeaderCategories = ({itemCategory}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <IconAntDesign
          name="left"
          size={30}
          style={{marginLeft: 5, color: 'black'}}
        />
      </TouchableOpacity>

      <View style={styles.search}>
        <IconAntDesign
          name="search1"
          size={30}
          style={styles.search.iconSearch}
        />
        <TextInput
          placeholder={itemCategory.title}
          style={styles.search.inputSearch}
        />
      </View>
    </View>
  );
};

export default HeaderCategories;
