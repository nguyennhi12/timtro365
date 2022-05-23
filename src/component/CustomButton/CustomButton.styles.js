import {StyleSheet} from 'react-native';
import setScale from '../../helpers/Scale';
import {COLOR} from '../../constants/color';
export const styles = props =>
  StyleSheet.create({
    container: {
      height: 50,
      backgroundColor: COLOR.MAIN_COLOR,
      width: setScale(345),
      borderRadius: setScale(10),
      justifyContent: 'center',
      alignItems: 'center',
      opacity: props.isEnableButton ? 0.2 : 1,
    },
    textLabel: {
      color: 'black',
      fontFamily: 'nunito_bold',
      fontSize: setScale(16),
    },
  });
