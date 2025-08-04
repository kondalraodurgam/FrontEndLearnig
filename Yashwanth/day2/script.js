const happyBtn = document.getElementById("happybtn");
const sadBtn = document.getElementById("sadbtn");
const angryBtn = document.getElementById("angrybtn");
const anythingelseBtn = document.getElementById("anythingelsebtn");
const resetBtn = document.getElementById("resetbtn");
const resultElement = document.getElementById("result");

happyBtn.addEventListener("click", function () {
  resultElement.textContent = "😊";
});

sadBtn.addEventListener("click", function () {
  resultElement.textContent = "😢";
});

angryBtn.addEventListener("click", function () {
  resultElement.textContent = "😡";
});

anythingelseBtn.addEventListener("click", function () {
  resultElement.textContent = "🤔";
});

resetBtn.addEventListener("click", function () {
  resultElement.textContent = "";
});
