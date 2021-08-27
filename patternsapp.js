// const Uictrl= (function () {
// let text='hello world';
// function changeText(){
//     let tag=document.querySelector('h1');
//     tag.textContent=text;
// }
// return{
//     change:changeText
        
//     }
// })();
// console.log(Uictrl.text)
// ****************************************************
// revealinh=g module pattern
// let rev=(function(){
// let data=[];
// function add(item){
//     data.push(item);
// }
// function get(id){
// return data.find(d=>{
//     return d.id==id
// })
// }
// return{
//     add:add,
//     get:get
// }
// })()
// rev.add({id:1,name:'john Doe'});
// rev.add({id:2,name:'emilia clarke'});
// console.log(rev.get(2))
// ********************************************************
// singelton pattern

const singel