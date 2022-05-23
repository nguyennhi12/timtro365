import {StyleSheet, Dimensions} from 'react-native';
import setScale from '../../../../helpers/Scale';
export const styles = StyleSheet.create({
  setItemNews: {
    width: setScale(175),
    margin: setScale(15),
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 5,
  },
  imageNews: {
    width: setScale(185),
    height: setScale(120),
    borderRadius: setScale(5),
  },
  itemName: {
    width: setScale(160),
    fontSize: setScale(17),
    color: '#484848',
    fontFamily: 'Montserrat-Regular',
    marginTop: setScale(5),
  },
  itemPrice: {
    width: setScale(160),
    fontSize: setScale(18),
    fontWeight: '500',
    color: '#E82020',
    fontFamily: 'Montserrat-Bold',
    marginTop: setScale(5),
    marginBottom: setScale(10),
  },
});
