import {StyleSheet} from 'react-native';
import {FONT_FAMILY} from '../../../../constants/font';
import setScale from '../../../../helpers/Scale';
export const styles = StyleSheet.create({
  container: {
    //flex: 8,
    //height: setScale(450),
    marginTop: setScale(15),
    backgroundColor: 'white',
    borderRadius: setScale(10),
    paddingLeft: setScale(10),
    paddingBottom: setScale(10),
  },
  styleTextHeader: {
    fontSize: setScale(18),
    fontFamily: FONT_FAMILY.HEADER,
    color: 'black',
    margin: setScale(5),
  },
  styleGroupTextInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: setScale(10),
  },
  styleTextHeaderGroup: {
    fontFamily: FONT_FAMILY.NORMAL,
    color: 'black',
    marginRight: setScale(10),
  },
  styleTextInputGroup: {
    width: setScale(280),
    //backgroundColor: 'pink',
  },
  styleTextInputDetail: {
    width: setScale(200),
    //backgroundColor: 'pink',
  },
});
