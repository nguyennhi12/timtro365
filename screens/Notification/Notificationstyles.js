import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
      },
      bodyContainer: {
        flex: 1,
        backgroundColor: '#ededed',
      },
      title: {
        backgroundColor: 'purple',
        flexDirection: 'row',
        fontSize: 30,
      
        justifyContent: 'center',
        alignContent: 'center',
    
      },
      titleheader: {
        flexDirection: 'row',
        fontSize: 30,
        justifyContent: 'center',
        alignContent: 'center',
        color: 'white',
    
      },
      tabviews: {
        flexDirection: 'row',
        height: 30,
        justifyContent: 'center',
        alignContent: 'center',
    
      },
      activeMark: {
        backgroundColor: '#1e88e5',
        width: 4,
      },
      activeIcon: {
        padding: 12,
        // trick
        marginLeft: -4,
      },
      //
      listContainer: {
        flex: 1,
        borderLeftWidth: 1,
        borderLeftColor: '#e5e5e5',
      },
      //
      itemContainer: {
        backgroundColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderBottomColor: '#ededed',
        borderBottomWidth: 1,
      },
      itemTopContainer: {
        flexDirection: 'row',
      },
      itemTypeContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
      itemTopTextContainer: {
        marginRight: 40,
        marginLeft: 4,
      },
      itemName: {
        color: '#000',
        fontWeight: '500',
      },
      itemDate: {
        color: '#787878',
        fontSize: 12,
        marginTop: 8,
      },
      itemDetail: {
        color: '#787878',
        // fontSize: 12,
        marginTop: 12,
      },
});