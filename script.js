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

function addBookToLibrary() {}
