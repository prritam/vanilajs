class Book {//class book 
    constructor(title,author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }

}
//UI class
class UI{
    static displayBooks(){
    const StoredBooks=[{
    title :'Book One',
    author:'John doe',
    isbn:'3456728'
},
{
    title:'Book Two',
    author:'Jane Doe',
    isbn:'1234567'
}];
const books = StoredBooks;
 books.forEach((book)=>UI.addBookList(book));
    
}
  static addBookList(book){
    const list =document.querySelector('#book-list');

    const row =document.createElement('tr');

    row.innerHTML=`<td>${book.title}</td>
    <td>${book.title}</td>
    <td>${book.title}</td>
    <td><a href="#" class ="btn btn-danger btn-sm delete">X</a></td>
    `;

    list.appendChild(row);

  }

}

document.addEventListener('DOMContentLoaded',UI.displayBooks);