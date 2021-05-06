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
    const container1 = document.querySelector('#cards-section');

    const container2 = document.createElement('div');
    container2.classList.add('card');
    container2.classList.add('border');
    container2.classList.add('border-info');
    container2.classList.add('border-4');
    container2.classList.add('d-inline-block');
    
    const div = document.createElement('div');
    div.classList.add('card-body');

    const inDiv1 = document.createElement('h5');
    inDiv1.innerText = myLibrary[i].title;
    inDiv1.classList.add('card-title');

    const inDiv2 = document.createElement('h6');
    inDiv2.innerText = myLibrary[i].author;
    inDiv2.classList.add('card-subtitle');
    inDiv2.classList.add('mb-2');
    inDiv2.classList.add('text-muted');

    const inDiv3 = document.createElement('p');
    inDiv3.innerText = myLibrary[i].pages;
    inDiv3.classList.add('card-text');

    const inDiv4 = document.createElement('button');
    inDiv4.innerText = 'Delete Book';
    inDiv4.classList.add('delete-book'+i);
    inDiv4.classList.add('btn');
    inDiv4.classList.add('btn-primary');
    inDiv4.addEventListener("click", deleteBook(i));

    div.appendChild(inDiv1);
    div.appendChild(inDiv2);
    div.appendChild(inDiv3);
    div.appendChild(inDiv4);

    container2.appendChild(div);
    container2.classList.add('card-width');
    document.body.appendChild(container2);
  }
}

function deleteBook(index) {
  alert(index);
}

const form1 = document.querySelector(".book-add-form");
const f1 = document.querySelector(".f1");


function showForm(){
  form1.classList.toggle('hide');
  if(f1.innerText == 'Show Form'){
    f1.innerText = 'Hide Form';
  }else if(f1.innerText == 'Hide Form'){
    (f1.innerText = 'Show Form')
  }
}

displayLibrary();
