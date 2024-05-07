"use strict";

window.onload = init;

//buttons



function init(){
    const helloBtn = document.getElementById("helloBtn");
    const goodbyeBtn = document.getElementById("goodbyeBtn");

    
helloBtn.onclick = onHelloBtnClicked;
goodbyeBtn.onclick = onGoodbyeBtnClicked;
}

function onHelloBtnClicked(){
    const output = document.getElementById("output");
    output.innerHTML= "Hello!"
}

function onGoodbyeBtnClicked(){
    const output = document.getElementById("output");
    output.innerHTML= "Goodbye!"
}