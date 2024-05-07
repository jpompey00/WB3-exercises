"use strict";

//buttons
const helloBtn = document.getElementById("helloBtn");
const goodbyeBtn = document.getElementById("goodbyeBtn");
//output
const output = document.getElementById("output");

function init(){


//arrow Syntax
window.onload = (x,y) =>{
    
    helloBtn.onclick = onHelloBtnClicked;
    goodbyeBtn.onclick = onGoodbyeBtnClicked;
} 



}

function onHelloBtnClicked(){
    output.innerHTML= "Hello7!"
}

function onGoodbyeBtnClicked(){
    output.innerHTML= "Goodbye7!"
}