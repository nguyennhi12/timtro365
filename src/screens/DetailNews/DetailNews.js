import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ToastAndroid,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {styles} from './DetailNews.styles';
import HeaderNews from './component/HeaderNews/HeaderNews';
import SwiperNews from './component/SwiperNews/SwiperNews';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {useGetAccount, useGetInfoUserByID} from '../../hooks/useAccount';
import {
  useGetNewsByIDNews,
  useGetSaveNews,
  useSuggestNews,
} from '../../hooks/useGetNews';
import apiSettings from '../../untils/ApiNewsUntils';
import SkeletonSwiper from './component/SkeletonSwiper/SkeletonSwiper';
import ViewInfoInnkeeper from './component/ViewInfoInnkeeper/ViewInfoInnkeeper';
import ListSuggestNews from './component/ListSuggestNews/ListSuggestNews';
import {COLOR} from '../../constants/color';
import {useNavigation} from '@react-navigation/native';
const DetailNews = ({route}) => {
  const news = route.params;
  const navigation = useNavigation();
  const [isStartSave, setIsStartSave] = useState();
  const [idStartSave, setIdStartSave] = useState();
  const {account} = useGetAccount();
  const {detailNews, setIsLoadingDetailNews, isLoadingDetailNews} =
    useGetNewsByIDNews(news.id_news);
  const {info, isLoadingSetInfo} = useGetInfoUserByID(news.id_user);
  const {
    isSaveNews,
    setIsLoadingGetSaveNews,
    isLoadingGetSaveNews,
    statusCodeSaveNews,
  } = useGetSaveNews();
  const CheckSaveNews = id_news => {
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

  return isLoadingDetailNews || isLoadingSetInfo || isLoadingGetSaveNews ? (
    <SkeletonSwiper />
  ) : (
    <View style={styles.container}>
      <ScrollView>
        {/* header */}
        <HeaderNews
          news={news}
          isSaveNews={() => CheckSaveNews(news.id_news)}
          isStartSave={isStartSave}
          idStartSave={idStartSave}
          setIsStartSave={setIsStartSave}
          setIdStartSave={setIdStartSave}
          statusCodeSaveNews={statusCodeSaveNews}
        />
        {/* swiper */}
        <View style={styles.swiperNews}>
          <SwiperNews news={news} />
        </View>

        {/* name - cost - address - ratting */}
        <View style={styles.nameCost}>
          <Text style={styles.nameCost.textHeader}>
            {detailNews.data[0].header}
          </Text>
          <Text style={styles.nameCost.textCost}>
            {detailNews.data[0].cost} triệu
          </Text>
        </View>
        <View style={styles.stylesLine} />
        {/* info innkeeper */}
        <View style={styles.infoInnkeeper}>
          <ViewInfoInnkeeper info={info} navigation={navigation} />
        </View>
        <View style={styles.stylesLine} />
        {/* info News */}
        <View style={styles.infoNews}>
          <Text style={styles.infoNews.styleText}>
            {detailNews.data[0].description}
          </Text>
        </View>
        <View style={styles.stylesLine} />
        {/* Tin đăng tương tự */}
        <View style={styles.suggestNews}>
          <ListSuggestNews news={detailNews.data[0]} />
        </View>
      </ScrollView>

      {/* Gọi điện - SMS - Chat */}
      <View style={styles.callSMSChat}>
        <TouchableOpacity style={styles.callSMSChat.styleCall}>
          <IconAntDesign name="mobile1" size={25} color={COLOR.MAIN_COLOR} />
          <Text style={styles.callSMSChat.styleCall.textCall}>Gọi điện</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.callSMSChat.stylesSMS}>
          <IconAntDesign name="message1" size={25} color="white" />
          <Text style={styles.callSMSChat.stylesSMS.textSMS}>Gửi SMS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.callSMSChat.stylesChat}>
          <IconAntDesign name="team" size={25} color={COLOR.MAIN_COLOR} />
          <Text style={styles.callSMSChat.stylesChat.textChat}>Chat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default DetailNews;
