import {StyleSheet} from 'react-native';
import {COLOR} from '../../../../constants/color';
import {FONT_FAMILY} from '../../../../constants/font';
import setScale from '../../../../helpers/Scale';
export const styles = StyleSheet.create({
  container: {
    flex: 3,
    marginLeft: setScale(5),
    padding: setScale(10),
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: setScale(10),
  },
  styleTextChoos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sizeIconEnv: 20,
  colorIconEnv: COLOR.MAIN_COLOR,
  styleTextHeader: {
    fontSize: setScale(18),
    fontFamily: FONT_FAMILY.HEADER,
    color: 'black',
  },
  styleGroupTextInput: {
    flexDirection: 'row',
    //alignItems: 'center',
    marginVertical: setScale(20),
  },
  styleTextHeaderGroup: {
    fontFamily: FONT_FAMILY.NORMAL,
    color: 'black',
    marginRight: setScale(10),
  },
  styleTextInputGroup: {
    width: setScale(260),
  },
});
