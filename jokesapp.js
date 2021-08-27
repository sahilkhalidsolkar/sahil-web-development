document.getElementById('getjokes').addEventListener('click',jokes);
function jokes(e){
    numberofjokes=document.querySelector('.noofjokes').value;
    xhr=new XMLHttpRequest();
    xhr.open('GET',`http://api.icndb.com/jokes/random/${numberofjokes}`,true);
    xhr.onload=function(){
        if(this.status===200){
            // console.log(this.responseText);
           let response=JSON.parse(this.responseText);
           let op="";
           if(response.type==='success'){
               response.value.forEach(function(joke){
                  op+=`<li>${joke.joke}</li>`

                   
               })
               document.querySelector('.displayjokes').innerHTML=op;
           }
           else{
            document.querySelector('.displayjokes').innerHTML=`<h3>ERROR</h3>`;
        }
        }
    }
    xhr.send();
    // console.log(numberofjokes);
    e.preventDefault();

}
