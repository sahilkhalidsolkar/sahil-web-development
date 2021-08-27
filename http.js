function HTTP(){
     this.xhr= new XMLHttpRequest();
}
// HTTP.prototype.get = function(url,callback) {
//     this.xhr.open('GET',url,true);
//     let self=this.xhr;
//     this.xhr.onload=function(){
//         if(self.status===200){
            
//             let x=self.responseText;
//             callback(null,x);

//         }
//         else{
//             callback(`Error ${self.status}`,null)
//         }
//     }
//     this.xhr.send();
// }
//post request
HTTP.prototype.post=function(url,data,callback){
this.xhr.open('POST',url,true);
this.xhr.setRequestHeader('Content-type','application/json');
let self=this.xhr;
this.xhr.onload=function(){

callback(null,self.responseText);
}
this.xhr.send(JSON.stringify(data));

}
//put request
HTTP.prototype.put=function(url,data,callback){
this.xhr.open('PUT',url,true);
this.xhr.setRequestHeader('Content-type','application/json');
let self=this.xhr;
this.xhr.onload=function(){
    callback(null,self.responseText);
}
this.xhr.send(JSON.stringify(data));
}
//delete request
HTTP.prototype.delete=function(url,callback){
    this.xhr.open('DELETE',url,true);
    // this.setRequestHeader('Content-type','application/json');
    let self=this.xhr;
    this.xhr.onload=function(){
        if(self.status===200){
            callback(null,self.responseText);

        }
        else{
            callback(`error ${self.status}`);
        }

    }
    this.xhr.send();
}