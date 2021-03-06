import { StyleSheet,Dimensions } from "react-native";
const {width} = Dimensions.get('window');
export const styles = StyleSheet.create({
    sectionContainer: {
      backgroundColor: '#fff',
      paddingHorizontal: 12,
      paddingLeft:'2%',
      paddingRight:'2%',      
      marginBottom: '2%',
      
    },
    sectionTitle: {
      fontWeight: '700',
      fontSize: 18,
      color: '#2f2f2f',
      marginVertical: 12,
    },
    sectionImage: {
      width: width - 24,
      height: 130,
      borderRadius: 10,
    },
    //
    filterContainer: {
      flexDirection: 'row',
      marginTop: 10,
    },
    filterActiveButtonContainer: {
      backgroundColor: '#242424',
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 4,
      marginRight: 10,
    },
    filterInactiveButtonContainer: {
      backgroundColor: '#fff',
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 4,
      borderColor: '#5a5a5a',
      borderWidth: 1,
      marginRight: 10,
    },
    filterActiveText: {
      color: '#fff',
    },
    filterInactiveText: {
      color: '#5a5a5a',
    },
    //
    listItemContainer: {
      flexDirection: 'row',
      
    },
    itemContainer: {
      width: 100,
      marginLeft: '11%',
      marginRight: '11%',
      //marginTop: 10,
     borderBottomColor: '#ECEDF0', 
     alignItems:'center'
    },
    itemImage: {
      width: '160%',
      height: 130,
      resizeMode: 'contain'
    },
    itemName: {
      fontSize: 17,
      color: '#484848',
      //marginVertical: 2,
    },
    itemPrice: {
      fontSize: 16,
      fontWeight: '500',
      color: '#E82020',
      fontWeight: "bold",
    },
    //
    seeMoreContainer: {
      marginTop: 10,
      padding: 12,
      borderTopWidth: 0.6,
      borderTopColor: '#ededed',
      alignItems: 'center',
    },
    seeMoreText: {
      color: '#0e45b4',
    },
    wrapper:{
       
  
    }
  });