const modalBtn = document.querySelector("#modal-btn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");

const bookCreate = document.getElementById('book-create');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const pageCount = document.getElementById('page-count');
const readStatus = document.getElementById('read-status');
const submitButton = document.getElementById('submit-button');

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    let readYet;
    if (this.read == true) {
      readYet = "completed";
    } else {
      readYet = "not yet completed";
    }
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readYet}.`;
  };
}

function addBookToLibrary() {
  
  const newBook = new Book(bookTitle.value, bookAuthor.value, pageCount.value, readStatus.value);
  myLibrary.push(newBook);

}

modalBtn.onclick = function() {
  modal.style.display = "block"
}
  

closeBtn.onclick = function() {
  modal.style.display = "none"
}
window.onclick = function(e) {
  if(e.target == modal) {
    modal.style.display = "none"
  }
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  addBookToLibrary();
  modal.style.display = "none"
  bookCreate.reset();
})








