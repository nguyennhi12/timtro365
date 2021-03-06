import React, {useState,Component,useEffect} from 'react';
import {Image, TextInput,View,StyleSheet,Text, ScrollView, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Input} from 'react-native-elements';
import { NativeBaseProvider,Link ,Button} from 'native-base';
import {createStackNavigator} from '@react-navigation/stack';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/core';
import Account from '../../../config/Account'
import showAlert from '../../untils/Alert'
import { launchImageLibrary } from 'react-native-image-picker';
const RegisterScreen =()=>{
  const navigation = useNavigation();
  const [icon, setIcon] = useState("eye-off")
  const [hidePassword, setHidePassword] = useState(true)
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
    const formData = new FormData();
    formData.append('newimage', {
      name: "test",
      uri: profileImage,
      type: 'image/jpg'
    })
    //console.log
  }
  _changeIcon = () => {
    icon !== "eye"
      ? (setIcon("eye"), setHidePassword(false))
      : (setIcon("eye-off"), setHidePassword(true))
  }
    const [name, setname]=useState("")
    const [username,setusername]=useState("")
    const[email,setemail]=useState("")
    const[phonenumber,setphonenumber]=useState("")
    const[address,setaddress]=useState("")
    const [password,setpassword]=useState("")
    const [repassword, setrepassword]=useState("")  
      
    const Regiter = async () =>{   
      if(username==""|| name==""|| password==""||email==""||address==""||phonenumber==""||repassword==""|| profileImage==""){
        showAlert({title:"ERROR",message:"C??c th??ng tin ?????u l?? b???t bu???c"})
        //console.log(password)
      }else{
        if(repassword!=password){
          showAlert({title:"ERROR",message:"Password v?? RePassword ch??a tr??ng kh???p"})
        }else{
          let formdata= new FormData();      
          formdata.append("username",username)
          formdata.append("password",password)
          formdata.append("displayname",name)
          formdata.append("address",address)
          formdata.append("phonenumber",phonenumber)
          formdata.append("image", {
                          name: "test",
                          uri: profileImage,
                          type: 'image/jpg'
                        })
          formdata.append("email",email)
          var result = await Account.signin(formdata)
          console.log(result)
        }
      } 
      
  }
    return(
        <ScrollView 
        style={{flex: 1, backgroundColor:'#fffffff'}}
        showsVerticalScrollIndicator={false}>
            <NativeBaseProvider>
        <ImageBackground
         source={require('../../../images/backgroundimage.jpg')}
         style={{height: Dimensions.get('window').height/ 3,
         }}>
             <View style={styles.brandView}>
                <Icon name="home-city" color="yellow" size={100} />  
                <Text style={styles.brandViewText}> T??m tr??? 365</Text>
            </View> 
        </ImageBackground>
        <View style={styles.bottomView}>
            <View style={{padding: 40}}>
                <Text style={{color: 'blue', fontSize: 27}}>
                    
                    Ch??o m???ng b???n ?????n v???i ???ng d???ng t??m nh?? tr??? </Text>
                <Text>
                    B???n ???? c?? t??i kho???n ? 
                    <Text style={{color:'red',fontStyle:'italic', marginTop:'10%'}}
                   onPress={()=>navigation.navigate('????ng nh???p')}> 
                        {'  '}               
                        ????ng nh???p ngay
                    </Text> 
                </Text>   
                <View style={{marginTop: 50}}>
                    <Input placeholder="Nh???p h??? v?? t??n"  onChangeText={(text)=>setname(text)} />
                    <Input placeholder="Nh???p t??i kho???n"   onChangeText={(text)=>setusername(text)}/>
                    <Input placeholder="Nh???p email"   onChangeText={(text)=>setemail(text)}/>
                    <Input placeholder="Nh???p s??? ??i???n tho???i" onChangeText={(text)=>setphonenumber(text)} />
                    <Input placeholder="Nh???p ?????a ch???"  onChangeText={(text)=>setaddress(text)} />
                    <Input
                      onChangeText={(text)=>setrepassword(text)}
                     secureTextEntry={hidePassword} placeholder="Nh???p m???t kh???u"   
                     rightIcon={
                     <Icon name={icon} color='black' size={20}
                     onPress={()=> _changeIcon()}/>                     
                    }onChangeText={(text)=>setpassword(text)}>                                                                                  
                    </Input>
                    <Input
                      onChangeText={(text)=>setrepassword(text)}
                     secureTextEntry={hidePassword} placeholder="Nh???p l???i m???t kh???u"   
                     rightIcon={
                     <Icon name={icon} color='black' size={20}
                     onPress={()=> _changeIcon()}/>
                    }>                                                                                      
                    </Input>
                  
                </View>
                <View style={styles.container}>
                  <View>
                    <TouchableOpacity  onPress={openImageLibrary} style={styles.uploadBtnContainer}>
                      {profileImage ? <Image source={{uri: profileImage}} style={{width: '100%', height: '100%'}}/>: <Text style={styles.uploadBtn}>Upload Profile Image</Text>}
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{marginTop:'15%',height:50, justifyContent:'center',alignItems:'center'}}>
                
                <Button mt="1" colorScheme="orange" _text={{ color: 'white' }}
                onPress={Regiter}
                >
                     ????ng k??
                </Button>
            
                </View>
            </View>
        </View>
        </NativeBaseProvider>
        </ScrollView>
    );
    
};
export default RegisterScreen;

const styles=StyleSheet.create({
    brandView:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        
    },
    brandViewText:{
        color: '#ffffff',
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'none',
    },
    bottomView:{
        flex: 1.5,
        backgroundColor: '#ffffff',
        bottom: 50,
        borderTopStartRadius: 60,
        borderTopEndRadius: 60,
    },
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
});