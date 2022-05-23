import {StyleSheet} from 'react-native';
import setScale from '../../helpers/Scale';
import {FONT_FAMILY} from '../../constants/font';
import {COLOR} from '../../constants/color';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  optionSignUp: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textAlready: {
    fontFamily: FONT_FAMILY.HEADER,
  },
  textLogin: {
    fontFamily: FONT_FAMILY.HEADER,
    color: COLOR.MAIN_COLOR,
  },
});
