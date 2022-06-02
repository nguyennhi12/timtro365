import {StyleSheet} from 'react-native';
import {FONT_FAMILY} from '../../../../constants/font';
import setScale from '../../../../helpers/Scale';
export const styles = StyleSheet.create({
  container: {
    minHeight: setScale(250),
    marginTop: setScale(15),
    backgroundColor: 'white',
    borderRadius: setScale(10),
    paddingLeft: setScale(10),
    paddingBottom: setScale(10),
  },
  styleImage: {
    width: setScale(80),
    height: setScale(80),
    resizeMode: 'stretch',
    marginRight: setScale(10),
  },
  sizeIcon: 50,
  styleIconAdd: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    width: setScale(80),
    height: setScale(80),
    borderRadius: setScale(10),
  },
  styleCloseButton: {
    width: setScale(20),
    height: setScale(20),
    position: 'absolute',
    zIndex: setScale(100),
    backgroundColor: 'rgba(192,192,192,0.6)',
    right: setScale(10),
    borderRadius: setScale(20),
    alignItems: 'center',
    justifyContent: 'center',
    margin: setScale(5),
  },
});
