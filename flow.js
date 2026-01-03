let audio = new Audio();

window.playSound = function playSound(type) {
  audio.src = `assets/sounds/${type}.mp3`;
  audio.loop = true;
  audio.play();
};

window.stopSound = function stopSound() {
  audio.pause();
};

window.saveBook = function saveBook() {
  const input = document.getElementById("bookName");
  const book = input ? input.value : "";
  if (!book) return;

  let books = JSON.parse(localStorage.getItem("completed")) || [];
  books.push(book);
  localStorage.setItem("completed", JSON.stringify(books));
  renderBooks();
};

function renderBooks() {
  const list = document.getElementById("completedList");
  if (!list) return;

  list.innerHTML = "";
  let books = JSON.parse(localStorage.getItem("completed")) || [];
  books.forEach(b => {
    const li = document.createElement("li");
    li.textContent = b;
    list.appendChild(li);
  });
}

renderBooks();

const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("nav");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}