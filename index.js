const openDialog = document.querySelector(".user-input");
const dialog = document.querySelector(".dialog");
const cardsContainer = document.querySelector(".cards");
const submitButton = document.querySelector(".submission");
const bookName = document.querySelector("#book-name");
const bookAuthor = document.querySelector("#book-author");
const bookPages = document.querySelector("#book-pages");
const bookStatus = document.querySelector("#book-status");
const myLibrary = [];
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
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
openDialog.addEventListener("click", () => {
  dialog.show();
});
submitButton.addEventListener("click", () => {
  addToLibrary(
    bookName.value,
    bookAuthor.value,
    bookPages.value,
    bookStatus.value
  );
  const render = function () {
    cardsContainer.innerHTML = "";
    myLibrary.forEach((object) => {
      const tempdiv = document.createElement("div");
      const temptitle = document.createElement("div");
      const tempauthor = document.createElement("div");
      const temppages = document.createElement("div");
      const tempread = document.createElement("button");
      const tempdelete = document.createElement("button");
      tempdiv.dataset.index = myLibrary.indexOf(object);

      tempdiv.appendChild(temptitle);
      tempdiv.appendChild(tempauthor);
      tempdiv.appendChild(temppages);
      tempdiv.appendChild(tempread);
      tempdiv.appendChild(tempdelete);

      temptitle.innerText = `Title :${object.title}`;
      tempauthor.innerText = `Author:${object.author}`;
      temppages.innerText = `${object.pages} pages`;
      tempread.innerText = object.read;
      cardsContainer.appendChild(tempdiv);
      tempdelete.addEventListener("click", () => {
        myLibrary.splice(tempdiv.dataset.index, 1);
        render();
      });
      tempread.addEventListener("click", () => {
        console.log(tempdiv.dataset.index);
        if (object.read == "Read") {
          object.read = "Not Read";
        } else {
          object.read = "Read";
        }
        render();
      });
    });
  };
  render();
});
