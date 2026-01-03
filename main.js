const quotes = [
  { text: "A reader lives a thousand lives.", author: "George R.R. Martin" },
  { text: "So many books, so little time.", author: "Frank Zappa" },
  { text: "Reading is dreaming with open eyes.", author: "Unknown" }
];

let index = 0;

function rotateQuote() {
  const q = document.getElementById("quote");
  const a = document.getElementById("author");
  if (!q || !a) return;

  q.style.opacity = 0;
  a.style.opacity = 0;

  setTimeout(() => {
    q.textContent = quotes[index].text;
    a.textContent = "- " + quotes[index].author;

    q.style.opacity = 1;
    a.style.opacity = 1;

    index = (index + 1) % quotes.length;
  }, 400);
}

(function initHome() {
  const authorDayEl = document.getElementById("authorDay");
  if (authorDayEl) {
    const authors = ["J.K. Rowling", "George Orwell", "Agatha Christie", "J.R.R Tolkien"];
    const today = new Date().getDate();
    authorDayEl.textContent = authors[today % authors.length];
  }

  rotateQuote();
  setInterval(rotateQuote, 3000);
})();

const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("nav");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}