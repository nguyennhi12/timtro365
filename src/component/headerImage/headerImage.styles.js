import {StyleSheet} from 'react-native';
import setScale from '../../helpers/Scale';
import {FONT_FAMILY} from '../../constants/font';
export const styles = StyleSheet.create({
  imageHeader: {
    flex: 3.5,
    alignItems: 'center',

    imageStyles: {
      borderBottomRightRadius: setScale(100),
      resizeMode: 'cover',
      opacity: 0.7,
    },

    logoImage: {
      left: setScale(25),
      flex: 1,
      justifyContent: 'center',
    },
    textWelCome: {
      flex: 1,
      customText: {
        left: setScale(25),
        fontFamily: FONT_FAMILY.HEADER,
        fontSize: setScale(30),
        color: 'black',
      },
    },
  },
});
