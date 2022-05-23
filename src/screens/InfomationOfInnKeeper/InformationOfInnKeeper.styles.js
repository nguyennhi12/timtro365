import {StyleSheet} from 'react-native';
import {COLOR} from '../../constants/color';
import {FONT_FAMILY} from '../../constants/font';
import setScale from '../../helpers/Scale';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  stylesIcon: {
    alignSelf: 'center',
    marginRight: setScale(30),
    color: 'black',
  },
  sizeIcon: setScale(20),
  stylesName: {
    fontFamily: FONT_FAMILY.HEADER,
    fontSize: setScale(20),
    color: 'black',
  },
  info: {
    flex: 3,
    backgroundColor: 'yellow',
  },
  option: {
    flex: 3,
  },
  listShow: {
    flex: 10,
    backgroundColor: 'pink',
  },
  stylesLine: {
    height: setScale(1),
    backgroundColor: COLOR.BOTTOM_LINE,
    width: setScale(400),
    marginLeft: setScale(10),
  },
});
