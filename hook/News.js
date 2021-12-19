
import {useState, useEffect, useCallback} from 'react';
import  News  from "../config/News";
import  Innkeeper  from "../config/Innkeeper";

export const HookNews=()=>{
    try{
        const [statusresult, setstatusresult]=useState()
        const [results, setresult]=useState();
        const[check, setcheck]=useState(false)    
        const fetchRoadmap = useCallback( async()=>{
        try{  
            const detail=await News.getNewsbydate('06/12/2021'); 
            setstatusresult(detail.statusCode)
            if(detail.statusCode==200){
                setresult(detail.data); 
                setcheck(true);
            }else{
                if(detail.statusCode==300){setresult([{
                    header:"Cho thuê nhà trọ nè",
                    image:"https://cdn.tgdd.vn/Files/2020/03/30/1245627/kinh-nghiem-tim-phong-tro-gia-re-top-xx-website-t.jpg",
                    cost:"15"
                  },
                  {
                    header:"Ở đây cho thuê nhà trọ",
                    image:"https://cdn.tgdd.vn/Files/2020/03/30/1245627/kinh-nghiem-tim-phong-tro-gia-re-top-xx-website-t.jpg",
                    cost:"16"
                  },
                  {
                    header:"Nhà trọ sạch sẽ liên hệ ngày chủ nhà!!",
                    image:"https://cdn.tgdd.vn/Files/2020/03/30/1245627/kinh-nghiem-tim-phong-tro-gia-re-top-xx-website-t.jpg",
                    cost:"16"
                  },
                ])
                setcheck(true)}
            }   
        }catch(error){
            console.log(error)
        }
    },[results])        
    
    useEffect(()=>{ 
        try{
            if((check==false)){                 
                fetchRoadmap();
            }        
            else{   
               
            }
        }catch(error){
            console.log(error)
        }
    },[check,fetchRoadmap] )
    return {results,setcheck, check,setresult,statusresult};
    }catch(error){
        console.log(error)
    }
}


export const HookGetNews=(type)=>{
    try{
    const [results, setresult]=useState();
    const[check, setcheck]=useState(false)    
    const fetchRoadmap = useCallback( async()=>{
        try{  
            const detail=await News.getNewsbytype(type);    
            setcheck(true);                 
            setresult(detail);
            
        }catch(error){
            console.log(error)
        }
       
    },[results])        
    
    useEffect(()=>{ 
        try{
            if((check==false)){                
                fetchRoadmap();
            }       
            
        }catch(error){
            console.log(error)
        }
        
    },[check,fetchRoadmap] )
    return {results,setcheck, check};

    }catch(error){
        console.log(error)
    }
    
}

export const HookImageNewsbyIdnews=(id_news)=>{
    try{
    const [results, setresult]=useState([]);
    const[check, setcheck]=useState(false)    
    const fetchRoadmap = useCallback( async()=>{
        try{ 
            const detail= await News.getimage_news_byid_news(id_news);
            if(detail!=null){
                setcheck(true)
                setresult(detail.data)
            }    
           
        }catch(error){
            console.log(error)
        }
       
    },[results])        
    
    useEffect(()=>{ 
        try{
            if((check==false)){ 
                //console.log("123")
                fetchRoadmap();
            }        
            else{   
               
            }
        }catch(error){
            console.log(error)
        }
        
    },[check,fetchRoadmap] )
    return {results,setcheck, check};

    }catch(error){
        console.log(error)
    }
    
}
export const HookGetSaveNews=()=>{
    try{
    const [savenew, setsavenew]=useState([]);
    const[checkgetsavenews, setcheckgetsavenews]=useState(false)    
    const[statusCodeSave, setStatuscodeSave]=useState()
    const fetchRoadmap = useCallback( async()=>{
        try{  
            const detail=await News.get_save_news();    
            setcheckgetsavenews(true);        
            setsavenew(detail.data); 
            setStatuscodeSave(detail.statusCode)
            //console.log(checkgetsavenews,savenew)
        }catch(error){
            console.log(error)
        }
       
    },[savenew])   
    useEffect(()=>{ 
        try{
            if((checkgetsavenews==false)){ 
                fetchRoadmap();
            }        
            else{   
               
            }
        }catch(error){
            console.log(error)
        }
        
    },[checkgetsavenews,fetchRoadmap] )
    return {savenew,setcheckgetsavenews, checkgetsavenews,statusCodeSave};

    }catch(error){
        console.log(error)
    }
    
}
export const HookGetNewsbyIdUser=(id_user)=>{
    try{
    const [listnews, setlistnews]=useState([]);
    const[checkget, setcheckget]=useState(false)    
    const fetchRoadmap = useCallback( async()=>{
        try{  
            const detail=await News.get_new_by_id_user(id_user);    
            setcheckget(true);        
            setlistnews(detail.data); 
            //console.log(detail,check) 
        }catch(error){
            console.log(error)
        }
       
    },[listnews])        
    
    useEffect(()=>{ 
        try{
            if((checkget==false)){ 
                //console.log("123")
                fetchRoadmap();
            }        
            else{   
               
            }
        }catch(error){
            console.log(error)
        }
        
    },[checkget,fetchRoadmap] )
    return {listnews,setcheckget, checkget};

    }catch(error){
        console.log(error)
    }
    
}

export const HookGetGoiY_News=({id_user, id_news})=>{
    try{
    const [listnews, setlistnews]=useState([]);
    const[checkget, setcheckget]=useState(false)    
    const fetchRoadmap = useCallback( async()=>{
        
        try{  
            const detail=await News.get_goiy_news(id_user,id_news);    
            setcheckget(true);        
            setlistnews(detail.data); 
            //console.log(detail,check) 
        }catch(error){
            console.log(error)
        }
       
    },[listnews])        
    
    useEffect(()=>{ 
        try{
            //console.log("12345",id_news)
            if((checkget==false)){ 
                //console.log("123")
                fetchRoadmap();
            }        
            else{   
                //console.log("1234",id_news, id_user, checkget)
            }
        }catch(error){
            console.log(error)
        }
        
    },[checkget,fetchRoadmap] )
    return {listnews,setcheckget, checkget};

    }catch(error){
        console.log(error)
    }
    
}

export const HookGetSche_by_id_user_id_news=(id_news)=>{
    try{
    const [status, setstatus]=useState(false)
    const [listsche, setlistsche]=useState([]);
    const[checkget, setcheckget]=useState(false)   
    const [newDaysObject, setnewDaysObject]=useState() 
    const fetchRoadmap = useCallback( async()=>{
        const list_date=[]
        const make_date={}
        try{  
            const detail=await News.getschedulebyid_user_id_news(id_news);
            console.log("123")    
            setcheckget(true); 
            console.log("status",status)
            
            for(var i=0;i<detail.data.length;i++){
            var year=new Date(detail.data[i].date_time).getFullYear()
            var month=new Date(detail.data[i].date_time).getMonth()+1
            var date=new Date(detail.data[i].date_time).getDate() 

            if(date<10){
                var datetime={date:"",
                status:""}
                datetime.date=year.toString()+"-"+month.toString()+"-0"+ date.toString()
                datetime.status=detail.data[i].state;
                //date="0"+date.toString()
            }else{
                var datetime={date:"",
                status:""}
                datetime.date=year.toString()+"-"+month.toString()+"-"+ date.toString()
                datetime.status=detail.data[i].state;
            }
            list_date.push(datetime)
            }     
            list_date.map(item=>item.status.trim()=='AWAIT'?
            make_date[item.date] = {
            selected: true,
            marked: true,
            selectedColor:'red'}:(
                setstatus(true),
                make_date[item.date] = {
                selected: true,
                marked: true,
                selectedColor:'green'}
            ));
            setlistsche(list_date); 
            setnewDaysObject(make_date)
            console.log(list_date) 
        }catch(error){
            console.log(error)
        }
       
    },[listsche])        
    
    useEffect(()=>{ 
        try{
            //console.log("12345",id_news)
            if((checkget==false)){ 
                fetchRoadmap();
            }        
            else{   
                //console.log("1234",id_news, id_user, checkget)
            }
        }catch(error){
            console.log(error)
        }
        
    },[checkget,fetchRoadmap] )
    return {listsche,setcheckget, checkget,newDaysObject,status};
    }catch(error){
        console.log(error)
    }
    
}
export const HookGetSche_by_id_user=()=>{
    try{
        //const [status,setstatus]=useState(false)
        const [listsche, setlistsche]=useState([]);
        const[checkget, setcheckget]=useState(false)   
        const [newDaysObject, setnewDaysObject]=useState() 
        const fetchRoadmap = useCallback( async()=>{
        const list_date=[]
        const make_date={}
        try{  
            //console.log("status",status)
            const detail=await News.getschedulebyid_user();    
            setcheckget(true); 
            for(var i=0;i<detail.data.length;i++){
                var year=new Date(detail.data[i].date_time).getFullYear()
                var month=new Date(detail.data[i].date_time).getMonth()+1
                var date=new Date(detail.data[i].date_time).getDate() 
                if(date<10){
                    var datetime={date:"",status:""}
                    datetime.date=year.toString()+"-"+month.toString()+"-0"+ date.toString()
                    datetime.status=detail.data[i].state;
                    //date="0"+date.toString()
                }else{
                    var datetime={date:"",status:""}
                    datetime.date=year.toString()+"-"+month.toString()+"-"+ date.toString()
                    datetime.status=detail.data[i].state;
                }
                list_date.push(datetime)
            }     
            list_date.map(item=>item.status.trim()=='AWAIT'?
                make_date[item.date] = {
                selected: true,
                marked: true,
                selectedColor:'red'}:(
                   // setstatus(true),
                    make_date[item.date] = {
                    selected: true,
                    marked: true,
                    selectedColor:'green'})
            );
            setlistsche(list_date); 
            setnewDaysObject(make_date)
            //console.log(status)
            //console.log(detail) 
        }catch(error){
            console.log(error)
        }
       
    },[listsche])        
    
    useEffect(()=>{ 
        try{
            //console.log("12345",id_news)
            if((checkget==false)){ 
                fetchRoadmap();
            }        
            else{   
                //console.log("1234",id_news, id_user, checkget)
            }
        }catch(error){
            console.log(error)
        }
        
    },[checkget,fetchRoadmap] )
    return {listsche,setcheckget, checkget,newDaysObject};
    }catch(error){
        console.log(error)
    }
    
}

export const HookGet_schedule_iduser_date=(date)=>{
    try{
    const [listnews, setlistnews]=useState([]);
    const[checkget, setcheck]=useState(false)    
    const fetchRoadmap = useCallback( async()=>{
        try{  
            console.log("date",date)
            const detail=await News.getschedulebyid_user_date(date);    
            setcheck(true);    
            if(detail!=null){
                setlistnews(detail.data);
            }else{
                setlistnews(null)
            }
             
            //console.log(detail,check) 
        }catch(error){
            console.log(error)
        }
       
    },[listnews])        
    
    useEffect(()=>{ 
        try{
            if((checkget==false)){ 
                //console.log("123")
                fetchRoadmap();
            }        
            else{   
               
            }
        }catch(error){
            console.log(error)
        }
        
    },[checkget,fetchRoadmap] )
    return {listnews,setcheck, checkget};

    }catch(error){
        console.log(error)
    }
    
}

export const HookGetSche_by_id_innkeeper=()=>{
    try{
    const [listsche, setlistsche]=useState([]);
    const[checkget, setcheckget]=useState(false)   
    const [newDaysObject, setnewDaysObject]=useState() 
    const fetchRoadmap = useCallback( async()=>{
        const list_date=[]
        const make_date={}
        try{  
            const detail=await Innkeeper.getschedulebyinnkeeper();    
            setcheckget(true); 
            for(var i=0;i<detail.data.length;i++){
                var year=new Date(detail.data[i].date_time).getFullYear()
                var month=new Date(detail.data[i].date_time).getMonth()+1
                var date=new Date(detail.data[i].date_time).getDate() 
                if(date<10){
                    var datetime={date:"",status:""}
                    datetime.date=year.toString()+"-"+month.toString()+"-0"+ date.toString()
                    datetime.status=detail.data[i].state;
                    //date="0"+date.toString()
                }else{
                    var datetime={date:"",status:""}
                    datetime.date=year.toString()+"-"+month.toString()+"-"+ date.toString()
                    datetime.status=detail.data[i].state;
                }
                list_date.push(datetime)
            }     
            list_date.map(item=>item.status.trim()=='AWAIT'?
                make_date[item.date] = {
                selected: true,
                marked: true,
                selectedColor:'red'}:make_date[item.date] = {
                    selected: true,
                    marked: true,
                    selectedColor:'green'}
            );
            setlistsche(list_date); 
            setnewDaysObject(make_date)
            //console.log(detail) 
        }catch(error){
            console.log(error)
        }
       
    },[listsche])        
    
    useEffect(()=>{ 
        try{
            //console.log("12345",id_news)
            if((checkget==false)){ 
                fetchRoadmap();
            }        
            else{   
                //console.log("1234",id_news, id_user, checkget)
            }
        }catch(error){
            console.log(error)
        }
        
    },[checkget,fetchRoadmap] )
    return {listsche,setcheckget, checkget,newDaysObject};
    }catch(error){
        console.log(error)
    }
    
}
export const SearchAll=(searchkey)=>{
    try{
    const [results, setresult]=useState([]);
    const[check, setcheck]=useState(false)  
    console.log(searchkey)  
    const fetchRoadmap = useCallback( async()=>{
        try{  
            const detail=await News.searchall(searchkey);    
            
                setcheck(true);
                   
            setresult(detail); 
            //console.log(detail,check) 
        }catch(error){
            console.log(error)
        }
       
    },[results])        
    
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
    return {results,setcheck, check};

    }catch(error){
        console.log(error)
    }
    
}
export const SearchType=(search)=>{
    try{
    const [results, setresult]=useState([]);
    const[check, setcheck]=useState(false)  
    console.log(search)  
    const fetchRoadmap = useCallback( async()=>{
        try{  
            const detail=await News.searchall(search);    
            
                setcheck(true);
                   
            setresult(detail); 
            //console.log(detail,check) 
        }catch(error){
            console.log(error)
        }
       
    },[results])        
    
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
    return {results,setcheck, check};

    }catch(error){
        console.log(error)
    }
    
}