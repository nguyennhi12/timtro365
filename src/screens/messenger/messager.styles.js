import {StyleSheet} from 'react-native';
import {COLOR} from '../../constants/color';
import {FONT_FAMILY} from '../../constants/font';
import setScale from '../../helpers/Scale';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
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
});
