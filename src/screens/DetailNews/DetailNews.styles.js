import {StyleSheet} from 'react-native';
import setScale from '../../helpers/Scale';
import {FONT_FAMILY} from '../../constants/font';
import {COLOR} from '../../constants/color';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    position: 'absolute',
    zIndex: 100,
    backgroundColor: 'rgba(192,192,192,0.6)',
    paddingTop: setScale(5),
  },
  swiperNews: {
    height: setScale(250),
  },
  nameCost: {
    flex: 3,
    margin: setScale(10),
    textHeader: {
      fontFamily: FONT_FAMILY.HEADER,
      fontSize: setScale(22),
      color: 'black',
      marginBottom: setScale(5),
    },
    textCost: {
      fontFamily: FONT_FAMILY.HEADER,
      fontSize: setScale(20),
      color: 'red',
    },
  },
  stylesLine: {
    height: 1,
    backgroundColor: COLOR.BOTTOM_LINE,
  },
  infoInnkeeper: {
    flex: 4.5,
  },
  infoNews: {
    flex: 5,
    margin: setScale(10),
    fontFamily: FONT_FAMILY.NORMAL,
    styleText: {
      textAlign: 'justify',
      lineHeight: setScale(25),
    },
  },
  suggestNews: {
    flex: 3,
  },
  callSMSChat: {
    borderTopWidth: setScale(1),
    borderTopColor: COLOR.BOTTOM_LINE,
    flex: 1,
    bottom: 0,
    position: 'absolute',
    zIndex: 100,
    backgroundColor: 'white',
    flexDirection: 'row',
    styleCall: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      textCall: {
        fontFamily: FONT_FAMILY.HEADER,
        fontSize: setScale(18),
        marginRight: setScale(10),
        color: COLOR.MAIN_COLOR,
      },
    },
    stylesSMS: {
      flex: 1,
      backgroundColor: COLOR.MAIN_COLOR,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      textSMS: {
        fontFamily: FONT_FAMILY.HEADER,
        fontSize: setScale(18),
        marginRight: setScale(10),
        color: 'white',
      },
    },
    stylesChat: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      textChat: {
        fontFamily: FONT_FAMILY.HEADER,
        fontSize: setScale(20),
        marginRight: setScale(18),
        color: COLOR.MAIN_COLOR,
      },
    },
  },
});
