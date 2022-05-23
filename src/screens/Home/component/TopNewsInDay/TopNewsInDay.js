import React, {useState, useEffect} from 'react';
import {FlatList, Image, View, Text, ToastAndroid} from 'react-native';
import {styles} from './TopNewInDay.styles';
import ItemNews from '../../../../component/ItemNews/ItemNews';
import {useGetNewsByDate} from '../../../../hooks/useGetNews';
import {useGetSaveNews} from '../../../../hooks/useGetNews';
import CustomSkeletonCategories from '../SkeletonTopNews/SkeletonTopNew';
import apiSettings from '../../../../untils/ApiNewsUntils';
import {useIsFocused} from '@react-navigation/native';
const TopNewsInDay = () => {
  const [isStartSave, setIsStartSave] = useState();
  const [idStartSave, setIdStartSave] = useState();
  const {newsByDate, isLoadingOfGetNews, isEnding, setIsLoadingOfGetNews} =
    useGetNewsByDate();
  const CheckSaveNews = id_news => {
    for (let i = 0; i < isSaveNews.length; i++) {
      if (isSaveNews[i].id_news == id_news) {
        return true;
      }
    }
    return false;
  };
  const {
    isSaveNews,
    statusCodeSaveNews,
    isLoadingGetSaveNews,
    setIsLoadingGetSaveNews,
  } = useGetSaveNews();
  useEffect(() => {
    isStartSave ? onSaveNews() : onUnSaveNews();
  }, [isStartSave, idStartSave]);

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

  const renderItem = ({item}) => (
    <ItemNews
      item={item}
      isSaveNews={() => CheckSaveNews(item.id_news)}
      isStartSave={isStartSave}
      idStartSave={idStartSave}
      setIsStartSave={setIsStartSave}
      setIdStartSave={setIdStartSave}
      statusCodeSaveNews={statusCodeSaveNews}
    />
  );

  const renderEmptyData = () => {
    if (!!isLoadingOfGetNews && !isEnding) {
      console.log('skeleton', !!isLoadingOfGetNews && !isEnding);
      return <CustomSkeletonCategories />;
    }
    if (!isLoadingOfGetNews && !!newsByDate.length) {
      return <Text style={{fontSize: 25}}>Không có danh sách hiển thị</Text>;
    }
    return null;
  };
  // Focus để quay lại load lại bản tin
  const isFocused = useIsFocused();
  useEffect(() => {
    setIsLoadingOfGetNews(!isLoadingOfGetNews);
    setIsLoadingGetSaveNews(!isLoadingGetSaveNews);
  }, [isFocused]);
  return (
    <View style={styles.sectionContainer}>
      <View>
        <FlatList
          horizontal
          data={newsByDate}
          renderItem={renderItem}
          keyExtractor={item => item.id_news}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={renderEmptyData}
        />
      </View>
    </View>
  );
};

export default TopNewsInDay;
