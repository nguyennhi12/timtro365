import {StyleSheet, Dimensions} from 'react-native';
import setScale from '../../../../helpers/Scale';
import {FONT_FAMILY} from '../../../../constants/font';
export const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: setScale(12),
  },
  setItemNews: {
    width: setScale(190),
    margin: setScale(20),
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 5,
  },
  imageNews: {
    width: setScale(185),
    height: setScale(120),
    borderRadius: setScale(5),
  },
  filterActiveButtonContainer: {
    paddingHorizontal: setScale(12),
    paddingVertical: setScale(6),
    borderRadius: setScale(4),
    marginRight: setScale(10),
  },
  filterInactiveButtonContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: setScale(12),
    paddingVertical: setScale(6),
    borderRadius: setScale(4),
    borderColor: '#5a5a5a',
    borderWidth: setScale(1),
    marginRight: setScale(10),
  },
  filterActiveText: {
    color: '#fff',
  },
  filterInactiveText: {
    color: '#5a5a5a',
  },
  listItemContainer: {
    flexDirection: 'row',
  },
  itemContainer: {
    width: setScale(100),
    marginLeft: '11%',
    marginRight: '11%',
    borderBottomColor: '#ECEDF0',
    alignItems: 'center',
  },

  itemName: {
    width: setScale(160),
    fontSize: setScale(17),
    color: '#484848',
    fontFamily: FONT_FAMILY.NORMAL,
    marginTop: setScale(5),
  },
  itemPrice: {
    width: setScale(160),
    fontSize: setScale(18),
    fontWeight: '500',
    color: '#E82020',
    fontFamily: FONT_FAMILY.HEADER,
    marginTop: setScale(5),
    marginBottom: setScale(10),
  },
  seeMoreContainer: {
    marginTop: setScale(10),
    padding: setScale(12),
    borderTopWidth: setScale(0.6),
    borderTopColor: '#ededed',
    alignItems: 'center',
  },
  seeMoreText: {
    color: '#0e45b4',
  },
});
