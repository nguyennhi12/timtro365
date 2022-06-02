import {View, Text} from 'react-native';
import React from 'react';
import {COLOR} from '../../../../constants/color';

const SenderMessage = props => {
  const message = props.item;
  //console.log(props);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLOR.MAIN_COLOR,
        margin: 10,
        alignSelf: 'flex-end',
        borderBottomStartRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}>
      <Text style={{margin: 10}}>{message.message}</Text>
    </View>
  );
};

export default React.memo(SenderMessage);
