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
  for (let i = 0; i < myLibrary.length; i++) {
    // document.getElementById("book-title").innerText += ;
    // document.getElementById("book-author").innerText += ;
    // document.getElementById("book-pages").innerText += ;

    const container1 = document.querySelector('#cards-section');
    const br = document.createElement('br');

    const container2 = document.querySelector('#cards');

    const div = document.createElement('div');
    div.classList.add('card-body');

    const inDiv1 = document.createElement('h5');
    inDiv1.innerText = "Test";
    inDiv1.classList.add('card-title');

    const inDiv2 = document.createElement('h6');
    inDiv2.innerText = "Test two";
    inDiv2.classList.add('card-subtitle');
    inDiv2.classList.add('mb-2');
    inDiv2.classList.add('text-muted');

    const inDiv3 = document.createElement('p');
    inDiv3.innerText = "Test three";
    inDiv3.classList.add('card-text');

    div.appendChild(inDiv1);
    div.appendChild(inDiv2);
    div.appendChild(inDiv3);

    container2.appendChild(div);
    
    container1.appendChild(container2);
    
  }
}

displayLibrary();
