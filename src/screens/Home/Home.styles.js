import {StyleSheet} from 'react-native';
import setScale from '../../helpers/Scale';
import {COLOR} from '../../constants/color';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  secondsScreen: {
    flex: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  viewSwiper: {
    height: setScale(200),
  },
  textTopInNewsDay: {
    fontFamily: 'Montserrat-Bold',
    fontSize: setScale(19),
    color: 'black',
    marginTop: setScale(10),
    marginLeft: setScale(10),
  },
});
