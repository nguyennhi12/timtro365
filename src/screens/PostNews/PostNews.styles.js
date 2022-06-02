import {StyleSheet} from 'react-native';
import {FONT_FAMILY} from '../../constants/font';
import setScale from '../../helpers/Scale';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: setScale(25),
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
    width: 30,
    height: 30,
    position: 'absolute',
    zIndex: 100,
    backgroundColor: 'rgba(192,192,192,0.6)',
    right: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  styleTextStyle: {
    fontSize: setScale(24),
    fontFamily: FONT_FAMILY.HEADER,
    color: 'black',
  },
  styleTextHeader: {
    fontSize: setScale(18),
    fontFamily: FONT_FAMILY.HEADER,
    color: 'black',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
