import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFCCC',
    //backgroundColor:"#FFFF",
  },

  header: {
    //backgroundColor:"#FFFF",
    flex: 6,
    //backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    //borderRadius: 80,
    height: '80%',
    width: '80%',
    resizeMode: 'stretch',
    //borderRadius: 110,
  },
  name: {
    flex: 1,
    alignSelf: 'center',
  },
  text: {
    fontFamily: 'lucida grande',
    fontWeight: 'bold',
    fontSize: 25,
  },
  note: {
    flex: 3,
    alignSelf: 'center',
  },
  button: {
    flex: 2,
    alignSelf: 'center',
    //backgroundColor: 'black',
  },
  _button: {
    backgroundColor: '#FA4A0C',
    color: '#FFFF',
    width: 300,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    //borderRadius: 50,
  },
  text_button: {
    fontWeight: 'bold',
    color: '#FFFF',
    fontSize: 20,
  },
});
