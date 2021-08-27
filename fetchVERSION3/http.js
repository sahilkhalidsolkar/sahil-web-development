class Http{
    //get request
   async get(url){
      let res=await fetch(url);
      let data= await res.json();
        return data;
        }
    
     //POST request
   async post(url,data) {
        
           let res=await fetch(url,{
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify(data)
            })
            let dat=await res.json();
            return dat;

       
    }
    //put request
   async put(url,data) {
        
           let res=await fetch(url,{
                method:'PUT',
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify(data)
            })
            let dat=await res.json();
            return dat;

        
    }
    // delete request
    async delete(url){
      
         let res= await fetch(url,{
                method:'DELETE',
                headers:{
                    'Content-type':'application/json',
                },
                                 
            })
            
            let dat=await res.json();
            return dat;
        
    }

}