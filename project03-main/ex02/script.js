const title = document.getElementById("title");
const description = document.querySelector(".description");
const box = document.querySelector("#box");

const changeTextBtn = document.getElementById("change-text");
const changeStyleBtn = document.getElementById("change-style");
const addClassBtn = document.getElementById("add-class");
const removeClassBtn = document.getElementById("remove-class");

changeTextBtn.addEventListener("click", function () {
  title.textContent = "Hello from JavaScript";
  description.textContent = "This text was changed live!";
});

changeStyleBtn.addEventListener("click", function () {
  title.style.color = "darkblue";
  title.style.backgroundColor = "lightgray";
  title.style.display= "inline-block";
});

addClassBtn.addEventListener("click", function () {
  box.classList.add("active");
});

removeClassBtn.addEventListener("click", function () {
  box.classList.remove("active");
});