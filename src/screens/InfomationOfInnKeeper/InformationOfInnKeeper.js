import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {styles} from './InformationOfInnKeeper.styles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Information from './component/Information/Information';
import {useGetNewsByIdUser, useGetSaveNews} from '../../hooks/useGetNews';
import {
  useGetFollowerByIdUser,
  useGetFollowerOfInnKeeper,
} from '../../hooks/useAccount';
import CustomSkeleton from './component/CustomSkeleton/CustomSkeleton';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import CustomTabView from './component/CustomTabView/CustomTabView';
const InformationOfInnKeeper = props => {
  const [optionIndex, setOptionIndex] = useState(0);
  const information = props?.route?.params;
  const navigation = useNavigation();
  const {
    listNewsByIdUser,
    setIsLoadingGetNewsByIdUser,
    isLoadingGetNewsByIdUser,
  } = useGetNewsByIdUser(information.id_user);
  const {followByIdUser, isLoadingFollowByIdUser, setIsLoadingFollowByIdUser} =
    useGetFollowerByIdUser(information.id_user);
  const {
    isSaveNews,
    setIsLoadingGetSaveNews,
    isLoadingGetSaveNews,
    statusCodeSaveNews,
  } = useGetSaveNews();
  const {
    followerOfInnKeeper,
    isLoadingFollowerOfInnKeeper,
    setIsLoadingFollowerOfInnKeeper,
  } = useGetFollowerOfInnKeeper(information.id_user);
  return isLoadingFollowByIdUser &&
    isLoadingGetNewsByIdUser &&
    isLoadingGetSaveNews &&
    isLoadingFollowerOfInnKeeper ? (
    <CustomSkeleton />
  ) : (
    <View style={styles.container}>
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
        <Text style={styles.stylesName}>{information?.displayname}</Text>
      </View>
      <Information information={information} />
      <View style={styles.stylesLine} />
      <CustomTabView
        totalListNews={listNewsByIdUser?.length}
        totalListFollow={followByIdUser?.length}
        setOptionIndex={setOptionIndex}
        listNews={listNewsByIdUser}
        isSaveNews={isSaveNews}
        setIsLoadingGetSaveNews={setIsLoadingGetSaveNews}
        statusCodeSaveNews={statusCodeSaveNews}
        followByIdUser={followByIdUser}
      />
    </View>
  );
};
export default InformationOfInnKeeper;
