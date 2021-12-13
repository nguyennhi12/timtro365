
import {Alert } from "react-native";
const showAlert = ({title, message}) =>{
    console.log(title)
    return(
        Alert.alert(
            //title
            title,
            //body
            message,
            [
              {
                text: 'OK'                
              },
              
            ],
            {cancelable: false},
            //clicking out side of alert will not cancel
          )

    )
}

  export default showAlert;
