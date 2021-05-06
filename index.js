let myLibrary = [];
if(localStorage.getItem('myLibrary') === null){
  localStorage.setItem('myLibrary', JSON.stringify([]));
}else{
  myLibrary = JSON.parse(localStorage.getItem('myLibrary'))
}
class Book {
  constructor(title, author, pages) {
      this.title = title;
      this.author = author;
      this.pages = pages;
  };
}
function addBookToLibrary (form) {
  let tle = form.title.value;
  let athr = form.author.value;
  let pges = form.pages.value;
  if(tle != "" && athr != "" && pges != ""){

    b1 = new Book(tle, athr, pges);
    myLibrary.push(b1);

    if (typeof(Storage) !== "undefined") {
      // Store
      localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
      
      // Retrieve
      lib = JSON.parse(localStorage.getItem("myLibrary"));
      document.getElementById("show").innerHTML = lib;
    } else {
      document.getElementById("show").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
    
    form.title.value = '';
    form.author.value = '';
    form.pages.value = '';
  }
}

console.log(myLibrary);
function displayLibrary () {
  for (i = 0; i < myLibrary.length; i++) {
    // document.getElementById("book-title").innerText += ;
    // document.getElementById("book-author").innerText += ;
    // document.getElementById("book-pages").innerText += ;

    document.getElementById("innercard").appendChild(`
      <h5 class="card-title">${myLibrary[i].title}</h5>
      <h6 class='card-subtitle mb-2 text-muted'>${myLibrary[i].author}</h6>
      <p class='card-text' id='book-pages'>${myLibrary[i].pages}</p>
    `);
  }
}

displayLibrary()
