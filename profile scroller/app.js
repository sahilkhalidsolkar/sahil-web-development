let data=[
    {
        name:'john doe',
        age:32,
        image:'https://randomuser.me/api/portraits/men/1.jpg',
        reference: 'looking for women',
        gender:'men',
    },
    {
        name:'Diana',
        age:42,
        image:'https://randomuser.me/api/portraits/women/34.jpg',
        reference: 'looking for men',
        gender:'women',
    },
    {
        name:'rock johnson',
        age:45,
        image:'https://randomuser.me/api/portraits/men/14.jpg',
        reference: 'looking for women',
        gender:'men',
    }

];

function getData(data){
let index=0;
return{
    next:function(){
        return index < data.length ?
        {value:data[index++],done:false}:
        {done:true}
    }
}
}
let profiles = getData(data);
displayProfile();
document.getElementById('next').addEventListener('click',displayProfile);

function displayProfile(){
    let data= profiles.next().value ;
    if(data==undefined){
        window.location.reload();
    }
    else{
        
        document.getElementById('profile').innerHTML=`
        <img src="${data.image}"/>
        <ul class="list-group  list-group-flush">
  <li class="list-group-item">${data.name}</li>
  <li class="list-group-item">${data.age}</li>
  <li class="list-group-item">${data.gender}</li>
  <li class="list-group-item">${data.reference}</li>
 
</ul>
        `

    }
        

    
  
      

    

}
