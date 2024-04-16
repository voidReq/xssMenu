// ==UserScript==
// @name         button
// @namespace    hi
// @version      0.31
// @description  Add sci-hub button on article page. Add sci-hub button after article link. Support Google scholar, bing academic and baidu xueshu. Jump CNKI English article to Chinese article.
// @author       Dingar
// @include      *
// ==/UserScript==

//https://www.htmldog.com/guides/javascript/advanced/creatingelements/
//btn.style = "position:fixed; top:" + buttonY + "px; left:" + buttonX + "px; background-color: white; border: none; color: #8e8e8e; padding: 0px 0px; text-align: center; text-decoration: none; font-family: ; display: inline-block; font-size: 20px; margin: 0px 0px; cursor: pointer; width: 30px; height: 30px";

/*
select.addEventListener('mouseover', function() {
    alert(1);
});
*/



var select = document.createElement("select");
select.id = "mySelect";
var payloads = ["<script>alert(1)</script>","<img src='#' onerror=alert(1) />","<b onmouseover=alert('Wufff!')>click me!</b>"];

var select_width = 130;
var select_height = 40;
var selectX = document.documentElement.clientWidth - 400;
var selectY = document.documentElement.clientHeight - 400;


for (var i = 0; i < payloads.length; i++) {
    var option = document.createElement("option");
    option.value = payloads[i];
    option.text = payloads[i];
    select.appendChild(option);
}


select.onchange = function () {
    document.getElementsByName("p1")[0].value = select.value
};



select.style = "position:fixed; top:" + selectY + "px; left:" + selectX + "px; background-color: #00ccff; border-radius: 20px; font-size: 20px; cursor: pointer; width:" + select_width + "px; height:" + select_height + "px";
select.style.opacity = "0.9";


document.body.appendChild(select);
