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
import {useGetNews, useGetSaveNews} from '../../../../hooks/useGetNews';
import {useIsFocused} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import CustomSkeletonCategories from '../CustomSkeleton/CustomSkeleton';
import ItemNews from '../../../../component/ItemNews/ItemNews';
import IconAnDesign from 'react-native-vector-icons/AntDesign';
import apiSettings from '../../../../untils/ApiNewsUntils';
export default function ListNews({itemCategory}) {
  const navigation = useNavigation();
  const [isStartSave, setIsStartSave] = useState(false);
  const [idStartSave, setIdStartSave] = useState();
  //   call hooks
  const {
    listNews,
    setIsLoadingGetNews,
    isLoadingGetNews,
    setLoadMore,
    setIsEnding,
    isEnding,
    loadMore,
  } = useGetNews(itemCategory.id);
  const {
    isSaveNews,
    setIsLoadingGetSaveNews,
    isLoadingGetSaveNews,
    statusCodeSaveNews,
  } = useGetSaveNews();
  //   Kiểm tra bản tin đã lưu chưa
  const checkIsSaveNews = id_news => {
    for (let i = 0; i < isSaveNews?.length; i++) {
      if (isSaveNews[i]?.id_news == id_news) {
        return true;
      }
    }
    return false;
  };
  useEffect(() => {
    isStartSave ? onSaveNews() : onUnSaveNews();
  }, [isStartSave]);

  // Thực hiện chức năng lưu bản tin
  const onSaveNews = async () => {
    const isSave = await apiSettings.save_news(idStartSave);
    if (isSave.statusCode == 200) {
      setIsLoadingGetSaveNews(!isLoadingGetSaveNews);
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
      setIsLoadingGetSaveNews(!isLoadingGetSaveNews);
    } else {
      if (isUnSave.statusCode == 401) {
        ToastAndroid.show('Bạn chưa đăng nhập!!', ToastAndroid.SHORT);
        setIsStartSave(false);
      }
    }
  };
  // Focus để quay lại load lại bản tin
  const isFocused = useIsFocused();
  useEffect(() => {
    setIsLoadingGetNews(!isLoadingGetNews);
    setIsLoadingGetSaveNews(!isLoadingGetSaveNews);
  }, [isFocused]);
  // Skeleton
  const renderEmptyData = () => {
    if (!!isLoadingGetNews && !!isLoadingGetSaveNews && !isEnding) {
      return <CustomSkeletonCategories />;
    }
    if (!isLoadingGetNews && !isLoadingGetSaveNews && listNews.length == 0) {
      return <Text style={{fontSize: 25}}>Không có danh sách hiển thị</Text>;
    }
    return null;
  };
  // ReFresh Data
  const renderRefreshControl = async () => {
    setIsEnding(false);
    if (!isLoadingGetNews && !isLoadingGetSaveNews) {
      setIsLoadingGetNews(!isLoadingGetNews);
      setIsLoadingGetSaveNews(!isLoadingGetSaveNews);
      if (listNews?.data?.length == 0) {
        setIsEnding(true);
      } else {
        setLoadMore({
          page: loadMore.page + 1,
          value: loadMore.value,
        });
      }
    }
  };
  //Show in footer
  const renderListFooterComponent = () => {
    if (
      !!isLoadingGetNews &&
      !!isLoadingGetSaveNews &&
      !isEnding &&
      !!listNews?.data.length
    ) {
      return <ActivityIndicator size="large" color="#FA4A0C" />;
    }
    if (!!isLoadingGetNews && !!isLoadingGetNews && isEnding) {
      return <Text style={{fontSize: 25}}>End</Text>;
    }
    return null;
  };
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
        statusCodeSaveNews={statusCodeSaveNews}
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
        data={listNews.data}
        renderItem={renderItem}
        ListEmptyComponent={renderEmptyData}
        ListFooterComponent={renderListFooterComponent}
        keyExtractor={item => item.id}
        numColumns={2}
        refreshControl={
          <RefreshControl
            removeClippedSubviews={true}
            refreshing={false}
            onRefresh={renderRefreshControl}
          />
        }
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
