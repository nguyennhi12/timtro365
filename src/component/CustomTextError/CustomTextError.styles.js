import {StyleSheet} from 'react-native';
import {COLOR} from '../../constants/color';
import setScale from '../../helpers/Scale';
export const styles = StyleSheet.create({
  labelError: {
    color: 'red',
    width: setScale(345),
    marginTop: setScale(5),
    marginBottom: setScale(5),
  },
});
