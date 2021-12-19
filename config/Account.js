import { API_URL, Account } from "./config";
import AsyncStorage from '@react-native-async-storage/async-storage';
const apiSettings = {
    login: async (account) => {
        const endpoint = `${API_URL}${Account}login`;
        const result = await fetch(endpoint,
            {
                method:'POST',
                body: JSON.stringify(account),
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json"
                }
            }).then((e) => {
                return e.text();
              }).then((text) => {                
                return JSON.parse(text);
              }).catch(function (error) {               
                console.log(error);
              });
        return result;
    },
    signin: async (account) => {
      //console.log(account)        
      const endpoint = `${API_URL}${Account}insertAccount`;
      console.log(endpoint)
      const result = await fetch(endpoint,
          {
              method:'POST',
              body: account,
              headers:{
                  "content-type": "multipart/form-data",
                  "Accept":"application/json"
              }
          }).then((e) => {
              return e.text();
            }).then((text) => {  
              console.log(text)              
              //return JSON.parse(text);
            }).catch(function (error) {               
              console.log(error);
            });
      return account;
  },
  get_infor_byid: async (id_user) => {
    //console.log(JSON.stringify(id_user))        
    const endpoint = `${API_URL}${Account}get_infomation_byid`;
    //console.log(endpoint)
    const result = await fetch(endpoint,
        {
            method:'POST',
            body: JSON.stringify(id_user),
            headers:{
              
              "Content-Type":"application/json",
              "Accept":"application/json"
            }
        }).then((e) => {
            return e.text();
          }).then((text) => {                
            return JSON.parse(text);
          }).catch(function (error) {               
            console.log(error);
          });
        
          //console.log("config",result)
    return result;
  },
  create_follow: async (id_follower) => {
    console.log(JSON.stringify(id_follower))        
    const endpoint = `${API_URL}${Account}create_follow`;
    const account = JSON.parse(await AsyncStorage.getItem("account")) 
    const result = await fetch(endpoint,
        {
            method:'POST',
            body: JSON.stringify({id_follower}),
            headers:{
              "Authorization": ` Bearer ${account.token}`,
              "Content-Type":"application/json",
              "Accept":"application/json"
            }
        }).then((e) => {
            return e.text();
          }).then((text) => {                
            return JSON.parse(text);
          }).catch(function (error) {               
            console.log(error);
          });
        
          //console.log("config",result)
    return result;
  },
  delete_follow: async (id_follower) => {
    console.log(JSON.stringify({id_follower}))        
    const endpoint = `${API_URL}${Account}delete_follow`;
    const account = JSON.parse(await AsyncStorage.getItem("account")) 
    const result = await fetch(endpoint,
        {
            method:'POST',
            body: JSON.stringify({id_follower}),
            headers:{
              "Authorization": ` Bearer ${account.token}`,
              "Content-Type":"application/json",
              "Accept":"application/json"
            }
        }).then((e) => {
            return e.text();
          }).then((text) => {                
            return JSON.parse(text);
          }).catch(function (error) {               
            console.log(error);
          });
        
          //console.log("config",result)
    return result;
  },
  getfollower: async () => {
    //console.log(JSON.stringify(id_user))        
    const endpoint = `${API_URL}${Account}getfollower`;
    const account = JSON.parse(await AsyncStorage.getItem("account")) 
    const result = await fetch(endpoint,
        {
            method:'GET',
            
            headers:{
              "Authorization": ` Bearer ${account.token}`,
              "Content-Type":"application/json",
              "Accept":"application/json"
            }
        }).then((e) => {
            return e.text();
          }).then((text) => {                
            return JSON.parse(text);
          }).catch(function (error) {               
            console.log(error);
          });
        
          //console.log("config",result)
    return result;
  },
  getfollowerbyid_user: async (id_user) => {
    //console.log(JSON.stringify(id_user))        
    const endpoint = `${API_URL}${Account}getfollowerbyid_user`;
    //const account = JSON.parse(await AsyncStorage.getItem("account")) 
    const result = await fetch(endpoint,
        {
            method:'POST',
            body: JSON.stringify(id_user),
            headers:{
              //"Authorization": ` Bearer ${account.token}`,
              "Content-Type":"application/json",
              "Accept":"application/json"
            }
        }).then((e) => {
            return e.text();
          }).then((text) => {                
            return JSON.parse(text);
          }).catch(function (error) {               
            console.log(error);
          });
        
          //console.log("config",result)
    return result;
  },
  getfollowerbyid_follower: async (id_user) => {
    //console.log(JSON.stringify(id_user))        
    const endpoint = `${API_URL}${Account}getfollowerbyid_follower`;
    //const account = JSON.parse(await AsyncStorage.getItem("account")) 
    const result = await fetch(endpoint,
        {
            method:'POST',
            body: JSON.stringify(id_user),
            headers:{
              //"Authorization": ` Bearer ${account.token}`,
              "Content-Type":"application/json",
              "Accept":"application/json"
            }
        }).then((e) => {
            return e.text();
          }).then((text) => {                
            return JSON.parse(text);
          }).catch(function (error) {               
            console.log(error);
          });
        
          //console.log("config",result)
    return result;
  },
  get_follower_id_user_id_follower: async (id_follower) => {
    //console.log(JSON.stringify(id_follower))        
    const endpoint = `${API_URL}${Account}get_follower_id_user_id_follower`;
    const account = JSON.parse(await AsyncStorage.getItem("account")) 
    const result = await fetch(endpoint,
        {
            method:'POST',
            body: JSON.stringify(id_follower),
            headers:{
              "Authorization": ` Bearer ${account.token}`,
              "Content-Type":"application/json",
              "Accept":"application/json"
            }
        }).then((e) => {
            return e.text();
          }).then((text) => {                
            return JSON.parse(text);
          }).catch(function (error) {               
            console.log(error);
          });
        
          //console.log("config",result)
    return result;
  },
  getfollowerofme: async () => {
    //console.log(JSON.stringify(id_user))        
    const endpoint = `${API_URL}${Account}getfollowerofme`;
    const account = JSON.parse(await AsyncStorage.getItem("account")) 
    const result = await fetch(endpoint,
        {
            method:'GET',
            
            headers:{
              "Authorization": ` Bearer ${account.token}`,
              "Content-Type":"application/json",
              "Accept":"application/json"
            }
        }).then((e) => {
            return e.text();
          }).then((text) => {                
            return JSON.parse(text);
          }).catch(function (error) {               
            console.log(error);
          });
        
          //console.log("config",result)
    return result;
  },

}
export default apiSettings
