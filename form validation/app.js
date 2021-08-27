document.getElementById('email').addEventListener('blur',invalidemail);
document.getElementById('number').addEventListener('blur',invalidnumber);
function invalidemail(e){
    const email=document.getElementById('email');
    const re=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(!re.test(email.value)){
      email.classList.add('is-invalid')  ;

    }
    else{
        email.classList.remove('is-invalid')  ;
    }
    e.preventDefault();
}
function invalidnumber(){
    const number=document.getElementById('number');
    const re=/^([0-9]{5})([\- ]?)([0-9]{6})$/;
    if(!re.test(number.value)){
    number.classList.add('is-invalid')  ;

    }
    else{
        number.classList.remove('is-invalid')  ;
    }
    e.preventDefault();
}