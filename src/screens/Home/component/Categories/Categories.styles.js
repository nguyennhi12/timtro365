import {StyleSheet} from 'react-native';
import setScale from '../../../../helpers/Scale';
import {FONT_FAMILY} from '../../../../constants/font';
export const styles = StyleSheet.create({
  container: {
    flex: 1.25,
    paddingRight: setScale(6),
    marginTop: setScale(6),
    marginBottom: setScale(6),
    justifyContent: 'center',
  },
  item: {
    padding: setScale(10),
    width: setScale(50),
  },
  categogy: {
    width: setScale(120),
    alignItems: 'center',
    marginBottom: setScale(10),
  },
  title: {
    fontSize: setScale(18),
    marginBottom: setScale(6),
    alignContent: 'center',
    fontFamily: FONT_FAMILY.NORMAL,
  },
  danhmuc: {
    fontSize: setScale(20),
    fontFamily: FONT_FAMILY.HEADER,
    marginLeft: setScale(6),
    color: 'black',
    margin: setScale(10),
    marginBottom: setScale(20),
  },
});
