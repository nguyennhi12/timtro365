import React, {useState} from 'react'
import {View, Text,TextInput, ScrollView,TouchableOpacity, Image} from 'react-native'
import {styles} from './Poststyles';
import { NativeBaseProvider, Center,Select, Button} from 'native-base';
import { Input} from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';
import { District } from '../QuanHuyen_Object/Area';
import ImageUpload from './PostData';
import * as ImagePicker from 'expo-image-picker';
import News from '../../config/News'
import showAlert from '../untils/Alert'
import AsyncStorage from '@react-native-async-storage/async-storage';

const PostScreen =({navigation})=>{
  const DATA = [
    {
     id: "1",
     srce:require( '../../images/phongtro.jpg'),
     title: "Nhà trọ",
   },
   {
     id: "2",
     srce:require('../../images/ktx.jpg'),
     title: "Kí túc xá",
   },
   {
     id: "3",
     srce:require('../../images/chungcu.jpg'),
     title: "Chung cư",
   },
   {
     id: "4",
     srce:require('../../images/oghep.png'),
     title: "Ở ghép",
   },
   {
     id: "5",
 
     srce:require('../../images/canho.jpg'),
     title: "Căn hộ",
   },
   ];
  

  //const navigation = useNavigation();
  const[selectkey, set_selectkey]=useState('')
  //console.log(District)
  const [distric, setdistric]=useState("TPHCM")
  const [ward,setward]=useState("")
  const[home_number,sethome_number]=useState("")
  const[street,setstreet]=useState("")
  const[area,setarea]=useState("")
  const [cost,setcost]=useState("")
  //const [state, setstate]=useState("")  
  const [address, setaddress]=useState("") 
  const [type, settype]=useState("") 
  const [profileImage, setProfileImage] = useState('')
  const [header, setheader]=useState("") 
  const [description, setdescription]=useState("")
  const [deposit, setdeposit]=useState("")
  
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
  
  const Regiter = async () =>{  
    const account = JSON.parse(await AsyncStorage.getItem("account")) 
    if(account==null){
      showAlert({title:"ERROR",message:"VUI LÒNG ĐĂNG NHẬP"})
      //navigation.navigate('login')
    }else{
      if(distric==""|| ward==""|| home_number==""||street==""||area==""||cost==""||type==""||profileImage==""||header==""||description==""|deposit==""){
        showAlert({title:"ERROR",message:"Các thông tin đều là bắt buộc"})
        console.log(password)
    }else{
        console.log(JSON.parse(type).id)
        let formdata= new FormData();  
        formdata.append("city","TPHCM"),
        formdata.append("ward",JSON.parse(ward).name_with_type),
        formdata.append("distric",JSON.parse(distric).name_with_type),
        formdata.append("home_number",home_number)    
        formdata.append("area",area)
        formdata.append("cost",cost)
        formdata.append("state","1")
        formdata.append("address",address)
        formdata.append("type",JSON.parse(type).id)
        formdata.append("image", {
          name: "test1",
          uri: profileImage,
          type: 'image/jpg'
        })
        formdata.append("header",header)
        formdata.append("description",description)
        formdata.append("deposit",deposit)
        console.log(formdata)
        var result = await News.create_new(formdata)
        console.log(result)
        if(result.statusCode==200){
          setstreet(""),
          setProfileImage("")
          setaddress("")
          setarea("")
          setcost(""),
          setdeposit(""),
          setdescription(""),
          setdistric(""),
          setheader(""),
          sethome_number(""),
          setstreet(""),
          settype(""),
          setward("")
          showAlert({title:"SUCCESS",message:"Đăng tin thành công"})
        }
      
   } 
    }
     
    
}

  return(
    <ScrollView style={styles.container}>

        <Text style={{backgroundColor:'#3E0895', color:'white',paddingTop:'2%',paddingBottom:'2%',paddingLeft:'4%', 
                      fontSize:23, fontWeight:'bold'}}>Đăng tin</Text>
        {/* Chọn khu vực */}
        <Text style={{paddingLeft:'4%', paddingBottom:'2%', paddingTop:'2%', fontSize:18, fontWeight:'bold'}}>Chọn khu vực:  Địa bàn TPHCM</Text>
        <View style={styles.selection}>
          <Text  style={{marginTop:'3%', marginRight:'2%',fontSize:18}}>Quận huyện:</Text>
          <NativeBaseProvider>
            <Select selectedValue={distric}
                    fontSize='15'
                    minWidth="200"
                    accessibilityLabel="Choose Service"
                    placeholder="Choose Service"
                    onValueChange={(itemvalue)=>setdistric(itemvalue)}>
                    {District.map(item=>(
                      <Select.Item key={item.code} label={item.name_with_type} value={JSON.stringify(item).toString()}/>
                    ))}   
              </Select>
            </NativeBaseProvider>    
        </View>
        <View style={styles.selection}>
          <Text  style={{marginTop:'3%', marginRight:'4%',fontSize:18}}>Phường xã:</Text>
          <NativeBaseProvider>
            <Select selectedValue={ward}
                    fontSize='15'
                    minWidth="200"
                    accessibilityLabel="Choose Service"
                    placeholder="Choose Service"
                    onValueChange={(itemvalue)=>setward(itemvalue)}>
                    {District.map(item=>(
                      <Select.Item key={item.code} label={item.name_with_type} value={JSON.stringify(item).toString()}/>
                    ))}   
              </Select>
            </NativeBaseProvider>    
        </View>
        <View style={{flexDirection:'row', backgroundColor:'white'}}>
          <Text  style={{marginTop:'6%',marginRight:'11%',fontSize:18,marginLeft: '2%'}} >Đường:</Text>
          <Input value={street} onChangeText={(text)=>setstreet(text)}></Input>  
        </View>
        <View style={{flexDirection:'row', backgroundColor:'white'}}>
          <Text  style={{marginTop:'6%', marginRight:'11%',fontSize:18,marginLeft: '2%'}} >Số nhà:</Text>
          <Input value={home_number} onChangeText={(text)=>sethome_number(text)}></Input>  
        </View>
        <Text style={{paddingLeft:'4%', paddingBottom:'2%', paddingTop:'2%', fontSize:18, fontWeight:'bold'}}>Chọn danh mục:</Text>
        {/* Chọn danh mục */}
        
          <View style={styles.selection}>
            <Text  style={{marginTop:'3%', marginRight:'2%',fontSize:18}}>Chọn danh mục:</Text>
            <NativeBaseProvider>
              <Select selectedValue={type}
                      fontSize='15'
                      minWidth="200"
                      accessibilityLabel="Choose Service"
                      placeholder="Choose Service"
                      onValueChange={(itemvalue)=>settype(itemvalue)}>
                      {DATA.map(item=>(
                        <Select.Item key={item.id} label={item.title} value={JSON.stringify(item).toString()}/>
                      ))}   
                </Select>
              </NativeBaseProvider>    
          </View>
          {/* Thông tin chi tiết */}
          <Text style={{paddingLeft:'4%', paddingBottom:'2%', paddingTop:'2%', fontSize:18, fontWeight:'bold'}}>Thông tin chi tiết:</Text>
          <View style={{flexDirection:'row', backgroundColor:'white'}}>
          <Text  style={{marginTop:'6%', marginRight:'6%',fontSize:18,marginLeft: '2%'}}>Diện tích:</Text>
          <Input value={area} keyboardType='numeric' onChangeText={(text)=> setarea(text)}></Input>  
          </View>
          <View style={{flexDirection:'row', backgroundColor:'white'}}>
            <Text  style={{marginTop:'6%', marginRight:'17%',fontSize:18,marginLeft: '2%'}}>Giá:</Text>
            <Input value={cost} keyboardType='numeric' onChangeText={(text)=>setcost(text)}></Input>  
          </View>
          <View style={{flexDirection:'row', backgroundColor:'white'}}>
            <Text  style={{marginTop:'6%', marginRight:'17%',fontSize:18,marginLeft: '2%'}}>Cọc:</Text>
            <Input value={deposit} keyboardType='numeric' onChangeText={(text)=>setdeposit(text)}></Input>  
          </View>
          <View style={{flexDirection:'row', backgroundColor:'white'}}>
            <Text  style={{marginTop:'6%', marginRight:'4%',fontSize:18,marginLeft: '2%'}}>Chủ đề:</Text>
            <Input value={header} onChangeText={(text)=>setheader(text)}></Input>  
          </View>
          <View style={{flexDirection:'row', backgroundColor:'white'}}>
            <Text  style={{marginTop:'6%', marginRight:'4%',fontSize:18,marginLeft: '2%'}}>Địa chỉ:</Text>
            <Input value={address} onChangeText={(text)=>setaddress(text)}></Input>  
          </View>
          <View style={{flexDirection:'row', backgroundColor:'white'}}>
            <Text  style={{marginTop:'6%', marginRight:'4%',fontSize:18,marginLeft: '2%'}}>Đặc điểm nổi bật:</Text>
            <Input value={description} onChangeText={(text)=>setdescription(text)}></Input>  
          </View>
          <View style={styles.containerimage}>
                  <View>
                    <TouchableOpacity  onPress={openImageLibrary} style={styles.uploadBtnContainer}>
                      {profileImage ? <Image source={{uri: profileImage}} style={{width: '100%', height: '100%'}}/>: <Text style={styles.uploadBtn}>Upload Profile Image</Text>}
                    </TouchableOpacity>
                  </View>
                </View>
          <View style={{height:50,marginTop: '10%', justifyContent:'center',alignItems:'center'}}>
                <NativeBaseProvider>
                <Button colorScheme="purple" _text={{ color: 'white' }}
                   onPress={Regiter}>
                     Đăng Tin
                </Button>
                </NativeBaseProvider>
          </View>

        
        

    </ScrollView>
  );
}
export default PostScreen;


