import {useState, useEffect, useCallback} from 'react';
import News from '../untils/ApiNewsUntils';
import Innkeeper from '../untils/ApiInnkeeperUntils';
import apiSettings from '../untils/ApiNewsUntils';
export const useGetNewsByDate = () => {
  const [statusCodeGetNewsByDate, setStatusCodeGetNewsByDate] = useState();
  const [newsByDate, setNewsByDate] = useState([]);
  const [isLoadingOfGetNews, setIsLoadingOfGetNews] = useState(true);
  const [isEnding, setIsEnding] = useState(false);
  const getNewsByDate = useCallback(async () => {
    var date = '24/12/2021';
    // var date =
    //   new Date().getDate() +
    //   '/' +
    //   (new Date().getMonth() + 1) +
    //   '/' +
    //   new Date().getFullYear();
    const detail = await News.getNewsbydate(date);

    setStatusCodeGetNewsByDate(detail.statusCode);
    if (detail.statusCode == 200) {
      setNewsByDate(detail.data);
    }
    setIsLoadingOfGetNews(false);
  }, [newsByDate]);

  useEffect(() => {
    if (isLoadingOfGetNews == true) {
      getNewsByDate();
    } else {
    }
  }, [isLoadingOfGetNews]);
  return {
    newsByDate,
    setIsLoadingOfGetNews,
    isLoadingOfGetNews,
    setNewsByDate,
    statusCodeGetNewsByDate,
    isEnding,
  };
};

export const useGetNews = type => {
  const [loadMore, setLoadMore] = useState({
    page: 1,
    value: 8,
  });
  const [isEnding, setIsEnding] = useState(false);
  const [listNews, setListNews] = useState({
    data: [],
    statusCode: 400,
  });
  const [isLoadingGetNews, setIsLoadingGetNews] = useState(true);
  const getListNews = async () => {
    const detail = await News.getNewsbytype(type);
    setListNews(detail);
    setIsLoadingGetNews(false);
  };

  useEffect(() => {
    getListNews();
  }, [isLoadingGetNews]);
  return {
    listNews,
    setIsLoadingGetNews,
    isLoadingGetNews,
    isEnding,
    setIsEnding,
    setLoadMore,
    loadMore,
  };
};

export const useGetImageNewsByIdNews = id_news => {
  const [listImageNews, setListImageNews] = useState([]);
  const [isLoadingGetImage, setIsLoadingGetImage] = useState(true);
  const getImage = useCallback(async () => {
    const detail = await News.getimage_news_byid_news(id_news);
    if (detail != null) {
      setIsLoadingGetImage(false);
      setListImageNews(detail.data);
    }
  }, [listImageNews]);

  useEffect(() => {
    if (isLoadingGetImage == true) {
      getImage();
    } else {
    }
  }, [isLoadingGetImage]);
  return {listImageNews, setIsLoadingGetImage, isLoadingGetImage};
};
export const useGetSaveNews = () => {
  const [isSaveNews, setIsSaveNews] = useState([]);
  const [isLoadingGetSaveNews, setIsLoadingGetSaveNews] = useState(true);
  const [statusCodeSaveNews, setStatusCodeSaveNews] = useState();
  const getSaveNews = useCallback(async () => {
    const detail = await News.get_save_news();
    setIsLoadingGetSaveNews(false);
    setIsSaveNews(detail.data);
    setStatusCodeSaveNews(detail.statusCode);
  }, [isSaveNews]);
  useEffect(() => {
    if (isLoadingGetSaveNews == true) {
      getSaveNews();
    } else {
    }
  }, [isLoadingGetSaveNews]);
  return {
    isSaveNews,
    setIsLoadingGetSaveNews,
    isLoadingGetSaveNews,
    statusCodeSaveNews,
  };
};
export const useGetNewsByIdUser = id_user => {
  const [listNewsByIdUser, setListNewsByIdUser] = useState([]);
  const [isLoadingGetNewsByIdUser, setIsLoadingGetNewsByIdUser] =
    useState(true);
  const getNewsByIdUser = useCallback(async () => {
    const detail = await News.get_new_by_id_user(id_user);
    setIsLoadingGetNewsByIdUser(false);
    setListNewsByIdUser(detail.data);
  }, [listNewsByIdUser]);

  useEffect(() => {
    if (isLoadingGetNewsByIdUser == true) {
      getNewsByIdUser();
    } else {
    }
  }, [isLoadingGetNewsByIdUser]);
  return {
    listNewsByIdUser,
    setIsLoadingGetNewsByIdUser,
    isLoadingGetNewsByIdUser,
  };
};

export const useSuggestNews = props => {
  const [listSuggestNews, setListSuggestNews] = useState([]);
  const [isLoadingListSuggestNews, setIsLoadingListSuggestNews] =
    useState(true);
  const getListNewsSuggest = useCallback(async () => {
    const detail = await apiSettings.get_goiy_news(
      props.id_user,
      props.id_news,
    );
    setListSuggestNews(detail.data);
    setIsLoadingListSuggestNews(false);
  }, [listSuggestNews]);

  useEffect(() => {
    if (isLoadingListSuggestNews == true) {
      getListNewsSuggest();
    }
  }, [isLoadingListSuggestNews]);
  return {
    listSuggestNews,
    setIsLoadingListSuggestNews,
    isLoadingListSuggestNews,
  };
};

export const HookGetSche_by_id_user_id_news = id_news => {
  const [status, setstatus] = useState(false);
  const [listsche, setlistsche] = useState([]);
  const [checkget, setcheckget] = useState(false);
  const [newDaysObject, setnewDaysObject] = useState();
  const fetchRoadmap = useCallback(async () => {
    const list_date = [];
    const make_date = {};

    const detail = await News.getschedulebyid_user_id_news(id_news);

    setcheckget(true);

    for (var i = 0; i < detail.data.length; i++) {
      var year = new Date(detail.data[i].date_time).getFullYear();
      var month = new Date(detail.data[i].date_time).getMonth() + 1;
      var date = new Date(detail.data[i].date_time).getDate();

      if (date < 10) {
        if (month < 10) {
          var datetime = {date: '', status: ''};
          datetime.date =
            year.toString() + '-0' + month.toString() + '-0' + date.toString();
          datetime.status = detail.data[i].state;
        } else {
          var datetime = {date: '', status: ''};
          datetime.date =
            year.toString() + '-' + month.toString() + '-0' + date.toString();
          datetime.status = detail.data[i].state;
        }

        //date="0"+date.toString()
      } else {
        if (month < 10) {
          var datetime = {date: '', status: ''};
          datetime.date =
            year.toString() + '-0' + month.toString() + '-' + date.toString();
          datetime.status = detail.data[i].state;
        } else {
          var datetime = {date: '', status: ''};
          datetime.date =
            year.toString() + '-' + month.toString() + '-' + date.toString();
          datetime.status = detail.data[i].state;
        }
      }
      list_date.push(datetime);
    }
    list_date.map(item =>
      item.status.trim() == 'AWAIT'
        ? (make_date[item.date] = {
            selected: true,
            marked: true,
            selectedColor: 'red',
          })
        : (setstatus(true),
          (make_date[item.date] = {
            selected: true,
            marked: true,
            selectedColor: 'green',
          })),
    );
    setlistsche(list_date);
    setnewDaysObject(make_date);
  }, [listsche]);

  useEffect(() => {
    if (checkget == false) {
      fetchRoadmap();
    }
  }, [checkget, fetchRoadmap]);
  return {listsche, setcheckget, checkget, newDaysObject, status};
};
export const HookGetSche_by_id_user = () => {
  const [listsche, setlistsche] = useState([]);
  const [checkget, setcheckget] = useState(false);
  const [newDaysObject, setnewDaysObject] = useState();
  const fetchRoadmap = useCallback(async () => {
    const list_date = [];
    const make_date = {};

    const detail = await News.getschedulebyid_user();
    setcheckget(true);
    for (var i = 0; i < detail.data.length; i++) {
      var year = new Date(detail.data[i].date_time).getFullYear();
      var month = new Date(detail.data[i].date_time).getMonth() + 1;
      var date = new Date(detail.data[i].date_time).getDate();
      if (date < 10) {
        if (month < 10) {
          var datetime = {date: '', status: ''};
          datetime.date =
            year.toString() + '-0' + month.toString() + '-0' + date.toString();
          datetime.status = detail.data[i].state;
        } else {
          var datetime = {date: '', status: ''};
          datetime.date =
            year.toString() + '-' + month.toString() + '-0' + date.toString();
          datetime.status = detail.data[i].state;
        }

        //date="0"+date.toString()
      } else {
        if (month < 10) {
          var datetime = {date: '', status: ''};
          datetime.date =
            year.toString() + '-0' + month.toString() + '-' + date.toString();
          datetime.status = detail.data[i].state;
        } else {
          var datetime = {date: '', status: ''};
          datetime.date =
            year.toString() + '-' + month.toString() + '-' + date.toString();
          datetime.status = detail.data[i].state;
        }
      }
      list_date.push(datetime);
    }
    list_date.map(item =>
      item.status.trim() == 'AWAIT'
        ? (make_date[item.date] = {
            selected: true,
            marked: true,
            selectedColor: 'red',
          })
        : // setstatus(true),
          (make_date[item.date] = {
            selected: true,
            marked: true,
            selectedColor: 'green',
          }),
    );
    setlistsche(list_date);
    setnewDaysObject(make_date);
  }, [listsche]);

  useEffect(() => {
    if (checkget == false) {
      fetchRoadmap();
    }
  }, [checkget, fetchRoadmap]);
  return {listsche, setcheckget, checkget, newDaysObject};
};

export const HookGet_schedule_iduser_date = date => {
  const [listnews, setlistnews] = useState([]);
  const [checkget, setcheck] = useState(false);
  const fetchRoadmap = useCallback(async () => {
    const detail = await News.getschedulebyid_user_date(date);
    setcheck(true);
    if (detail != null) {
      setlistnews(detail.data);
    } else {
      setlistnews(null);
    }
  }, [listnews]);

  useEffect(() => {
    if (checkget == false) {
      fetchRoadmap();
    }
  }, [checkget, fetchRoadmap]);
  return {listnews, setcheck, checkget};
};

export const HookGetSche_by_id_innkeeper = () => {
  const [listsche, setlistsche] = useState([]);
  const [checkget, setcheckget] = useState(false);
  const [newDaysObject, setnewDaysObject] = useState();
  const fetchRoadmap = useCallback(async () => {
    const list_date = [];
    const make_date = {};

    const detail = await Innkeeper.getschedulebyinnkeeper();
    setcheckget(true);
    for (var i = 0; i < detail.data.length; i++) {
      var year = new Date(detail.data[i].date_time).getFullYear();
      var month = new Date(detail.data[i].date_time).getMonth() + 1;
      var date = new Date(detail.data[i].date_time).getDate();
      if (date < 10) {
        if (month < 10) {
          var datetime = {date: '', status: ''};
          datetime.date =
            year.toString() + '-0' + month.toString() + '-0' + date.toString();
          datetime.status = detail.data[i].state;
        } else {
          var datetime = {date: '', status: ''};
          datetime.date =
            year.toString() + '-' + month.toString() + '-0' + date.toString();
          datetime.status = detail.data[i].state;
        }

        //date="0"+date.toString()
      } else {
        if (month < 10) {
          var datetime = {date: '', status: ''};
          datetime.date =
            year.toString() + '-0' + month.toString() + '-' + date.toString();
          datetime.status = detail.data[i].state;
        } else {
          var datetime = {date: '', status: ''};
          datetime.date =
            year.toString() + '-' + month.toString() + '-' + date.toString();
          datetime.status = detail.data[i].state;
        }
      }
      list_date.push(datetime);
    }
    list_date.map(item =>
      item.status.trim() == 'AWAIT'
        ? (make_date[item.date] = {
            selected: true,
            marked: true,
            selectedColor: 'red',
          })
        : (make_date[item.date] = {
            selected: true,
            marked: true,
            selectedColor: 'green',
          }),
    );
    setlistsche(list_date);
    setnewDaysObject(make_date);
  }, [listsche]);

  useEffect(() => {
    if (checkget == false) {
      fetchRoadmap();
    }
  }, [checkget, fetchRoadmap]);
  return {listsche, setcheckget, checkget, newDaysObject};
};
export const SearchAll = searchkey => {
  const [results, setresult] = useState();
  const [check, setcheck] = useState(false);
  const fetchRoadmap = useCallback(async () => {
    if (searchkey.state == 0) {
      const detail = await News.searchall(searchkey.searchkey);
      setcheck(true);
      setresult(detail);
    } else {
      const search = {
        search_key: searchkey.searchkey,
        type: searchkey.state,
      };
      const detail = await News.searchtype(search);
      setcheck(true);
      setresult(detail);
    }
  }, [results]);

  useEffect(() => {
    if (check == false) {
      fetchRoadmap();
    }
  }, [check, fetchRoadmap]);
  return {results, setcheck, check};
};

export const useGetNewsByIDNews = id_news => {
  const [detailNews, setDetailNews] = useState();
  const [isLoadingDetailNews, setIsLoadingDetailNews] = useState(true);
  const getDetailNews = useCallback(async () => {
    const detail = await apiSettings.getnews_byidnews(id_news);
    setDetailNews(detail);
    setIsLoadingDetailNews(false);
  }, [detailNews]);

  useEffect(() => {
    if (isLoadingDetailNews == true) {
      getDetailNews();
    } else {
    }
  }, [isLoadingDetailNews]);
  return {detailNews, setIsLoadingDetailNews, isLoadingDetailNews};
};
