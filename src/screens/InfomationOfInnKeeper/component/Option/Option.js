import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './Option.styles';
const Option = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.itemOption}
        onPress={() => props.setOptionIndex(0)}
        key={0}>
        <Text style={styles.styleText}>{props?.totalListNews}</Text>
        <Text style={styles.styleText}>News posted</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.itemOption}
        onPress={() => props.setOptionIndex(1)}
        key={1}>
        <Text style={styles.styleText}>{props?.totalListFollow}</Text>
        <Text style={styles.styleText}>Following</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Option;
