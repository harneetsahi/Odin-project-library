const article = document.querySelector(".form-container");
const bookForm = document.querySelector(".form");

const newBook = document.querySelector(".openModal");

const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#pages");
const readIt = document.getElementsByName("read");
const cancelBtn = document.querySelector(".cancelBtn");
const addBtn = document.querySelector(".addBtn");
const bookContainer = document.querySelector(".book-container");
const toggleReadBtn = document.querySelector(".toggle-read-btn");
const removeBtn = document.querySelector(".remove-btn");

let myLibrary = [];

// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
// }

// Book.prototype.toggleRead = function () {
//   this.read = !this.read;
// };

// function toggleRead(i) {
//   myLibrary[i].toggleRead();
//   renderDisplay();
// }

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}




function removeBook(i) {
  myLibrary.splice(i, 1);
  renderDisplay();
}

function renderDisplay() {
  bookContainer.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");

    bookEl.innerHTML = `
      <div class="card">
        <h3 class="title">${book.title}</h3>
        <h5 class="author">by ${book.author}</h5>
        <p class="pages">${book.pages} pages</p>
        <p class="read">${book.read ? "Read" : "Not Read yet"}</p>
        <button class="remove-btn btn" onclick="removeBook(${i})">Remove Book</button>
        <button class="toggle-read-btn btn" onclick="toggleRead(${i})">Toggle Read Status</button>
      </div>
    `;

    bookContainer.appendChild(bookEl);
  }
}

function addBookToLibrary() {
  let titleInput = document.querySelector("#title").value;
  let authorInput = document.querySelector("#author").value;
  let pagesInput = document.querySelector("#pages").value;
  let readInput = document.querySelector("#read").checked;

  let newBook = new Book(titleInput, authorInput, pagesInput, readInput);

  myLibrary.push(newBook);
  renderDisplay();
}

function resetInputValues() {
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#pages").value = "";
  document.querySelector("#read").checked = "";
}

newBook.addEventListener("click", () => {
  article.classList.toggle("show-form-container");
  document.body.style.backgroundColor = "rgba(191, 188, 178, 0.424)";
});

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  article.classList.remove("show-form-container");
  addBookToLibrary();
  resetInputValues();
  document.body.style.backgroundColor = "rgba(248, 245, 234, 0.424)";
});

cancelBtn.addEventListener("click", () => {
  article.classList.remove("show-form-container");
  resetInputValues();
  document.body.style.backgroundColor = "rgba(248, 245, 234, 0.424)";
});
