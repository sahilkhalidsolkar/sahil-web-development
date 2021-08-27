

let card=document.querySelector('.card');
let heading=document.querySelector('.heading');
document.querySelector('.results').style.display='none';
document.querySelector('#loading').style.display='none';
document.getElementById('buttonkaid').addEventListener('click',showresult);
function showresult(e){
    document.querySelector('.results').style.display='none';
    document.querySelector('#loading').style.display='block';
    setTimeout(buttondabaya,1000);
    e.preventDefault();
    
}

function buttondabaya(){
    
let amount=document.getElementById('amount');
let interest=document.getElementById('interest');
let years=document.getElementById('years');
let monthlypayment=document.getElementById('monthlypayment');
let totalpayment=document.getElementById('totalpayment');
let totalinterest=document.getElementById('totalinterest');
let principal=parseFloat(amount.value);
let calculatedinterest=parseFloat(interest.value)/100/12;
let calculatedpayments=parseFloat(years.value)*12;
let x=Math.pow(1+calculatedinterest,calculatedpayments);
let monthly=(principal*x*calculatedinterest)/(x-1);
if(isFinite(monthly)){
monthlypayment.value=monthly.toFixed();
totalpayment.value=(monthly*calculatedpayments).toFixed(2);
totalinterest.value=((monthly*calculatedpayments)-principal).toFixed(2);
document.querySelector('#loading').style.display='none';
document.querySelector('.results').style.display='block';
}
else{
alertdikhayenga('please enter valid details');
document.querySelector('#loading').style.display='none';
}
}

function alertdikhayenga(msg){
    let alertmsg=document.createElement('div');
    alertmsg.className='alert alert-danger';
    alertmsg.append(document.createTextNode(msg));
    card.insertBefore(alertmsg,heading);
    setTimeout(function(){alertmsg.remove()},1000);
    // console.log(alertmsg);
}
