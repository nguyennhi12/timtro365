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
import {styles} from './ListFollower.styles';
import {useIsFocused} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import ItemFollower from '../../../../component/ItemFollower/ItemFollower';
import IconAnDesign from 'react-native-vector-icons/AntDesign';
export default function ListFollower(props) {
  const navigation = useNavigation();
  const [isStartSave, setIsStartSave] = useState(false);
  const [idStartSave, setIdStartSave] = useState();
  const listFollower = props.followByIdUser;
  //   call hooks

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
  const renderEmptyData = () => {
    if (listFollower?.length == 0) {
      return (
        <View
          style={{height: 350, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 25}}>Không có danh sách hiển thị</Text>
        </View>
      );
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
    return <ItemFollower item={item} />;
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
        data={listFollower}
        renderItem={renderItem}
        ListEmptyComponent={renderEmptyData}
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
