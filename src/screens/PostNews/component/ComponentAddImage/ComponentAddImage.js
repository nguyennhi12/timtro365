import {
  View,
  FlatList,
  TouchableOpacity,
  PermissionsAndroid,
  Image,
  Text,
} from 'react-native';
import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from './ComponentAddImage.styles';
const ComponentAddImage = props => {
  const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      //console.log('You can use the camera');
      ImagePicker.openPicker({
        multiple: true,
        maxFiles: 2,
      }).then(images => {
        if (props.uriImages.length + images.length < 7) {
          let arrUriImages = [];
          images.map(image => {
            arrUriImages.push({
              id: !!arrUriImages.length
                ? arrUriImages[arrUriImages.length - 1].id + 1
                : !!props.uriImages.length
                ? props.uriImages[props.uriImages.length - 1].id + 1
                : 1,
              pathImage: image.path,
            });
          });
          props.setUriImage([...props.uriImages, ...arrUriImages]);
          arrUriImages = [];
        } else {
          ToastAndroid.show('Số tệp quá mức quy định', ToastAndroid.SHORT);
        }
      });
    } else {
      console.log('Camera permission denied');
    }
  };
  const onRemoveImage = item => {
    props.setUriImage(
      props.uriImages.filter(itemImage => itemImage.id != item.id),
    );
  };
  const renderItem = ({item, index}) => {
    return (
      <View style={{flexDirection: 'row'}}>
        <View>
          <TouchableOpacity
            onPress={() => onRemoveImage(item)}
            style={styles.styleCloseButton}>
            <IconAntDesign name="close" size={13} />
          </TouchableOpacity>

          <Image source={{uri: item.pathImage}} style={styles.styleImage} />
        </View>

        {index == props.uriImages.length - 1 && props.uriImages.length < 6 ? (
          <TouchableOpacity onPress={openCamera} style={styles.styleIconAdd}>
            <IconAntDesign name="plus" size={styles.sizeIcon} />
          </TouchableOpacity>
        ) : null}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.styleTextHeader}>Set Information of News </Text>
      {!!props.uriImages.length ? (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <FlatList
            data={props.uriImages}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal
            //numColumns={3}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            //nestedScrollEnabled
          />
        </View>
      ) : (
        <View
          style={{justifyContent: 'center', alignItems: 'center', margin: 20}}>
          <TouchableOpacity onPress={openCamera} style={styles.styleIconAdd}>
            <IconAntDesign name="plus" size={styles.sizeIcon} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ComponentAddImage;
