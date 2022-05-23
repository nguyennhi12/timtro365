import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from './HeaderNews.styles';
import {useNavigation} from '@react-navigation/native';
const HeaderNews = props => {
  const navigation = useNavigation();
  const isSaved = props.isSaveNews();
  const startSaveOrUnSave = () => {
    props.setIsStartSave(!isSaved);
    props.setIdStartSave(props.news.id_news);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconAntDesign
            name="left"
            size={30}
            style={{marginRight: 20, color: 'black'}}
          />
        </TouchableOpacity>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={startSaveOrUnSave}>
            {isSaved ? (
              <IconAntDesign
                name="heart"
                size={30}
                style={{marginRight: 20, color: 'red'}}
              />
            ) : (
              <IconAntDesign
                name="hearto"
                size={30}
                style={{marginRight: 20, color: 'black'}}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity>
            <IconAntDesign
              name="sharealt"
              size={30}
              style={{marginRight: 20, color: 'black'}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <IconAntDesign
              name="setting"
              size={30}
              style={{marginRight: 20, color: 'black'}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HeaderNews;
