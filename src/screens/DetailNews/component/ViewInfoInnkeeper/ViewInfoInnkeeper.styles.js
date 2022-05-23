import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import {COLOR} from '../../../../constants/color';
import {FONT_FAMILY} from '../../../../constants/font';
import SetScale from '../../../../helpers/Scale';
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  textName: {
    fontSize: SetScale(20),
    fontFamily: FONT_FAMILY.HEADER,
    color: 'red',
    marginBottom: 10,
  },
  textAddress: {
    width: SetScale(280),
    fontSize: SetScale(15),
    fontFamily: FONT_FAMILY.NORMAL,
    color: 'black',
    marginBottom: 10,
  },
  textPhoneNumber: {
    fontSize: SetScale(15),
    fontFamily: FONT_FAMILY.NORMAL,
    color: 'black',
    marginBottom: SetScale(10),
  },
  buttonViewInfo: {
    borderColor: COLOR.MAIN_COLOR,
    borderWidth: SetScale(1.5),
    width: SetScale(90),
    height: SetScale(30),
    borderRadius: SetScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    top: SetScale(-10),
    textButton: {
      fontFamily: FONT_FAMILY.HEADER,
      color: COLOR.MAIN_COLOR,
    },
  },
});
