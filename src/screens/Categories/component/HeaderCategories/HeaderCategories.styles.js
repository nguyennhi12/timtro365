import {StyleSheet} from 'react-native';
import setScale from '../../../../helpers/Scale';
import {COLOR} from '../../../../constants/color';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.MAIN_COLOR,
  },

  topScreen: {
    flex: 5,
  },
  name: {
    flex: 1,
    fontSize: setScale(20),
    alignSelf: 'center',
    marginTop: setScale(20),
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: setScale(30),
    marginLeft: setScale(10),
    marginTop: setScale(3),
    marginBottom: setScale(3),
    iconSearch: {
      alignSelf: 'center',
      marginLeft: setScale(10),
      color: 'black',
    },
    inputSearch: {
      marginLeft: setScale(20),
      fontSize: setScale(20),
      width: setScale(270),
    },
  },
});
