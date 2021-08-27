class Book{
    constructor(title,author,isbn){
    this.title=title;
    this.author=author;
    this.isbn=isbn;
    }
}
class Ui{
    addBookToTable(book){
        const booklist=document.getElementById('book-list');
        let row=document.createElement('tr');
        row.innerHTML=`
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#"id=delete>X</a></td>
        `;
        booklist.append(row);
    }
    clearinputfields(){
        document.getElementById('title').value='';
        document.getElementById('author').value='';
        document.getElementById('isbn').value=''  ;
    }
    showmessage(msg,classname){
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
    removelist(target){
        if(target.id==='delete'){
             target.parentElement.parentElement.remove() ;
           
            }
           }    
}
class Store{
  static  getBookFromLocalStorage(){
        let books;
        if(localStorage.getItem('books')===null){
            books=[];
        }
        else{
            books=JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
 static   addBookToLocalStorage(book){
       let books= this.getBookFromLocalStorage();
        books.push(book);
        localStorage.setItem('books',JSON.stringify(books));
        
    }
   static displaybooks(e){
        let ui=new Ui();
        let books=ui.getBookFromLocalStorage();
        books.forEach(function(book){
            console.log(book);
            
        })
        e.preventDefault();
        
    }
}
document.getElementById('book-list').addEventListener('DOMContentLoaded',function(e){
    // Store.displaybooks();
    console.log('hello');
    e.preventDefault();
});

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
        Store.addBookToLocalStorage(book);
        ui.clearinputfields();

        
    }
    e.preventDefault();
})

document.getElementById('book-list').addEventListener('click',function(e){
    let ui=new Ui();
    ui.removelist(e.target);
    
    e.preventDefault();


})
// let store=new Store();

    