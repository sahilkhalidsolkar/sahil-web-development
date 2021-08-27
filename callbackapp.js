posts=[
{title:"post one" ,body:'this is post one'},
{title:"post two" ,body:'this is post two'}

];
function createpost(post){
    return new Promise (function(resolve,reject){
        setTimeout(function(){
            posts.push(post);
            let e=false;
            if(e){
                reject('error aaya nikal saale');
            }
            else{
                resolve()

            }
        },2000);

    })
}
error=function(err){
    console.log(err);
}
function getpost(){
    let op='';
    setTimeout(
        
    posts.forEach(function(post){
        op+=`<li>${post.title}</li>`;
    }
    
    ),1000);
    document.body.innerHTML=op;

}
createpost({title:"post three" ,body:'this is post three'}).then(getpost).catch(error);
