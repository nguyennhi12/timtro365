import {StyleSheet} from 'react-native';
import {FONT_FAMILY} from '../../../../constants/font';
import setScale from '../../../../helpers/Scale';
export const styles = StyleSheet.create({
  container: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCreate: {
    width: setScale(345),
    marginTop: setScale(10),
    fontFamily: FONT_FAMILY.HEADER,
    fontSize: setScale(14),
  },
});
