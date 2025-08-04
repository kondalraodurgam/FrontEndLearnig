const happyBtn = document.getElementById("happybtn");
const sadBtn = document.getElementById("sadbtn");
const angryBtn = document.getElementById("angrybtn");
const anythingelseBtn = document.getElementById("anythingelsebtn");
const resetBtn = document.getElementById("resetbtn");
const resultElement = document.getElementById("result");

happyBtn.addEventListener("click", function () {
  resultElement.textContent = "😊" + " YOUR IN A HAPPY MOOD";
});

sadBtn.addEventListener("click", function () {
  resultElement.textContent = "😢" + " YOUR IN A SAD MOOD";
});

angryBtn.addEventListener("click", function () {
  resultElement.textContent = "😡" + " YOUR IN A ANGRY MOOD";
});

anythingelseBtn.addEventListener("click", function () {
  resultElement.textContent = "🤔" + "YOU THINK  OF SOMETHING ELSE";
});

resetBtn.addEventListener("click", function () {
  resultElement.textContent = "";
});
