import React, {useState} from 'react';
import {Tab, TabView} from '@rneui/themed';
import {View, Text} from 'react-native';
import {styles} from './CustomTabView.styles';
import ListNews from '../ListNews/ListNews';
import ListFollower from '../ListFollower/ListFollower';
import {COLOR} from '../../../../constants/color';
const CustomTabView = props => {
  console.log(props);
  const [index, setIndex] = useState(0);
  return (
    <View style={{flex: 10}}>
      <Tab
        value={index}
        onChange={e => setIndex(e)}
        indicatorStyle={{
          backgroundColor: COLOR.BUTTON,
          height: 3,
        }}>
        <Tab.Item
          title={`${props.totalListNews} \nNews posted`}
          titleStyle={active =>
            active ? styles.styleText : styles.styleTextInactive
          }
          containerStyle={styles.styleContainerTab}
          key={1}
        />
        <Tab.Item
          title={`${props.totalListFollow} \nFollowing`}
          titleStyle={active =>
            active ? styles.styleText : styles.styleTextInactive
          }
          containerStyle={styles.styleContainerTab}
          key={2}
        />
      </Tab>
      <TabView value={index} onChange={setIndex} animationType="spring">
        <View style={{flex: 1}} key={1}>
          <ListNews
            listNews={props.listNews}
            isSaveNews={props.isSaveNews}
            setIsLoadingGetSaveNews={props.setIsLoadingGetSaveNews}
            statusCodeSaveNews={props.statusCodeSaveNews}
          />
        </View>
        <View style={{flex: 1}} key={2}>
          <ListFollower followByIdUser={props.followByIdUser} />
        </View>
      </TabView>
    </View>
  );
};
export default CustomTabView;
