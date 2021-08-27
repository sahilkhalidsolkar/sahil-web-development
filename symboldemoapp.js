const s1 = Symbol();
const s2 =Symbol('s2');
// console.log(`${String(s2)}`)

const KEY1=Symbol();
const KEY2= Symbol('key2');
const key3=Symbol('3');
const key4= Symbol('key4');
const obj1={};
obj1[KEY1]='prop1';
obj1[KEY2]='prop2';
// console.log(obj1[KEY1]);
// console.log(obj2[KEY2]);
obj1[key3]='prop3';
obj1.key4='prop4';
for( let i in obj1){
console.log(`${i}:${obj1[i]}`)
}