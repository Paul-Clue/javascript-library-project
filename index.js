let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(book) {
  if(typeof book != Book){
    book = null;
  }else{
    myLibrary.push(book);
  }
}