const happyBtn = document.getElementById("happybtn");
const sadBtn = document.getElementById("sadbtn");
const angryBtn = document.getElementById("angrybtn");
const anythingelseBtn = document.getElementById("anythingelsebtn");
const resetBtn = document.getElementById("resetbtn");
const resultElement = document.getElementById("result");

happyBtn.addEventListener("click", function () {
  resultElement.textContent = "😊" + " Your in a Happy Mood";
});

sadBtn.addEventListener("click", function () {
  resultElement.textContent = "😢" + " Your in a Sad Mood";
});

angryBtn.addEventListener("click", function () {
  resultElement.textContent = "😡" + " Your in a Angry Mood";
});

anythingelseBtn.addEventListener("click", function () {
  resultElement.textContent = "🤔" + "You Think  OF Something Else";
});

resetBtn.addEventListener("click", function () {
  resultElement.textContent = "";
});
