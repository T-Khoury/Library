const modalBtn = document.querySelector('#modal-btn');
const inputModal = document.querySelector('.input-modal');
const inputCloseBtn = document.querySelector('.input-close-btn');
const bookInfoModal = document.querySelector('.bookInfo-modal');
const bookInfoCloseBtn = document.querySelector('.bookInfo-close-btn');

const bookCreate = document.getElementById('book-create');
const bookTitleInput = document.getElementById('title');
const bookAuthorInput = document.getElementById('author');
const pageCountInput = document.getElementById('page-count');
const readStatusInput = document.getElementById('read-status');
const submitButton = document.getElementById('submit-button');

const shelves = document.querySelectorAll('.shelf');

const bookTitleDisplay = document.querySelector('.book-title');
const bookAuthorDisplay = document.querySelector('.book-author');
const bookPageCountDisplay = document.querySelector('.book-pageCount');
const bookReadStatusDisplay = document.querySelector('.book-readStatus');





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
  const newBook = new Book(bookTitleInput.value, bookAuthorInput.value, pageCountInput.value, readStatusInput.checked);
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

function setModalInfo(book) {
  bookAuthorDisplay.textContent = `Author: ${myLibrary[book.dataset.libraryindex].author}`;
  bookTitleDisplay.textContent = `Title: ${myLibrary[book.dataset.libraryindex].title}`;
  bookPageCountDisplay.textContent = `Page Count: ${myLibrary[book.dataset.libraryindex].pages}`;
  bookReadStatusDisplay.textContent = `Reading Status: ${(myLibrary[book.dataset.libraryindex].read === true) 
  ? "Completed" 
  :"Not Completed"}`;

}

function addBookInteraction() {
  setModalInfo(this);
  bookInfoModal.style.display = "block";
}





function createBookElements() {
  myLibrary.forEach(book => {
    if (book.isPlaced === false) {
      const bookElement = document.createElement('img');
      bookElement.src = book.icon;
      bookElement.classList.add('book');
      bookElement.setAttribute('data-libraryIndex', `${myLibrary.indexOf(book)}`);
      shelfPlacement(bookElement);
      bookElement.addEventListener('click', addBookInteraction)
      }
      book.isPlaced = true;
    })
  }
   


modalBtn.onclick = function() {
  inputModal.style.display = "block";
}
  

inputCloseBtn.onclick = function() {
  inputModal.style.display = "none";
}
bookInfoCloseBtn.onclick = function() {
  bookInfoModal.style.display = "none";
}

window.onclick = function(e) {
  if(e.target == inputModal) {
    inputModal.style.display = "none"
  }
  if(e.target == bookInfoModal) {
    bookInfoModal.style.display = "none"
  }
}


submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  addBookToLibrary();
  assignIcons();
  createBookElements();
  inputModal.style.display = "none";
  bookCreate.reset();
})










