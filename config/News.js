import { API_URL, News } from "./config";
import AsyncStorage from '@react-native-async-storage/async-storage';
const apiSettings = {
    getNewsbydate: async (dateget) => {
        //console.log(JSON.stringify({date:dateget}))        
        const endpoint = `${API_URL}${News}new_News?page=1&value=8`;
        //console.log(endpoint)
        const result = await fetch(endpoint,
            {
                method:'POST',
                body: JSON.stringify({date:dateget}),
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json"
                }
            }).then((e) => {
                return e.text();
              }).then((text) => {                
                return JSON.parse(text);
              }).catch(function (error) { 
                return {statusCode:300}             
                //console.log(error);
              });
        //console.log(result)
        return result;     
    },
    getNewsbytype: async (type) => {          
      const endpoint = `${API_URL}${News}get_new_by_type?page=1&value=8`;      
      const result = await fetch(endpoint,
          {
              method:'POST',
              body: JSON.stringify({type:type}),
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
  getimage_news_byid_news: async (id_news) => {       
    const endpoint = `${API_URL}${News}get_imagenewsbyidnews`;
    const result = await fetch(endpoint,
        {
            method:'POST',
            body: JSON.stringify({id_news:id_news}),
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
  get_save_news: async () => {  
    const account = JSON.parse(await AsyncStorage.getItem("account"))     
    const endpoint = `${API_URL}${News}getsavenews`;   
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
    return result;
  },
  save_news: async (id_news) => {  
    const account = JSON.parse(await AsyncStorage.getItem("account"))
    if(account==null){
      return {
        statusCode:401,
        message:"Bạn chưa đăng nhập"
      }
    } 
    const endpoint = `${API_URL}${News}save_news`;
    console.log(endpoint)
    const result = await fetch(endpoint,
        {
            method:'POST',   
            body:JSON.stringify({id_news:id_news}),        
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
  un_save_news: async (id_news) => {  
    const account = JSON.parse(await AsyncStorage.getItem("account")) 
    //console.log("account" ,account)     
    const endpoint = `${API_URL}${News}delete_save_news`;
    console.log(endpoint)
    const result = await fetch(endpoint,
        {
            method:'POST',   
            body:JSON.stringify({id_news:id_news}),        
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
  get_new_by_id_user: async (id_user) => {  
    //const account = JSON.parse(await AsyncStorage.getItem("account")) 
    //console.log("account" ,account)     
    const endpoint = `${API_URL}${News}get_new_by_id_user?page=1&value=8`;
    //console.log(endpoint)
    const result = await fetch(endpoint,
        {
            method:'POST',
            body:JSON.stringify({id_user}),           
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
    //console.log(result)
   
    return result;
  },
  get_goiy_news: async (id_user,id_news) => {     
    const endpoint = `${API_URL}${News}get_goiy_news`;
    //console.log(endpoint)
    const result = await fetch(endpoint,
        {
            method:'POST',
            body:JSON.stringify({id_user,id_news}),           
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
    //console.log(result)
   
    return result;
  },
  create_schedule: async (schedule) => {  
    const account = JSON.parse(await AsyncStorage.getItem("account"))    
    const endpoint = `${API_URL}${News}create_schedule`;    
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
  getschedulebyid_user: async () => {  
    const account = JSON.parse(await AsyncStorage.getItem("account"))    
    const endpoint = `${API_URL}${News}getschedulebyidusers`;    
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
    //console.log(result)
   
    return result;
  },
  getschedulebyinnkeeper: async () => {  
    const account = JSON.parse(await AsyncStorage.getItem("account"))    
    const endpoint = `${API_URL}${News}getschedulebyidusers`;    
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
  getschedulebyinnkeeper: async (id_schedule) => {  
    const account = JSON.parse(await AsyncStorage.getItem("account"))    
    const endpoint = `${API_URL}${News}accept_schedule_innkeeper`;    
    const result = await fetch(endpoint,
        {
            method:'POST',
            body:JSON.stringify({id_schedule}),  
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
  deleteschedule: async (id_schedule) => {  
    const account = JSON.parse(await AsyncStorage.getItem("account"))    
    const endpoint = `${API_URL}${News}deleteschedule_innkeeper`;    
    const result = await fetch(endpoint,
        {
            method:'POST',
            body:JSON.stringify({id_schedule}),  
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
  delete_schedule_byid_news_id_user_date: async (schedule) => {  
    const account = JSON.parse(await AsyncStorage.getItem("account"))    
    console.log(JSON.stringify({schedule}))
    const endpoint = `${API_URL}${News}delete_schedule_byid_news_id_user_date`;    
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
  getschedulebyid_user_id_news: async (id_news) => {  
    const account = JSON.parse(await AsyncStorage.getItem("account"))    
    const endpoint = `${API_URL}${News}getschedule_byid_news_id_user`; 
    //console.log(JSON.stringify({id_news}))   
    const result = await fetch(endpoint,
        {
            method:'POST',
            body:JSON.stringify(id_news),  
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
  getschedulebyid_user: async (id_news) => {  
    const account = JSON.parse(await AsyncStorage.getItem("account"))    
    const endpoint = `${API_URL}${News}getschedulebyidusers`; 
    //console.log(JSON.stringify({id_news}))   
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
    //console.log(result)
   
    return result;
  },
  getschedulebyid_user_date: async (date) => {  
    const account = JSON.parse(await AsyncStorage.getItem("account"))    
    const endpoint = `${API_URL}${News}getschedule_byid_user_date`; 
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
  searchall: async (search_key) => {  
    // const account = JSON.parse(await AsyncStorage.getItem("account"))    
    const endpoint = `${API_URL}${News}search_News?page=1&value=8`; 
    console.log(endpoint)   
    const result = await fetch(endpoint,
        {
            method:'POST',
            body: JSON.stringify({search_key}),
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
    //console.log(result)
   
    return result;
  },
  searchtype: async (search) => {  
    // const account = JSON.parse(await AsyncStorage.getItem("account"))    
    const endpoint = `${API_URL}${News}search_News_Types?page=1&value=8`; 
    console.log(endpoint)   
    const result = await fetch(endpoint,
        {
            method:'POST',
            body: JSON.stringify(search),
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
    //console.log(result)
   
    return result;
  },
  create_new: async (news) => {
    //console.log(account)   
    const account = JSON.parse(await AsyncStorage.getItem("account"))         
    const endpoint = `${API_URL}${News}createNews`;
    console.log(endpoint)
    const result = await fetch(endpoint,
        {
            method:'POST',
            body: news,
            headers:{
                "Authorization": ` Bearer ${account.token}`,
                "content-type": "multipart/form-data",
                "Accept":"application/json"
            }
        }).then((e) => {
            return e.text();
          }).then((text) => {  
            console.log(text)              
            return JSON.parse(text);
          }).catch(function (error) {               
            console.log(error);
          });
        
    return result;
},
}


export default apiSettings
