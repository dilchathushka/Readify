document.addEventListener("DOMContentLoaded", () => {
  const books = [
    { title: "1984", author: "George Orwell", genre: "Dystopian" },
    { title: "Harry Potter", author: "J.K. Rowling", genre: "Fantasy" },
    { title: "The Hobbit", author: "J.R.R Tolkien", genre: "Fantasy" },
    { title: "Dune", author: "Frank Herbert", genre: "Sci-Fi" }
  ];

  const list = document.getElementById("bookList");
  const search = document.getElementById("search");

  function renderBooks(data) {
    list.innerHTML = "";
    data.forEach(book => {
      list.innerHTML += `
        <div class="glass card">
          <h3>${book.title}</h3>
          <p>${book.author}</p>
          <small>${book.genre}</small>
        </div>
      `;
    });
  }

  search.addEventListener("input", () => {
    const val = search.value.toLowerCase();
    renderBooks(books.filter(b => b.title.toLowerCase().includes(val)));
  });

  renderBooks(books);
});

const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("nav");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}