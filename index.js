let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

// function addBookToLibrary(book) {
//   if(typeof book != Book){
//     book = null;
//   }else{
//     myLibrary.push(book);
//   }
// }

function addBookToLibraryinList (form) {
  let tle = form.title.value;
  let athr = form.author.value;
  let pges = form.pages.value;
  console.log(tle, athr, pges);
  alert(new Book(tle, athr, pges));

  // addBookToLibrary(
  // myLibrary.push(new Book(tle, athr, pges));
  // console.log(myLibrary);

}
// [[t , a, p]]
