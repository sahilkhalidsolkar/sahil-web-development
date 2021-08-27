document.getElementById('btn').addEventListener('click',loaddata);
function loaddata(e){
    const xhr=new XMLHttpRequest();
    xhr.open('GET','data.json',true);
    xhr.onload=function(){
        if(this.status===200){
           const datafile=JSON.parse(this.responseText);
           console.log(datafile);
           let op='';
            //  let op;
           datafile.forEach(function(d){
            console.log(d.name,d.roll_no,d.college);
            op +=` <ul>
            <li>name : ${d.name}</li>
            <li>rollno : ${d.roll_no}</li>
            <li>college : ${d.college}</li>
            </ul>
            `;
            
            setTimeout(function(){document.getElementById('data').innerHTML=op},1000);
            })

        }

    }
    xhr.send()
e.preventDefault();
}