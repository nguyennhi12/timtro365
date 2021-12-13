import * as React from 'react';
import { Avatar} from 'react-native-paper';
import { ScrollView, View, FlatList, StyleSheet, Text, StatusBar, TouchableWithoutFeedback, TouchableHighlightBase } from 'react-native';
import StackDanhMuc from '../../DanhMuc';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DATA = [
   {
    id: "1",
    srce:require( '../../../images/phongtro.jpg'),
    title: "Nhà trọ",
  },
  {
    id: "2",
    srce:require('../../../images/ktx.jpg'),
    title: "Kí túc xá",
  },
  {
    id: "3",
    srce:require('../../../images/chungcu.jpg'),
    title: "Chung cư",
  },
  {
    id: "4",
    srce:require('../../../images/oghep.png'),
    title: "Ở ghép",
  },
  {
    id: "5",

    srce:require('../../../images/canho.jpg'),
    title: "Căn hộ",
  },
  ];

  const Item = ({ item }) => (
    <View style={{padding:'3%', marginLeft:'6%'}}>
        <Avatar.Image source={item.srce}size={70}></Avatar.Image>
        <Text style={styles.title}>{item.title}</Text>
    </View>
  ); 

const DanhMuc = ({navigation}) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={onPress.bind(this,item)} style={{marginTop:'7%'}}>                    
                    <Item item={item} />  
        </TouchableOpacity>
      );
    function onPress(data){
        
        navigation.navigate('danhmuc',data)
        
    }
    return (
    <View style={styles.container}>
        <Text style={styles.danhmuc}>Khám phá danh mục: </Text>
        <FlatList
            contentContainerStyle={{alignSelf: 'flex-start'}}
            numColumns='3'
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={DATA}
            renderItem={renderItem} 
            style={{marginLeft:'7%'}}
        />
    </View>

)};

function actionOnRow(item) {
    console.log('Selected Item :',item)};

const styles = StyleSheet.create({
    container: {
        flex: 1,        
        backgroundColor:'white',
        marginLeft:'2%',
        marginRight:'2%',
        marginTop:'2%',
        marginBottom: '2%'
    },
    item: {
      
      padding: '5%',
      width: '10%',
     
      
    },
    title: {
      fontSize: 15,
      marginLeft: '4%'
    },
    danhmuc:{
        fontSize: 18, 
        fontWeight: "bold",

        marginLeft:'3%',
    }
  });
  

export default DanhMuc;