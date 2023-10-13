document.addEventListener("DOMContentLoaded", function() {
  var allTa = document.querySelectorAll("textarea");
  for (var i = 0; i<allTa.length; i++) {
  allTa[i].setAttribute("spellcheck", false);
  allTa[i].setAttribute("wrap", "logical");
  allTa[i].style.cursor = "auto";
  allTa[i].setAttribute("placeholder", "You can write, paste or edit text here...!!!");
  }
});