
let input=document.querySelector('#taskinput');
let taskadd=document.querySelector('#taskinputbutton');
let clearallbutton=document.querySelector('#clearall');
let par=document.querySelector("ul");
document.addEventListener('DOMContentLoaded',function(e){
    let tasks;
    if (localStorage.getItem('tasks')===null) {
        tasks=[];
    } else {
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
        let list=document.createElement('li');
    list.className="items";
    list.append(document.createTextNode(task));
    let removebutton=document.createElement('input');
    removebutton.type='button';
    removebutton.value='remove';
    list.appendChild(removebutton);
    par.appendChild(list);
    })
    
})
taskadd.addEventListener('click',function(e){
    if(input.value===''){
        alert('add task first');
    }
    let list=document.createElement('li');
    list.className="items";
    list.append(document.createTextNode(input.value));
    let removebutton=document.createElement('input');
    removebutton.type='button';
    removebutton.value='remove';
    list.appendChild(removebutton);
    par.appendChild(list);
    let tasks;
    if (localStorage.getItem('tasks')===null) {
        tasks=[];
    } else {
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(input.value);
    localStorage.setItem('tasks',JSON.stringify(tasks));
    input.value='';
    e.preventDefault();
})
par.addEventListener('click',function(e){
if(e.target.parentElement.className==='items'){
    if(confirm('are you sure you want to delete this one item')){
        let localstorageremoveelement=e.target.parentElement;
        e.target.parentElement.remove();
        console.log(localstorageremoveelement.textContent);
        let tasks;
        if (localStorage.getItem('tasks')===null) {
            tasks=[];
        } else {
            tasks=JSON.parse(localStorage.getItem('tasks'));
        }
        tasks.forEach(function(task,index){
            if(e.target.parentElement.textContent===task){
                tasks.splice(index,1);
            }
        })
        localStorage.setItem('tasks',JSON.stringify(tasks));
        
    }
   
}
e.preventDefault();
})
clearallbutton.addEventListener('click',function(e){
    if(par.firstChild===null){
        alert('add task first');
    }
    while(par.firstChild)(
        par.firstChild.remove()
    )
    // par.innerHTML="";
    localStorage.removeItem('tasks');
    e.preventDefault();
})
// localStorage.setItem('sahil','din haio');
// console.log(list);
