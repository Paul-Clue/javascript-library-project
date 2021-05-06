let myLibrary = [];
class Book {
  constructor(author, title, pages) {
      this.author = author;
      this.title = title;
      this.pages = pages;
  };
}
function addBookToLibrary (form) {
  let tle = form.title.value;
  let athr = form.author.value;
  let pges = form.pages.value;
  b1 = new Book(tle, athr, pges);
  myLibrary.push(b1);
}

function displayLibrary () {
}


