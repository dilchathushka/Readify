window.saveFeedback = function saveFeedback(e) {
  e.preventDefault();
  alert("Feedback saved!");
};

const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("nav");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}