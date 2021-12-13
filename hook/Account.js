import {useState, useEffect, useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { acos } from 'react-native-reanimated';
import  Accounts  from "../config/Account";
export const GetAccount=()=>{
    try{
    const [account,setaccount]=useState({});
    const[check, setcheck]=useState(false)    
    const fetchRoadmap = useCallback( async()=>{
        try{             
            const account = JSON.parse(await AsyncStorage.getItem("account"))
            //console.log("dô nè")
            setaccount(account)
            setcheck(true);
            
        }catch(error){
            console.log(error)
        }       
    },[account])        
    
    useEffect(()=>{ 
        try{
            if((check==false)){ 
                console.log("123")
                fetchRoadmap();
               
            }        
            else{   
               
            }
        }catch(error){
            console.log(error)
        }
        
    },[check,fetchRoadmap] )
    return {account,setcheck, check,setaccount};

    }catch(error){
        console.log(error)
    }
    
}
export const ReloadPage=()=>{
    try{
    const [outpage,setoutpage]=useState(false);     
    const fetchRoadmap = useCallback( async()=>{
        try{             
            setoutpage(true)            
        }catch(error){
            console.log(error)
        }       
    },[])        
    
    useEffect(()=>{ 
        try{
            if((outpage==false)){ 
                console.log("123")
                fetchRoadmap();
               
            }        
            else{   
               
            }
        }catch(error){
            console.log(error)
        }
        
    },[outpage,fetchRoadmap] )
    return {outpage,setoutpage};

    }catch(error){
        console.log(error)
    }
    
}
export const GetInfoUserbyID= (id_user)=>{
    try{
        const[info,setinfo]=useState() 
        const[checkinfo,setcheckinfo]=useState(false)
        const[account, setaccount]=useState()
        const fetchRoadmap = useCallback( async()=>{
            try{  
                //console.log("123",id_user)
                const detail=await Accounts.get_infor_byid(id_user);    
                if(detail.statusCode==200){
                    //console.log('12345')
                    setcheckinfo(true)

                }        
                setinfo(detail.data)
                setaccount(JSON.parse(await AsyncStorage.getItem("account")) )
                //console.log(info,checkinfo) 
            }catch(error){
                console.log(error)
            }
       
    },[info])        
    
    useEffect(()=>{ 
        try{
            if((checkinfo==false)){ 
                //console.log("123")
                fetchRoadmap();
            }        
            else{   
               
            }
        }catch(error){
            console.log(error)
        }
        
    },[checkinfo,fetchRoadmap] )
    return {info,setcheckinfo, checkinfo,account};

    }catch(error){
        console.log(error)
    }
    
}

export const getfollower= ()=>{
    try{
        const[follow,setfollow]=useState() 
        const[checkfollow,setcheckfollow]=useState(false)        
        const fetchRoadmap = useCallback( async()=>{
            try{  
                //console.log("123",id_user)
                const detail=await Accounts.getfollower();    
                if(detail.statusCode==200){
                    //console.log('12345')
                    setcheckfollow(true)

                }        
                setfollow(detail.data)
            }catch(error){
                console.log(error)
            }
       
    },[follow])        
    
    useEffect(()=>{ 
        try{
            if((checkfollow==false)){ 
                //console.log("123")
                fetchRoadmap();
            }        
            else{   
               
            }
        }catch(error){
            console.log(error)
        }
        
    },[checkfollow,fetchRoadmap] )
    return {follow,setcheckfollow,checkfollow};

    }catch(error){
        console.log(error)
    }
    
}

export const getfollowerbyid_user= (id_user)=>{
    try{
        const[followid_user,setfollow]=useState() 
        const[checkfollowid_user,setcheckfollowid_user]=useState(false)        
        const fetchRoadmap = useCallback( async()=>{
            try{  
                //console.log("123",id_user)
                const detail=await Accounts.getfollowerbyid_user(id_user);    
                if(detail.statusCode==200){
                    //console.log('12345')
                    setcheckfollowid_user(true)

                }        
                setfollow(detail.data)
            }catch(error){
                console.log(error)
            }
       
    },[followid_user])        
    
    useEffect(()=>{ 
        try{
            if((checkfollowid_user==false)){ 
                //console.log("123")
                fetchRoadmap();
            }        
            else{   
               
            }
        }catch(error){
            console.log(error)
        }
        
    },[checkfollowid_user,fetchRoadmap] )
    return {followid_user,setcheckfollowid_user,checkfollowid_user};

    }catch(error){
        console.log(error)
    }
    
}

export const getfollowerbyid_follower= (id_user)=>{
    try{
        const[followidfollower,setfollow]=useState() 
        const[checkfollowidfollower,setcheckfollowidfollower]=useState(false)        
        const fetchRoadmap = useCallback( async()=>{
            try{  
                //console.log("123",id_user)
                const detail=await Accounts.getfollowerbyid_follower(id_user);    
                if(detail.statusCode==200){
                    //console.log('12345')
                    setcheckfollowidfollower(true)

                }        
                setfollow(detail.data)
            }catch(error){
                console.log(error)
            }
       
    },[followidfollower])        
    
    useEffect(()=>{ 
        try{
            if((checkfollowidfollower==false)){ 
                //console.log("123")
                fetchRoadmap();
            }        
            else{   
               
            }
        }catch(error){
            console.log(error)
        }
        
    },[checkfollowidfollower,fetchRoadmap] )
    return {followidfollower,setcheckfollowidfollower,checkfollowidfollower};

    }catch(error){
        console.log(error)
    }
    
}

export const get_follower_id_user_id_follower= (id_follower)=>{
    try{
        const[followid_follower,setfollow]=useState() 
        const[checkfollowid_follower,setcheckfollowid_follower]=useState(false)    
        const [check_follow,setcheck_follow]=useState(false)    
        const fetchRoadmap = useCallback( async()=>{
            try{  
                //console.log("123",id_user)
                const detail=await Accounts.get_follower_id_user_id_follower(id_follower);    
                if(detail.statusCode==200){
                    //console.log('12345')
                    setcheckfollowid_follower(true)
                   

                }     
                if(detail.data.length!=0){
                    setcheck_follow(true)
                }else{
                    setcheck_follow(false)
                }
                setfollow(detail.data)
            }catch(error){
                console.log(error)
            }
       
    },[followid_follower])        
    
    useEffect(()=>{ 
        try{
            if((checkfollowid_follower==false)){ 
                //console.log("123")
                fetchRoadmap();
            }        
            else{   
               
            }
        }catch(error){
            console.log(error)
        }
        
    },[checkfollowid_follower,fetchRoadmap] )
    return {followid_follower,setcheckfollowid_follower,checkfollowid_follower,check_follow};

    }catch(error){
        console.log(error)
    }
    
}
export const getfollowerofme= ()=>{
    try{
        const[follow,setfollow]=useState() 
        const[checkfollow,setcheckfollow]=useState(false)        
        const fetchRoadmap = useCallback( async()=>{
            try{  
                //console.log("123",id_user)
                const detail=await Accounts.getfollowerofme();    
                if(detail.statusCode==200){
                    //console.log('12345')
                    setcheckfollow(true)

                }        
                setfollow(detail.data)
            }catch(error){
                console.log(error)
            }
       
    },[follow])        
    
    useEffect(()=>{ 
        try{
            if((checkfollow==false)){ 
                //console.log("123")
                fetchRoadmap();
            }        
            else{   
               
            }
        }catch(error){
            console.log(error)
        }
        
    },[checkfollow,fetchRoadmap] )
    return {follow,setcheckfollow,checkfollow};

    }catch(error){
        console.log(error)
    }
    
}


