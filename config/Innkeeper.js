import { API_URL, Innkeeper } from "./config";
import AsyncStorage from '@react-native-async-storage/async-storage';
const apiSettings = {
  getschedulebyinnkeeper: async () => {  
    const account = JSON.parse(await AsyncStorage.getItem("account"))    
    const endpoint = `${API_URL}${Innkeeper}getschedulebyidinnkeeper`;    
    const result = await fetch(endpoint,
        {
            method:'POST',
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
    //console.log(result)
   
    return result;
  },
  acceptschedulebyinnkeeper: async (id_schedule) => {  
    console.log(JSON.stringify(id_schedule))
    const account = JSON.parse(await AsyncStorage.getItem("account"))    
    const endpoint = `${API_URL}${Innkeeper}accept_schedule_innkeeper`;    
    const result = await fetch(endpoint,
        {
            method:'POST',
            body:JSON.stringify(id_schedule),  
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
    //console.log(result)
   
    return result;
  },
  getschedulebyid_innkeeper_date: async (date) => {  
    const account = JSON.parse(await AsyncStorage.getItem("account"))    
    const endpoint = `${API_URL}${Innkeeper}getscheduleby_idinnkeeper`; 
    console.log(JSON.stringify((date)))   
    const result = await fetch(endpoint,
        {
            method:'POST',
            body:JSON.stringify(date),
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
            return null
          });
    //console.log(result)
   
    return result;
  },
  delete_schedule_byid_news_id_inn_await: async (schedule) => {  
    const account = JSON.parse(await AsyncStorage.getItem("account"))    
    //console.log(JSON.stringify(schedule))
    const endpoint = `${API_URL}${Innkeeper}delete_schedule_id_inn_iduser_await`;    
    const result = await fetch(endpoint,
        {
            method:'POST',
            body:JSON.stringify(schedule),  
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
    //console.log(result)
   
    return result;
  },
}



export default apiSettings
