const books = {
  Fantasy: ["Harry Potter", "The Hobbit", "Mistborn"],
  "Sci-Fi": ["Dune", "Foundation", "Neuromancer"],
  Romance: ["Me Before You", "The Notebook"],
  Thriller: ["Gone Girl", "The Silent Patient"]
};

window.recommendBook = function recommendBook() {
  const genre = document.getElementById("genre").value;
  const list = books[genre];
  const random = list[Math.floor(Math.random() * list.length)];

  document.getElementById("result").innerHTML = `
    <div class="glass">
      <h3>Recommended Book</h3>
      <p><strong>${random}</strong></p>
    </div>
  `;
};

const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("nav");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}