import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1.5,
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  slide1: {
    flex: 1,
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    backgroundColor: '#92BBD9',
  },
  image: {
    flex: 1,
    height: 30,
    width: 395,
    resizeMode: 'stretch',
  },
});
