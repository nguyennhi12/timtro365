import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    screenContainer: {
      flex: 0.5,
    },
    bodyContainer: {
      flex: 1,
      backgroundColor: '#ededed',
    },
    
    userContainer: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      paddingHorizontal: 20,
      paddingVertical: 22,
      alignItems: 'center',
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
      marginLeft: 20,
    },
    welcomeText: {
      color: '#828282',
    },
    authText: {
      color: '#4a0281',
      fontSize: 18,
      fontWeight: '500',
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
      flex: 1,
      color: '#4a027f',
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