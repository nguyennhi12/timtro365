import React, {useState} from 'react';
import { TextInput,View,StyleSheet,Text, ScrollView, ImageBackground, Dimensions, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Input} from 'react-native-elements';
import { NativeBaseProvider,Link ,Button} from 'native-base';
import { useNavigation } from '@react-navigation/core';
import Account from '../../../config/Account'
import AsyncStorage from '@react-native-async-storage/async-storage';
import showAlert from '../../untils/Alert'
const ForgotPasswordChangeScreen =()=>{
    const [username,setusername]= useState("");
    const [password,setpassword]=useState("")    
    const navigation = useNavigation();
    const [icon, setIcon] = useState("eye-off")
    const [hidePassword, setHidePassword] = useState(true)    
    _changeIcon = () => {
        icon !== "eye"
        ? (setIcon("eye"), setHidePassword(false))
        : (setIcon("eye-off"), setHidePassword(true))
    }

    async function onclick(){
        showAlert('OK')
        // var title = 'ERROR'
        // var message = ''
        // var account = {username,password}
        // if(account.username=="" && account.password==""){
        //     message='Username và password không được trống!!'
        //     showAlert({title,message})
        // }else{
        //     if(account.username==""){
        //         message='Username không được trống!!'
        //         showAlert({title,message})
        //     }else{
        //         if(account.password==""){
        //             message='Password không được trống!!'
        //             showAlert({title,message})
        //         }else{
        //             var result=await Account.login(account)
        //             if(result.statusCode==200){
        //                 await AsyncStorage.setItem("account",JSON.stringify(result.data).toString())
        //                 navigation.navigate('Thêm')
        //             }else{
        //                 message=result.message
        //                 showAlert({title,message})
        //             }
                   
        //         }
        //     }
        // }
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
                <Text style={styles.brandViewText}> Tìm trọ 365</Text>
            </View> 
        </ImageBackground>
        <View style={styles.bottomView}>
            <View style={{padding: 40}}>
                <Text style={{color: 'green', fontSize: 24}}>
                    Bạn hãy nhập mật khẩu mới </Text>  
                <View style={{marginTop: 50}}>
                <Input
                     
                     secureTextEntry={hidePassword}
                     label="Password" placeholder="Nhập mật khẩu"   leftIcon={
                                                                        <Icon name="lock" color="black" size={20} />  }
                                                                        rightIcon={
                                                                            <Icon name={icon} color='black' size={20}
                                                                            onPress={()=> this._changeIcon()}/>}/>
                                                                       { /*onChangeText={(text)=>setpassword(text)}*/}
                </View>
                <View style={{marginTop: 10}}>
                <Input
                     
                     secureTextEntry={hidePassword}
                     placeholder="Nhập lại mật khẩu"   leftIcon={
                                                                        <Icon name="lock" color="black" size={20} />  }
                                                                        rightIcon={
                                                                            <Icon name={icon} color='black' size={20}
                                                                            onPress={()=> this._changeIcon()}/>}/>
                                                                             { /*onChangeText={(text)=>setpassword(text)}*/}
                </View>
                <View style={{height:50, justifyContent:'center',alignItems:'center'}}>
                
                <Button mt="1" colorScheme="orange" _text={{ color: 'white' }}
                        onPress={onclick}>
                     Đổi mật khẩu
                </Button>
                </View>
            </View>
        </View>
        </NativeBaseProvider>
        </ScrollView>
    );
};
export default ForgotPasswordChangeScreen;


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
});