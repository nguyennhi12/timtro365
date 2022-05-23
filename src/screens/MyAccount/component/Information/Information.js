import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './Information.styles';
const Information = props => {
  const information = props.information;
  return (
    <View style={styles.container}>
      <Image
        source={{uri: information.image}}
        style={styles.stylesImageAvatar}
      />
      <View style={styles.stylesViewTextInfo}>
        <Text style={styles.stylesTextName}>{information.displayname}</Text>
        <Text style={styles.stylesTextInfo}>{information.address}</Text>
        <View style={styles.viewFollowSDT}>
          <Text style={styles.stylesTextInfo}>
            SĐT: {information.phonenumber}{' '}
          </Text>
        </View>
      </View>
    </View>
  );
};
export default Information;
