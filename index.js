const myLibrary = [];
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author},${pages} pages, ${read}`;
  };
}
function addToLibrary(inputTitle, inputAuthor, inputPages, inputRead) {
  inputTitle = new Book(
    `${inputTitle}`,
    `${inputAuthor}`,
    `${inputPages}`,
    `${inputRead}`
  );
  myLibrary.push(inputTitle);
}
let Title = "booktitle";
let Author = "bookauthor";
let Pages = "bookpages";
let Read = "read";

addToLibrary(Title, Author, Pages, Read);
console.log(myLibrary);
