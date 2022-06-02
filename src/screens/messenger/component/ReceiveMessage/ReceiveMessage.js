import {View, Text} from 'react-native';
import React from 'react';

const ReceiveMessage = props => {
  const message = props.item;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        margin: 10,
        alignSelf: 'flex-start',
        borderBottomStartRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
      }}>
      <Text style={{margin: 10}}>{message.message}</Text>
    </View>
  );
};

export default React.memo(ReceiveMessage);
