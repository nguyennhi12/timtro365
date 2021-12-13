import React from 'react';
import {StyleSheet, View, StatusBar, FlatList, Text, useWindowDimensions} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { styles } from './Notificationstyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const NotificationItem = ({item}) => (
  <View style={styles.itemContainer}>
    <View style={styles.itemTopContainer}>
      <View
        style={[
          styles.itemTypeContainer,
          {
            backgroundColor: item.type === 1 ? '#fc820a' : '#dc3988',
          },
        ]}>
        <MaterialCommunityIcons
          name={item.type === 1 ? 'sale' : 'backup-restore'}
          color="#fff"
          size={22}
        />
      </View>
      <View style={styles.itemTopTextContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDate}>{item.date}</Text>
      </View>
    </View>
    <View>
      <Text style={styles.itemDetail}>{item.detail}</Text>
    </View>
  </View>
);
const FirstRoute = () => (
  <View style={styles.screenContainer}>
  <StatusBar barStyle="light-content" />
  <View style={styles.bodyContainer}>
    <View style={styles.listContainer}>
      <FlatList
        data={[
          {
            id: 1,
            type: 1,
            name: 'Bùi Đức Huy đặt lịch hẹn thành công',
            date: '6 ngày trước',
            detail:
              'Nhà trọ quận 9',
          },
          {
            id: 2,
            type: 2,
            name: 'Bùi Đức Huy lưu tin thành công',
            date: '2 ngày trước',
            detail:
              'Nhà trọ quận 2',
          },
          {
            id: 3,
            type: 1,
            name: 'Bùi Đức Huy đặt lịch hẹn thành công',
            date: '6 ngày trước',
            detail:
              'Nhà trọ quận 9',
          },
        ]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <NotificationItem item={item} />}
      />
    </View>
  </View>
</View>
);
const SecondRoute = () => (
  <View style={styles.screenContainer}>
      <StatusBar barStyle="light-content" />
      <View style={styles.bodyContainer}>
        <View style={styles.listContainer}>
          <FlatList
            data={[
              {
                id: 1,
                type: 1,
                name: 'Anker Giảm Khủng 40% Duy Nhất Hôm Nay 13/11',
                date: '13/11/2018',
                detail:
                  'Anker Giảm Khủng 40% Duy Nhất Hôm Nay 13/11 - Số Lượng Có Hạn',
              },
              {
                id: 2,
                type: 2,
                name: 'GỢI Ý QUÀ TẶNG 20.10',
                date: '02/11/2018',
                detail:
                  'NHẬP MÃ UUDAIT11 GIẢM 50K CHO ĐƠN HÀNG 700K. Áp dụng cho sản phẩm ngành Điện Gia Dụng. XEM NGAY!',
              },
              {
                id: 3,
                type: 1,
                name: 'Anker Giảm Khủng 40% Duy Nhất Hôm Nay 13/11',
                date: '13/11/2018',
                detail:
                  'Anker Giảm Khủng 40% Duy Nhất Hôm Nay 13/11 - Số Lượng Có Hạn',
              },
              {
                id: 4,
                type: 2,
                name: 'GỢI Ý QUÀ TẶNG 20.10',
                date: '02/11/2018',
                detail:
                  'NHẬP MÃ UUDAIT11 GIẢM 50K CHO ĐƠN HÀNG 700K. Áp dụng cho sản phẩm ngành Điện Gia Dụng. XEM NGAY!',
              },
              {
                id: 5,
                type: 1,
                name: 'Anker Giảm Khủng 40% Duy Nhất Hôm Nay 13/11',
                date: '13/11/2018',
                detail:
                  'Anker Giảm Khủng 40% Duy Nhất Hôm Nay 13/11 - Số Lượng Có Hạn',
              },
              {
                id: 6,
                type: 2,
                name: 'GỢI Ý QUÀ TẶNG 20.10',
                date: '02/11/2018',
                detail:
                  'NHẬP MÃ UUDAIT11 GIẢM 50K CHO ĐƠN HÀNG 700K. Áp dụng cho sản phẩm ngành Điện Gia Dụng. XEM NGAY!',
              },
            ]}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <NotificationItem item={item} />}
          />
        </View>
      </View>
    </View>
);



const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function TabViews() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'HOẠT ĐỘNG' },
    { key: 'second', title: 'TIN MỚI' },
  ]);

  return (
    <View style={styles.bodyContainer}>
      <View style={styles.title}>
        <Text style={styles.titleheader}>Thông báo</Text>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        
      />
    </View>
  );
}
