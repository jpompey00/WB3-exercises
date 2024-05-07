"use strict";

//anonymous function
window.onload = function(){
    
    helloBtn.onclick = onHelloBtnClicked;
    goodbyeBtn.onclick = onGoodbyeBtnClicked;
} 

//buttons
const helloBtn = document.getElementById("helloBtn");
const goodbyeBtn = document.getElementById("goodbyeBtn");
//output
const output = document.getElementById("output");

function init(){



}

function onHelloBtnClicked(){
    output.innerHTML= "Hello5!"
}

function onGoodbyeBtnClicked(){
    output.innerHTML= "Goodbye5!"
}