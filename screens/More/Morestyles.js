import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    screenContainer: {
      flex: 0.5,
    },
    bodyContainer: {
      flex: 1,
      backgroundColor: '#ededed',
      marginTop:'12%',
      
    },
    
    userContainer: {
      backgroundColor: '#AB49E9',
      flexDirection: 'row',
      paddingHorizontal: 20,
      paddingVertical: 22,
      alignItems: 'center',
      paddingBottom:'5%',
      paddingTop:'5%'
    },
    avatarContainer: {
      width: 60,
      height: 60,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1e88e5',
    },
    textContainer: {
      flex: 1,
      marginLeft: 10,
      //fontSize:18
    },
    welcomeText: {
      color: 'white',
      fontSize:15,
      fontWeight:'bold'
    },
    authText: {
      color: 'white',
      fontSize: 22,
      fontWeight: 'bold',
    },
    //
    itemContainer: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      paddingHorizontal: 20,
      paddingVertical: 20,
      alignItems: 'center',
  
    },
    itemText: {
      fontSize:17,
      flex: 1,
      color: 'black',
    },
    //
    divider: {
      height: 20,
      paddingTop: 20,
    },
    itemImage: {
      width: 90,
      height: 90,
      resizeMode: 'contain' 
  
    },
  });