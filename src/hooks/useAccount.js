import {useState, useEffect, useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ApiAccountUntil from '../untils/ApiAccountUntils';
import {ASYNC_STORAGE} from '../constants';
export const useGetAccount = () => {
  const [enable, setEnable] = useState(true);
  const [account, setAccount] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const getAccount = useCallback(async () => {
    const account = JSON.parse(
      await AsyncStorage.getItem(ASYNC_STORAGE.ACCOUNT),
    );
    setAccount(account);
    setIsLoading(false);
    setEnable(false);
  }, [account]);

  useEffect(() => {
    if (isLoading == true) {
      getAccount();
    }
  }, [isLoading]);
  return {account, setIsLoading, isLoading, setAccount, enable};
};
export const ReloadPage = () => {
  const [outpage, setoutpage] = useState(false);
  const fetchRoadmap = useCallback(async () => {
    setoutpage(true);
  }, []);

  useEffect(() => {
    if (outpage == false) {
      fetchRoadmap();
    }
  }, [outpage, fetchRoadmap]);
  return {outpage, setoutpage};
};
export const useGetInfoUserByID = id_user => {
  const [info, setInfo] = useState();
  const [isLoadingSetInfo, setIsLoadingSetInfo] = useState(true);
  const [accountAPI, setAccountAPI] = useState();
  const getAccount = useCallback(async () => {
    const detail = await ApiAccountUntil.get_infor_byid(id_user);
    setInfo(detail.data);
    setIsLoadingSetInfo(false);
  }, [info]);

  useEffect(() => {
    if (isLoadingSetInfo == true) {
      getAccount();
    }
  }, [isLoadingSetInfo]);
  return {info, setIsLoadingSetInfo, isLoadingSetInfo, accountAPI};
};

export const useGetFollower = () => {
  const [follow, setFollow] = useState();
  const [isLoadingFollow, setIsLoadingFollow] = useState(true);
  const getFollow = useCallback(async () => {
    const detail = await ApiAccountUntil.getfollower();
    if (detail.statusCode == 200) {
      setFollow(detail.data);
    }
    setIsLoadingFollow(false);
  }, [follow]);

  useEffect(() => {
    if (isLoadingFollow == true) {
      getFollow();
    }
  }, [isLoadingFollow]);
  return {isLoadingFollow, setIsLoadingFollow, follow};
};

export const useGetFollowerByIdUser = id_user => {
  const [followByIdUser, setFollowByIdUser] = useState([]);
  const [isLoadingFollowByIdUser, setIsLoadingFollowByIdUser] = useState(true);
  const getFollow = useCallback(async () => {
    const detail = await ApiAccountUntil.getfollowerbyid_user(id_user);
    if (detail.statusCode == 200) {
      setFollowByIdUser(detail.data);
    }
    setIsLoadingFollowByIdUser(false);
  }, [followByIdUser]);

  useEffect(() => {
    if (isLoadingFollowByIdUser == true) {
      getFollow();
    }
  }, [isLoadingFollowByIdUser]);
  return {followByIdUser, setIsLoadingFollowByIdUser, isLoadingFollowByIdUser};
};

export const useGetFollowerOfInnKeeper = id_user => {
  const [followerOfInnKeeper, setFollowerOfInnKeeper] = useState([]);
  const [isLoadingFollowerOfInnKeeper, setIsLoadingFollowerOfInnKeeper] =
    useState(true);
  const getFollower = useCallback(async () => {
    const detail = await ApiAccountUntil.getfollowerbyid_follower(id_user);
    if (detail.statusCode == 200) {
      setFollowerOfInnKeeper(detail.data);
    }
    setIsLoadingFollowerOfInnKeeper(false);
  }, [followerOfInnKeeper]);

  useEffect(() => {
    if (isLoadingFollowerOfInnKeeper == true) {
      getFollower();
    } else {
    }
  }, [isLoadingFollowerOfInnKeeper]);
  return {
    followerOfInnKeeper,
    setIsLoadingFollowerOfInnKeeper,
    isLoadingFollowerOfInnKeeper,
  };
};

export const get_follower_id_user_id_follower = id_follower => {
  const [followid_follower, setfollow] = useState();
  const [checkfollowid_follower, setcheckfollowid_follower] = useState(false);
  const [check_follow, setcheck_follow] = useState(false);
  const fetchRoadmap = useCallback(async () => {
    const detail = await Accounts.get_follower_id_user_id_follower(id_follower);
    if (detail.statusCode == 200) {
      setcheckfollowid_follower(true);
    }
    if (detail.data.length != 0) {
      setcheck_follow(true);
    } else {
      setcheck_follow(false);
    }
    setfollow(detail.data);
  }, [followid_follower]);

  useEffect(() => {
    if (checkfollowid_follower == false) {
      //console.log("123")
      fetchRoadmap();
    }
  }, [checkfollowid_follower, fetchRoadmap]);
  return {
    followid_follower,
    setcheckfollowid_follower,
    checkfollowid_follower,
    check_follow,
  };
};
export const getfollowerofme = () => {
  const [follow, setfollow] = useState();
  const [checkfollow, setcheckfollow] = useState(false);
  const fetchRoadmap = useCallback(async () => {
    const detail = await Accounts.getfollowerofme();
    if (detail.statusCode == 200) {
      setcheckfollow(true);
    }
    setfollow(detail.data);
  }, [follow]);

  useEffect(() => {
    if (checkfollow == false) {
      fetchRoadmap();
    }
  }, [checkfollow, fetchRoadmap]);
  return {follow, setcheckfollow, checkfollow};
};
