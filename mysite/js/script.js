// Find the button, listen for a click, then add/remove the class "dark" on body.
var themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
