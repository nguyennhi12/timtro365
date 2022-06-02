import {StyleSheet} from 'react-native';
import {COLOR} from '../../constants/color';
import setScale from '../../helpers/Scale';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sizeIconLeft: setScale(25),
  map: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
  styleGGPlaceComplete: {
    width: 350,
    marginLeft: 20,
  },
  styleGoBack: {
    position: 'absolute',
    zIndex: setScale(100),
    width: setScale(450),
    backgroundColor: COLOR.COLOR_RBA,
    flexDirection: 'row',
    paddingVertical: setScale(10),
    alignItems: 'center',
  },
  styleIconFind: {
    zIndex: setScale(100),
    bottom: setScale(20),
    position: 'absolute',
    right: setScale(10),
    backgroundColor: 'white',
    width: setScale(40),
    height: setScale(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: setScale(5),
  },
});
