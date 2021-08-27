function Book(title,author,isbn){
this.title=title;
this.author=author;
this.isbn=isbn;
}
function Ui(){}
Ui.prototype.addBookToTable=function(book){
    const booklist=document.getElementById('book-list');
    let row=document.createElement('tr');
    row.innerHTML=`
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#"id=delete>X</a></td>
    `
    booklist.append(row);
}
Ui.prototype.clearinputfields=function(){
    title=document.getElementById('title').value='';
    author=document.getElementById('author').value='';
    isbn=document.getElementById('isbn').value=''  ;
}
Ui.prototype.showmessage=function(msg,classname){
const div=document.createElement('div');
div.className=`alert ${classname}`;
div.append(document.createTextNode(`${msg}`));
let p=document.querySelector('.container');
let afterchild=document.querySelector('#book-form');
p.insertBefore(div,afterchild);
setTimeout(function(){
    div.remove();
},1300);
}
Ui.prototype.removelist=function(target){
 if(target.id==='delete'){
    target.parentElement.parentElement.remove() ;

 }
}
// function Store(){

// }
// Store.prototype.getfromstorage=function(){
//     let books;
//     if(localStorage.getitem('books')===null){
//         books=[];

//     }
//     else{
//         books=JSON.parse(localStorage.getItem('books'));
//     }
// }
// Store.prototype.addtostorage=function(book){
//     this.getfromstorage();
//     books.push(book);
//     localStorage.setItem('books',JSON.stringify(books));
// }

document.getElementById('book-form').addEventListener('submit',function(e){
    let title=document.getElementById('title').value,
        author=document.getElementById('author').value,
        isbn=document.getElementById('isbn').value;
    let book=new Book(title,author,isbn);
    let ui=new Ui();
    // let store=new Store();
    if(title===''||author===''||isbn===''){
        ui.showmessage('Please enter valid details','error');
    }
    else{
        ui.addBookToTable(book);
        
        ui.showmessage('Book successfully entered into table','success')
        ui.clearinputfields();

    }



    e.preventDefault();
})
document.getElementById('book-list').addEventListener('click',function(e){
    let ui=new Ui();
    ui.removelist(e.target);
    e.preventDefault();


})