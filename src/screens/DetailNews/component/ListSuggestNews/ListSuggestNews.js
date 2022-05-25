import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Image,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import {styles} from './ListSuggestNews.styles';
import ItemNews from '../../../../component/ItemNews/ItemNews';
import {useSuggestNews} from '../../../../hooks/useGetNews';
import {useGetSaveNews} from '../../../../hooks/useGetNews';
import CustomSkeletonTopNews from '../../../Home/component/SkeletonTopNews/SkeletonTopNew';
import apiSettings from '../../../../untils/ApiNewsUntils';
const ListSuggestNews = props => {
  const [isStartSave, setIsStartSave] = useState(false);
  const [idStartSave, setIdStartSave] = useState();
  const {
    listSuggestNews,
    isLoadingListSuggestNews,
    setIsLoadingListSuggestNews,
  } = useSuggestNews({
    id_news: props.news.id_news,
    id_user: props.news.id_user,
  });
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
    if (!!isLoadingListSuggestNews) {
      return <CustomSkeletonTopNews />;
    }
    if (listSuggestNews.length == 0) {
      return (
        <View style={styles.stylesTextEmpty}>
          <Text style={styles.stylesTextEmpty.stylesText}>
            Không có danh sách hiển thị
          </Text>
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.stylesTextHeader.stylesText}>Tin đăng tương tự</Text>
      <View>
        <FlatList
          horizontal
          contentContainerStyle={{paddingBottom: 40}}
          data={listSuggestNews}
          renderItem={renderItem}
          keyExtractor={item => item.id_news}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={renderEmptyData}
        />
      </View>
    </View>
  );
};

export default ListSuggestNews;
