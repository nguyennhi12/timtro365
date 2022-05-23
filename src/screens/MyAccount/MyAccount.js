import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useGetAccount} from '../../hooks/useAccount';
import {useNavigation} from '@react-navigation/native';
import CustomSkeleton from './component/CustomSkeleton/CustomSkeleton';
import {styles} from './MyAccount.styles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Information from './component/Information/Information';
import {useGetFollower} from '../../hooks/useAccount';
import {useGetSaveNews} from '../../hooks/useGetNews';
import CustomTabView from './component/CustomTabView/CustomTabView';
const MyAccount = () => {
  const [optionIndex, setOptionIndex] = useState(0);
  const {account, isLoading} = useGetAccount();
  const navigation = useNavigation();
  // const {
  //   listNewsByIdUser,
  //   setIsLoadingGetNewsByIdUser,
  //   isLoadingGetNewsByIdUser,
  // } = useGetNewsByIdUser(information.id_user);
  const {follow, isLoadingFollow, setIsLoadingFollow} = useGetFollower();
  const {
    isSaveNews,
    setIsLoadingGetSaveNews,
    isLoadingGetSaveNews,
    statusCodeSaveNews,
  } = useGetSaveNews();
  // const {
  //   followerOfInnKeeper,
  //   isLoadingFollowerOfInnKeeper,
  //   setIsLoadingFollowerOfInnKeeper,
  // } = useGetFollowerOfInnKeeper(information.id_user);
  return isLoading || isLoadingFollow ? (
    <CustomSkeleton />
  ) : (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.stylesName}>{account?.displayname}</Text>
      </View>
      <Information information={account} />
      <CustomTabView
        // totalListNews={listNewsByIdUser?.length}
        totalListFollow={follow?.length}
        totalListSaveNews={isSaveNews?.length}
        // listNews={listNewsByIdUser}
        isSaveNews={isSaveNews}
        setIsLoadingGetSaveNews={setIsLoadingGetSaveNews}
        statusCodeSaveNews={statusCodeSaveNews}
        followByIdUser={follow}
      />
    </View>
  );
};
export default MyAccount;
