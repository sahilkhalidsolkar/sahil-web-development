let http= new HTTP();
// http.get('',
// function(err,response){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(response);

//     }
// });
//post method
const data={
    title:"mera daata hai suna na sale"
};

// http.post(,data,
//     function(err,post){
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log(post);
    
//         }
//     })
// http.put('https://jsonplaceholder.typicode.com/posts/1',data,function(err,response){
//     if(err){
//         console.log(err);

//     }
//     else{
//         console.log(response);
//     }
// })
// delete request
http.delete('https://jsonplaceholder.typicode.com/posts/1',function(err,response){
    if(err){
        console.log(err);
    }
    else{
        console.log('delete hua');
    }
})

