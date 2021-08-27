async function getres(){
    let res=await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    let data=await res.json();
    return data;
}
//  getres()
// .then(res=>{
//     console.log(res.bpi)
// })
// .catch(err=>console.log(err))
document.querySelector('#usd').addEventListener('click',()=>{
   getres()
.then(res=>{
    let usd=res.bpi.USD;
    document.querySelector('.content ').innerHTML=`
    <ul class="list-group list-group-flush">
    <li class="list-group-item">RATE : ${usd.rate}</li>
    <li class="list-group-item">DESCRIPTION : ${usd.description}</li>
    <li class="list-group-item">SYMBOL : ${usd.symbol}</li>
    </ul>
    `
    
})
.catch(err=>console.log(err))  
})
document.querySelector('#eur').addEventListener('click',()=>{
   getres()
.then(res=>{
    let eur=res.bpi.EUR;
    document.querySelector('.content ').innerHTML=`
    <ul class="list-group list-group-flush">
    <li class="list-group-item">RATE : ${eur.rate}</li>
    <li class="list-group-item">DESCRIPTION : ${eur.description}</li>
    <li class="list-group-item">SYMBOL : ${eur.symbol}</li>
    </ul>
    `
    
})
.catch(err=>console.log(err))  
})
document.querySelector('#gbp').addEventListener('click',()=>{
   getres()
.then(res=>{
    let gbp=res.bpi.GBP;
    document.querySelector('.content ').innerHTML=`
    <ul class="list-group list-group-flush">
    <li class="list-group-item">RATE : ${gbp.rate}</li>
    <li class="list-group-item">DESCRIPTION : ${gbp.description}</li>
    <li class="list-group-item">SYMBOL : ${gbp.symbol}</li>
    </ul>
    `
    
})
.catch(err=>console.log(err))  
})
