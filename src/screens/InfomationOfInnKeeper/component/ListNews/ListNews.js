import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  ToastAndroid,
  ActivityIndicator,
  Animated,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from 'react-native';
import {styles} from './ListNews.styles';
import {useIsFocused} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import ItemNews from '../../../../component/ItemNews/ItemNews';
import IconAnDesign from 'react-native-vector-icons/AntDesign';
import apiSettings from '../../../../untils/ApiNewsUntils';
export default function ListNews(props) {
  const navigation = useNavigation();
  const [isStartSave, setIsStartSave] = useState(false);
  const [idStartSave, setIdStartSave] = useState();
  const listNewsByIdUser = props.listNews;
  //   call hooks

  //   Kiểm tra bản tin đã lưu chưa
  const checkIsSaveNews = id_news => {
    for (let i = 0; i < props.isSaveNews?.length; i++) {
      if (props.isSaveNews[i]?.id_news == id_news) {
        return true;
      }
    }
    return false;
  };
  useEffect(() => {
    isStartSave ? onSaveNews() : onUnSaveNews();
  }, [isStartSave, idStartSave]);

  // Thực hiện chức năng lưu bản tin
  const onSaveNews = async () => {
    const isSave = await apiSettings.save_news(idStartSave);
    if (isSave.statusCode == 200) {
      props.setIsLoadingGetSaveNews(!props.isLoadingGetSaveNews);
    } else {
      if (isSave.statusCode == 401) {
        ToastAndroid.show('Bạn chưa đăng nhập!!', ToastAndroid.SHORT);
        setIsStartSave(false);
      }
    }
  };
  // thực hiện chức năng bỏ lưu
  const onUnSaveNews = async () => {
    const isUnSave = await apiSettings.un_save_news(idStartSave);
    if (isUnSave.statusCode == 200) {
      props.setIsLoadingGetSaveNews(!props.isLoadingGetSaveNews);
    } else {
      if (isUnSave.statusCode == 401) {
        ToastAndroid.show('Bạn chưa đăng nhập!!', ToastAndroid.SHORT);
        setIsStartSave(false);
      }
    }
  };
  // Focus để quay lại load lại bản tin
  // const isFocused = useIsFocused();
  // useEffect(() => {
  //   setIsLoadingGetNews(!isLoadingGetNews);
  //   setIsLoadingGetSaveNews(!isLoadingGetSaveNews);
  // }, [isFocused]);

  // ReFresh Data
  //   const renderRefreshControl = async () => {
  //     setIsEnding(false);
  //     if (!isLoadingGetNews && !isLoadingGetSaveNews) {
  //       setIsLoadingGetNews(!isLoadingGetNews);
  //       setIsLoadingGetSaveNews(!isLoadingGetSaveNews);
  //       if (listNewsByIdUser?.data?.length == 0) {
  //         setIsEnding(true);
  //       } else {
  //         setLoadMore({
  //           page: loadMore.page + 1,
  //           value: loadMore.value,
  //         });
  //       }
  //     }
  //   };

  //Show in footer
  //   const renderListFooterComponent = () => {
  //     if (!!props.isLoadingGetSaveNews && !!listNewsByIdUser?.length) {
  //       return <ActivityIndicator size="large" color="#FA4A0C" />;
  //     }
  //     // if (!!isLoadingGetNews && !!isLoadingGetNews) {
  //     //   return <Text style={{fontSize: 25}}>End</Text>;
  //     // }
  //     return null;
  //   };

  const animatedFlatlistY = useRef(new Animated.Value(0)).current;
  const opacityAnimation = animatedFlatlistY.interpolate({
    inputRange: [0, 500],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  const zIndexAnimation = animatedFlatlistY.interpolate({
    inputRange: [0, 500],
    outputRange: [0, 100],
    extrapolate: 'clamp',
  });
  const TouchableOpacityAnimation =
    Animated.createAnimatedComponent(TouchableOpacity);
  const flatlistRef = useRef();
  const toTop = () => {
    flatlistRef.current.scrollToOffset({animated: true, offset: 0});
  };
  const renderItem = ({item}) => {
    return (
      <ItemNews
        item={item}
        isSaveNews={() => checkIsSaveNews(item.id_news)}
        isStartSave={isStartSave}
        idStartSave={idStartSave}
        setIsStartSave={setIsStartSave}
        setIdStartSave={setIdStartSave}
        statusCodeSaveNews={props.statusCodeSaveNews}
      />
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacityAnimation
        onPress={toTop}
        style={{
          position: 'absolute',
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: '#FA4A0C',
          bottom: 40,
          right: 40,
          zIndex: zIndexAnimation,
          opacity: opacityAnimation,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <IconAnDesign name="arrowup" color="white" size={25} />
      </TouchableOpacityAnimation>
      <FlatList
        ref={flatlistRef}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {contentOffset: {y: animatedFlatlistY}},
            },
          ],
          {
            useNativeDriver: false,
          },
        )}
        data={listNewsByIdUser}
        renderItem={renderItem}
        //ListEmptyComponent={renderEmptyData}
        // ListFooterComponent={renderListFooterComponent}
        keyExtractor={item => item.id_news}
        numColumns={2}
        // refreshControl={
        //   <RefreshControl
        //     removeClippedSubviews={true}
        //     refreshing={false}
        //     onRefresh={renderRefreshControl}
        //   />
        // }
        ListFooterComponentStyle={{
          alignItems: 'center',
          marginVertical: 50,
        }}
        // onEndReached={onLoadMore}
        // onEndReachedThreshold={0.5}
      />
    </View>
  );
}
