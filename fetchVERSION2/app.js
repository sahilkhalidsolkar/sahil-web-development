data={
    name:'sahil',
    middlename:'khalid',
    lastname:'solkar'
};
http=new Http();

// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data=>console.log(data))
//     .catch(err=>console.log(err));
// http.post('https://jsonplaceholder.typicode.com/users',data)
//     .then(data=>console.log(data))
//     .catch(err=>console.log(err))
// http.put('https://jsonplaceholder.typicode.com/users/1',data)
// .then(data=>console.log(data))
// .catch(err=>console.log(err))
http.delete('https://jsonplaceholder.typicode.com/users/1')
    .then(data=>console.log(data))
    .catch(err=>console.log(err));
