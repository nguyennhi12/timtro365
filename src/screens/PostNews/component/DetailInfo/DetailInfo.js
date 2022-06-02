import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {styles} from './DetailInfo.styles';

const DetailInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.styleTextHeader}>Set Information of News </Text>
      <View style={styles.styleGroupTextInput}>
        <Text style={styles.styleTextHeaderGroup}>Diện tích:</Text>
        <TextInput
          placeholder="Hồ Chí Minh"
          style={styles.styleTextInputGroup}
        />
      </View>
      <View style={styles.styleGroupTextInput}>
        <Text style={styles.styleTextHeaderGroup}>Giá:</Text>
        <TextInput
          placeholder="Hồ Chí Minh"
          style={styles.styleTextInputGroup}
        />
      </View>
      <View style={styles.styleGroupTextInput}>
        <Text style={styles.styleTextHeaderGroup}>Cọc:</Text>
        <TextInput
          placeholder="Hồ Chí Minh"
          style={styles.styleTextInputGroup}
        />
      </View>
      <View style={styles.styleGroupTextInput}>
        <Text style={styles.styleTextHeaderGroup}>Chủ đề:</Text>
        <TextInput
          placeholder="Hồ Chí Minh"
          style={styles.styleTextInputGroup}
        />
      </View>
      <View style={styles.styleGroupTextInput}>
        <Text style={styles.styleTextHeaderGroup}>Đặc điểm nổi bật:</Text>
        <TextInput
          placeholder="Hồ Chí Minh"
          style={styles.styleTextInputDetail}
          multiline
        />
      </View>
    </View>
  );
};

export default DetailInfo;
