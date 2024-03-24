const btn = document.getElementById("toggle-btn");
const basic = document.getElementById("basic");
const professional = document.getElementById("professional");
const master = document.getElementById("master");

btn.addEventListener("click", () => {
  basic.textContent = basic.textContent === "$19.99" ? "$199.99" : "$19.99";
  professional.textContent =
    professional.textContent === "$249.99" ? "$24.99" : "$249.99";
  master.textContent = master.textContent === "$399.99" ? "$39.99" : "$399.99";
});
