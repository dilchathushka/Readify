const calcBtn = document.getElementById("calcBtn");

if (calcBtn) {
  calcBtn.addEventListener("click", () => {
    const total = Number(document.getElementById("total").value);
    const read = Number(document.getElementById("read").value);
    const bar = document.getElementById("progress-bar");
    const result = document.getElementById("result");

    if (!total || !read || read > total) {
      result.textContent = "Please enter valid numbers.";
      bar.style.width = "0%";
      return;
    }

    const percent = Math.round((read / total) * 100);
    bar.style.width = percent + "%";
    result.textContent = `You have completed ${percent}% of the book 📘`;
  });
}

const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("nav");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}