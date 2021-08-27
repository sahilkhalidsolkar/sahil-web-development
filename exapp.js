// iterator example
// function  nameIterator(names){
// let nextIndex=0;
// return {
//     next:function(){
//         return nextIndex<names.length ? 
//         {value:names[nextIndex++] ,done:false} :
//         { done:true}

//     }
// }
// }
// let names = ['jack','jill','rose','mary'];
// let a=nameIterator(names);
// console.log(a) 
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());


// function letters(letter){
//     let index=0;
// return {
//     nextLetter:function(){
//         return letter[index++];
            
        
//     }
// }
// }
// let a='hello'
// let word = letters(a);
// i=0;
// while( i< a.length){
//     i++;
//     console.log(word.nextLetter());
// }
// GENERATORS
// function* names(){
//     yield 'jack';
//     yield 'jill';
//     yield 'rose';
// }
// let a= names();
// console.log(a.next())
// console.log(a.next())
// console.log(a.next())

function* ids(){
    let i=0;
    while(true){
        yield i++;
    }
}
let a= ids();
console.log(a.next().value);

