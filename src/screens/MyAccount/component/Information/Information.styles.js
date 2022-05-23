import {StyleSheet} from 'react-native';
import {COLOR} from '../../../../constants/color';
import {FONT_FAMILY} from '../../../../constants/font';
import setScale from '../../../../helpers/Scale';
export const styles = StyleSheet.create({
  container: {
    flex: 3.5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  stylesImageAvatar: {
    flex: 2,
    width: setScale(110),
    height: setScale(110),
    resizeMode: 'stretch',
    borderRadius: setScale(60),
    marginLeft: setScale(15),
  },
  stylesViewTextInfo: {
    flex: 5,
    height: 100,
    marginRight: setScale(10),
    marginLeft: setScale(15),
    justifyContent: 'center',
  },
  stylesTextName: {
    fontFamily: FONT_FAMILY.HEADER,
    color: 'black',
  },
  stylesTextInfo: {
    fontFamily: FONT_FAMILY.NORMAL,
    color: 'black',
  },
  buttonViewInfo: {
    borderColor: COLOR.MAIN_COLOR,
    borderWidth: setScale(1.5),
    width: setScale(90),
    height: setScale(30),
    borderRadius: setScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: setScale(30),
    top: setScale(-5),
    textButton: {
      fontFamily: FONT_FAMILY.HEADER,
      color: COLOR.MAIN_COLOR,
    },
  },
  viewFollowSDT: {
    flexDirection: 'row',
    marginTop: 10,
  },
});
