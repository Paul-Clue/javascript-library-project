let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary (form) {
  let tle = form.title.value;
  let athr = form.author.value;
  let pges = form.pages.value;
  b1 = new Book(tle, athr, pges);
  myLibrary.push(b1);

  if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem(myLibrary, JSON.stringify(myLibrary));

    // Retrieve
    let lib = JSON.parse(localStorage.getItem("names"));
    document.getElementById("show").innerHTML = localStorage.getItem(lib);
  } else {
    document.getElementById("show").innerHTML = "Sorry, your browser does not support Web Storage...";
  }
  
  
}
console.log(myLibrary.length);
// var names = [];
// names[0] = prompt("New member name?");
// localStorage.setItem("names", JSON.stringify(names));
// var storedNames = JSON.parse(localStorage.getItem("names"));



