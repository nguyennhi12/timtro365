import * as React from 'react';
import { BottomNavigation} from 'react-native-paper';
import StackMore from '../../More';
import StackDanhMuc from '../../DanhMuc';
import ImageUpload from '../../Post/PostData';
import TabViews from '../../Notification/Notification';
import StackPost from '../../Post';
const HomeRoute = () => <StackDanhMuc/>;
const NewsRoute = () => <StackPost/>;
const BellsRoute = () => <TabViews/>;
const MoresRoute = () => <StackMore/>;


const bottom_navigation = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home'},
    { key: 'news', title: 'Đăng Tin', icon: 'file-document-edit-outline' },
    { key: 'bells', title: 'Thông báo', icon: 'bell' },
    { key: 'mores', title: 'Thêm', icon: 'view-headline' },//Dùng MaterialCommunityIcons
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    news: NewsRoute,
    bells: BellsRoute,
    mores: MoresRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{backgroundColor:'white'}}
      inactiveColor="black"
      activeColor="#AB49E9"
    />
  );
};

export default bottom_navigation;