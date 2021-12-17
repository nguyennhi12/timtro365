import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native';

export const styles = StyleSheet.create({

  container: {
      flex: 1,
      backgroundColor: '#ECEDF0',  
      width: '100%',
      marginTop: '10%',
      
  },
  navigation:{
    backgroundColor: '#3E0895',  
    width: '100%',
    flexDirection:'row'
  
  },
  selection:{
    backgroundColor: '#FFFF',  
    width: '100%',
    flexDirection:'row',
    padding :'2%',
  },
  listItem:{
    marginTop:"2%",
    backgroundColor: '#FFFF',  
    width: '100%',
    
  },

  card:{
      backgroundColor: '#3E0895',
      width: '30%',
      height: '25%',
      marginTop:'5%',
      flex: 0.1,
      

  },
  contentContainer: {
    flex: 1,
  },
  containerimage:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  uploadBtnContainer:{
    height: 125,
    width: 125,
    borderRadius: 125/2,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
    borderWidth: 1,
    overflow: 'hidden',
  },
  uploadBtn:{
    textAlign: 'center', 
    fontSize: 16,
    opacity: 0.3, 
    fontWeight: 'bold'
  },
  skip:{
    textAlign: 'center',
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    opacity: 0.5,
  },
});

