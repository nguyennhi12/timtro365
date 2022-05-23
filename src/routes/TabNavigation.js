import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MyAccount from '../screens/MyAccount/MyAccount';
import {COLOR} from '../constants/color';
function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingLeft: 40,
        backgroundColor: 'white',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{flex: 1}}
            key={label}>
            <IconMaterialIcons
              name={label}
              size={35}
              color="black"
              style={{color: isFocused ? COLOR.MAIN_COLOR : 'black'}}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{headerShown: false}}
        nameTab="Home"
      />
      <Tab.Screen
        name="create"
        component={SettingsScreen}
        options={{headerShown: false}}
        nameTab="Post News"
      />
      <Tab.Screen
        name="groups"
        component={SettingsScreen}
        nameTab="Communication"
      />
      <Tab.Screen
        name="settings"
        component={MyAccount}
        options={{headerShown: false}}
        nameTab="Setting"
      />
    </Tab.Navigator>
  );
}
