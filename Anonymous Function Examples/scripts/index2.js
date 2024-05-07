"use strict";

window.onload = init;

//buttons
const helloBtn = document.getElementById("helloBtn");
const goodbyeBtn = document.getElementById("goodbyeBtn");
//output
const output = document.getElementById("output");

function init(){


    
helloBtn.onclick = onHelloBtnClicked;
goodbyeBtn.onclick = onGoodbyeBtnClicked;
}

function onHelloBtnClicked(){
    output.innerHTML= "Hello2!"
}

function onGoodbyeBtnClicked(){
    output.innerHTML= "Goodbye2!"
}