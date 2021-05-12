let myLibrary = [];
let index1 = 0;
if(localStorage.getItem('myLibrary') === null){
  localStorage.setItem('myLibrary', JSON.stringify([]));
}else{
  myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
  // eslint-disable-next-line no-unused-vars
  index1 = myLibrary.length-1;
}
class Book {
  constructor(title, author, pages) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = false;
  }
}

// I CREATED THIS MODEL CALLED "bookLib()"

const bookLib = ( () => {
  function displayLibrary () {
    for (let i = 0; i < myLibrary.length; i++) {
      // const container1 = document.querySelector('#cards-section');
      const container2 = document.createElement('div');
      container2.classList.add('card');
      container2.classList.add('border');
      container2.classList.add('border-info');
      container2.classList.add('border-4');
      container2.classList.add('d-inline-block');
      
      const div = document.createElement('div');
      div.classList.add('card-body');
      div.setAttribute('id', i)

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

      const inDiv33 = document.createElement('p');
      inDiv33.innerText = "I read this: " + myLibrary[i].read;
      inDiv33.classList.add('card-text');
      inDiv33.classList.add('read');

      const inDiv4 = document.createElement('button');
      inDiv4.innerText = 'Delete Book';
      inDiv4.classList.add('bttn');
      inDiv4.classList.add('delete-book');
      inDiv4.classList.add('btn');
      inDiv4.classList.add('btn-primary');
      inDiv4.setAttribute('id', i)

      const inDiv5 = document.createElement('button');
      inDiv5.innerText = 'Read';
      inDiv5.classList.add('bttn2');
      inDiv5.classList.add('delete-book');
      inDiv5.classList.add('btn');
      inDiv5.classList.add('btn-primary');
      inDiv5.setAttribute('id', i)

      const inDiv6 = document.createElement('p');
      

      div.appendChild(inDiv1);
      div.appendChild(inDiv2);
      div.appendChild(inDiv3);
      div.appendChild(inDiv4);
      div.appendChild(inDiv6);
      div.appendChild(inDiv5);
      div.appendChild(inDiv33);

      
      container2.appendChild(div);
      container2.classList.add('card-width');
      document.body.appendChild(container2);
    }
  }

  const form1 = document.querySelector(".book-add-form");
  const f1 = document.querySelector(".f1");

  // eslint-disable-next-line no-unused-vars
  function addBookToLibrary (form) {
    let tle = form.title.value;
    let athr = form.author.value;
    let pges = form.pages.value;
    if(tle != "" && athr != "" && pges != ""){
      // eslint-disable-next-line no-undef
      let lib = new Book(tle, athr, pges);
      // eslint-disable-next-line no-undef
      myLibrary.push(lib);

      if (typeof(Storage) !== "undefined") {
        localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
      } else {
        document.getElementById("show").innerHTML = "Sorry, your browser does not support Web Storage...";
      }
      
      form.title.value = '';
      form.author.value = '';
      form.pages.value = '';
    }
    location.reload();
  }

  function showForm () {
    form1.classList.toggle('hide');
    if(f1.innerText == 'Show Form'){
      f1.innerText = 'Hide Form';
    }else if(f1.innerText == 'Hide Form'){
      (f1.innerText = 'Show Form')
    }
  }

  function deleteBook(elem){
    this.parentElement.parentElement.style.visibility = 'hidden';
    myLibrary.splice(elem.target.id, 1);
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
    console.log(elem.target.id);
  }

  function readStatus(elem){
    if(elem.target.innerText == 'Not Read'){
      elem.target.innerText = 'Read'
    }else if(elem.target.innerText == 'Read'){
      elem.target.innerText = 'Not Read'
    }

    if(myLibrary[elem.target.id].read == false){
      myLibrary[elem.target.id].read = true
    }else if(myLibrary[elem.target.id].read == true){
      myLibrary[elem.target.id].read = false
    }

    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
    location.reload();
  console.log(myLibrary[elem.target.id].read);
  }

  return {readStatus, deleteBook, showForm, addBookToLibrary, displayLibrary};

})();


// I USED THE FUNCTIONS FROM THE "bookLib()" model below.

document.addEventListener("DOMContentLoaded", function(){
  var tableElements = document.getElementsByClassName("bttn2");  
for(var i=0;i<tableElements.length;i++){ 
tableElements[i].addEventListener("click", bookLib.readStatus, false); 
}
})

document.addEventListener("DOMContentLoaded", function(){
  var tableElements1 = document.getElementsByClassName("bttn");  
for(var i=0;i<tableElements1.length;i++){ 
tableElements1[i].addEventListener("click", bookLib.deleteBook, false); 
}
})

let formm = document.querySelector('#butt');
  formm.addEventListener('click', bookLib.showForm);

console.log(localStorage.getItem('myLibrary'));
bookLib.displayLibrary();



