import {StyleSheet} from 'react-native';
import setScale from '../../helpers/Scale';
import {COLOR} from '../../constants/color';
import {FONT_FAMILY} from '../../constants/font';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: setScale(345),
    marginTop: setScale(5),
  },
  textLabel: {
    fontFamily: FONT_FAMILY.HEADER,
    fontSize: setScale(14),
  },
  textInput: {
    fontFamily: FONT_FAMILY.NORMAL,
    fontSize: setScale(16),
    color: 'black',
    borderBottomWidth: setScale(1),
    borderBottomColor: COLOR.BOTTOM_LINE,
  },
});
