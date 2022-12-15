function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
    .then((res) => res.json())
    .then((data) => renderBooks(data));
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});

const numberofPages = (books) => {
  const pages = document.querySelector("div");
  books.forEach((book) => {
    const page = document.createElement("h3");
    page.textContent = book.numberOfPages;
    pages.appendChild(page);
  });
};
