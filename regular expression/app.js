// console.log(re);
// console.log(re.source);
// const result= re.exec(' sajol hello wold in world');
// console.log(result)
// const result = re.test('HeLlo');
// console.log(result);
// const str="Hello whoe are you";
//  const result = str.search(re);;
// console.log(result)
// const str = 'hello there';
// const newStr=str.replace(re,"hiiiiii");
// console.log(newStr)
let re ,str;
re=/hello/;
re=/^h/i;//starts with
re=/u$/i;//Ends with
re=/^hello$/;//start and Ends with
re=/he.lo/;//matches any one character in place of dot
re= /h*elo/i;//matches 0 or more characters
re=/her?l?lo\?/;//matches optional
re=/he[rl]lo/i;
re=/^[a-zA-Z0-9]llo/;
// {} qualifiers
re=/hel{2,}o/;
// () grouping
re=/^([0-9]x){3}$/;
re=/hell\b/;
re=/x(?!y)/;
str='yxaddxy';
const result= re.exec(str);
console.log(result);
function reTest(re,str){
const result=re.test(str);
if(result){
    console.log(`${str} matches ${re.source}`);
}
else{
    console.log(`${str} does not match ${re.source}`);
}
}
reTest(re,str);