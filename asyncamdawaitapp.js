//  async function sahil(){
//   let p= new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//            resolve('hello');
          
//        },2000);
//    })
//    let err=true;
//    if(!err){
//        let result = await p;
//        return result;

//    }
//    else{
//        let e = await Promise.reject('error aaya ');
//         return e;
//    }

// }
// sahil()
// .then(res=>console.log(res))
// .catch(err=>console.log(err))
async function sahil(url){
    let res=await fetch(url);
    let data= await res.json();
    return data
}
sahil('https://jsonplaceholder.typicode.com/users').then(dat=>console.log(dat))
getid=(data)=>{
data.forEach((dat)=>console.log(dat.name))
}