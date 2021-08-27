let weather= new Weather();
let ui = new Ui();

document.addEventListener('DOMContentLoaded',display);
function display(){
     let localstoragevalue= localStorage.getItem('city');
     weather.gettemp(localstoragevalue)
    .then(res=>{
        ui.showdetails(res);
        console.log(res)
    })
    .catch(err=>console.log(err));
}




document.getElementById('w-change-btn').addEventListener('click',addstorage);
    
function addstorage(){
    let city_value= ui.getCity();
    // console.log(city_value);
    localStorage.setItem('city',city_value);
    display();
}

// weather.gettemp(ui.getCity())
//     .then(res=>{
//         ui.showdetails(res);
//         console.log(res)
//     })
//     .catch(err=>console.log(err));