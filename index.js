const openDialog = document.querySelector(".user-input");
const dialog = document.querySelector(".dialog");
const cardsContainer = document.querySelector(".cards");
const submitButton = document.querySelector(".submission");
const temp = document.querySelector(".temp");
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
addToLibrary("poop", "poopenheimer", "100", "read");
addToLibrary("poop", "poopenheimer", "100", "read");
addToLibrary("poop", "poopenheimer", "100", "read");
addToLibrary("poop", "poopenheimer", "100", "read");
addToLibrary("poop", "poopenheimer", "100", "read");
addToLibrary("poop", "poopenheimer", "100", "read");
addToLibrary("poop", "poopenheimer", "100", "read");
addToLibrary("poop", "poopenheimer", "100", "read");
addToLibrary("poop", "poopenheimer", "100", "read");
addToLibrary("poop", "poopenheimer", "100", "read");
console.log(myLibrary);
submitButton.addEventListener("click", () => {
  myLibrary.forEach((object, index) => {
    const tempdiv = document.createElement("div");
    const temptitle = document.createElement("div");
    const tempauthor = document.createElement("div");
    const temppages = document.createElement("div");
    const tempread = document.createElement("div");
    tempdiv.appendChild(temptitle);
    tempdiv.appendChild(tempauthor);
    tempdiv.appendChild(temppages);
    tempdiv.appendChild(tempread);
    temptitle.innerText = object.title;
    tempauthor.innerText = object.author;
    temppages.innerText = object.pages;
    tempread.innerText = object.read;
    cardsContainer.appendChild(tempdiv);
  });
});

// submitButton.addEventListener('click',()=> {

// })
