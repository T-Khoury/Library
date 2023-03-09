const modalBtn = document.querySelector("#modal-btn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");

const bookCreate = document.getElementById('book-create');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const pageCount = document.getElementById('page-count');
const readStatus = document.getElementById('read-status');
const submitButton = document.getElementById('submit-button');

const shelves = document.querySelectorAll('.shelf');



const myLibrary = [];
const bookIcons = ["images/book1.png", "images/book2.png", "images/book3.png", "images/book4.png", "images/book5.png", "images/book6.png", "images/book7.png"];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.isPlaced = false;
}

function assignIcons() {
  myLibrary.forEach(book => {
    if (!book.icon) {
      const randomNum = Math.floor(Math.random() * bookIcons.length);
      book.icon = bookIcons[randomNum];
    }
  })
}

function addBookToLibrary() {
  const newBook = new Book(bookTitle.value, bookAuthor.value, pageCount.value, readStatus.value);
  myLibrary.push(newBook);
}

function shelfPlacement(book) {
  for (let i = 0; i < shelves.length; i++) {
    if (shelves[i].childElementCount < 3) {
      shelves[i].appendChild(book);
      return
    }
  }
}



function createBookElements() {
  myLibrary.forEach(book => {
    if (book.isPlaced === false) {
    const bookElement = document.createElement('img');
    bookElement.src = book.icon;
    bookElement.classList.add('book');
    shelfPlacement(bookElement)
    book.isPlaced = true;
    }
  })
}

function displayBooks() {
  myLibrary.forEach(() => {
    
  })
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
  assignIcons();
  createBookElements();
  modal.style.display = "none"
  bookCreate.reset();
})








