import React, {useState}from 'react';
import { Icon, Select, NativeBaseProvider, Center } from 'native-base';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import News from '../../config/News'
const ImageUpload = () => {
  const [profileImage, setProfileImage] = useState('')
  const openImageLibrary =  async() => {
    const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if(status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }
    if(status === 'granted')
    {
      const  response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
      });
      if(!response.cancelled){
        setProfileImage(response.uri)
      }
    }
  }
  const uploadProfileImage = () =>{
    console.log(profileImage);
  }
  const [distric, setdistric]=useState("")
    const [ward,setward]=useState("")
    const[home_number,sethome_number]=useState("")
    const[street,setstreet]=useState("")
    const[area,setarea]=useState("")
    const [cost,setcost]=useState("")
    const [state, setstate]=useState("")  
    const [address, setaddress]=useState("") 
    const [type, settype]=useState("") 
    const [image, setimage]=useState("") 
    const [header, setheader]=useState("") 
    const [description, setdescription]=useState("")
    const [deposit, setdeposit]=useState("")
      
    const Regiter = async () =>{   
      if(distric==""|| ward==""|| home_number==""||street==""||area==""||cost==""||state==""|| type==""||image==""||header==""||description==""|deposit==""){
        showAlert({title:"ERROR",message:"Các thông tin đều là bắt buộc"})
        console.log(password)
      }else{
       
          let formdata= new FormData();      
         
          formdata.append("address",address)
         
          var result = await News.create_new(formdata)
          console.log(result)
        
      } 
      
  }
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity  onPress={openImageLibrary} style={styles.uploadBtnContainer}>
          {profileImage ? <Image source={{uri: profileImage}} style={{width: '100%', height: '100%'}}/>: <Text style={styles.uploadBtn}>Upload Profile Image</Text>}
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default ImageUpload;

const styles = StyleSheet.create({
  container:{
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
})