fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json()
)
.then(data=>{
   data.forEach(function(d){
       console.log(d.id);
   })
// console.log(data.title)

})

;

