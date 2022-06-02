import {View, TextInput, TouchableOpacity, FlatList, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';
import ReceiveMessage from './component/ReceiveMessage/ReceiveMessage';
import SenderMessage from './component/SenderMessage/SenderMessage';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {COLOR} from '../../constants/color';
import {styles} from './messager.styles';
import {useNavigation} from '@react-navigation/native';
const Messenger = () => {
  const [messageSend, setMessageSend] = useState('');
  const [messages, setMessages] = useState([]);
  const [image, setImage] = useState(false);
  const userId = 'ACC1204BB40-4D2B-417A';
  const receiverId = 'ACC4662187E-B84C-496E';
  const navigation = useNavigation();
  let db = {};
  useEffect(() => {
    db = database()
      .ref('/messenger')
      .on('value', snapshot => {
        console.log('messager.styles.js', snapshot);
      });
    return () => database().ref('/messenger').off('value', db);
  }, [userId]);
  useEffect(() => {
    firestore()
      .collection('messenger')
      .where('users', 'in', [
        [userId, receiverId],
        [receiverId, userId],
      ])
      .orderBy('createdAt', 'desc')
      .get()
      .then(querySnapshot => {
        const arrMess = [];
        querySnapshot.forEach(documentSnapshot => {
          arrMess.push(documentSnapshot.data());
        });
        setMessages(arrMess.reverse());
      });
  }, [db]);
  const sendMessage = () => {
    firestore()
      .collection('messenger')
      .add({
        senderId: userId,
        receiverId: receiverId,
        createdAt: new Date(),
        updatedAt: new Date(),
        users: [userId, receiverId],
        message: messageSend,
        image: image,
      })
      .catch(err => {
        console.log(err);
      })
      .then(() => {
        console.log('User added!');
        setMessageSend('');
      });
  };
  const renderItem = ({item}) => {
    return item.senderId == userId ? (
      <SenderMessage item={item} />
    ) : (
      <ReceiveMessage item={item} />
    );
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <IconAntDesign
            name="left"
            style={styles.stylesIcon}
            size={styles.sizeIcon}
          />
        </TouchableOpacity>
        <Text style={styles.stylesName}>Nhi xinh xắn</Text>
      </View>
      <View style={{flex: 50}}>
        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={item =>
            item.receiverId + item.senderId + item.createdAt
          }
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
          alignItems: 'center',
        }}>
        <TextInput
          placeholder="Send message ...."
          value={messageSend}
          onChangeText={text => {
            setMessageSend(text);
          }}
          style={{width: 350}}
        />
        <TouchableOpacity
          onPress={() => {
            messageSend !== '' ? sendMessage() : null;
          }}>
          <FontAwesome name="send-o" color={COLOR.MAIN_COLOR} size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Messenger;
