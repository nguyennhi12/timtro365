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
        marginTop: '8%',
        
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
    }
  });

  