import {StyleSheet} from 'react-native';
import {COLOR} from '../../../../constants/color';
import {FONT_FAMILY} from '../../../../constants/font';
import setScale from '../../../../helpers/Scale';
export const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row',
  },
  itemOption: {
    flex: 1,
    marginRight: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleText: {
    fontFamily: FONT_FAMILY.HEADER,
    fontSize: setScale(18),
    color: 'black',
  },
});
