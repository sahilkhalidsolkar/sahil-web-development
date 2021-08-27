// function a() {return ['jack','jill','rose','mary']};
// const [p1,p2,p3,p4]=a();
// console.log()
// const person={
//     name:'john doe',
//     age:32,
//     city:'london',
//     gender:'male',
//     hello:function(){
//         return'hello kaisa hai tu be';
//     }
// }
// const {name,age,city,hello}=person;
// console.log(hello())
// ****************************************************************

// // maps
// const map = new Map();
// let key1='pehli', key2='dusri', key3='tesri';

// map.set(key1,'value of key 1');
// map.set(key2,'value of key 2');
// map.set(key3,'value of key 3');
// // console.log(map.get(key1),map.get(key2),map.get(key2));
// // for(let [key,value] of map){
// // console.log(`${key} : ${value}`)
// // }
// Array.from( map).forEach(function(key){
//     console.log(`${key}`);
// });

// *************************************************************

const sets = new Set([1,'hello',true,1,10,{name:'john doe'}]);
// sets.add(1);
// sets.add('hello');
// sets.add(true);
// sets.add(1);
// console.log(sets.has(5+5));
// console.log(sets.has({name:'john doe'}));
// sets.delete('');
// console.log(sets.keys())
// for(let item of sets){
//     console.log(item)
// }
let value = Array.from(sets);
    console.log(value);


