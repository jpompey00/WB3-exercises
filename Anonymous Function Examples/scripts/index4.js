"use strict";

window.onload = init;

//buttons
const hb = document.getElementById("helloBtn");
const gb = document.getElementById("goodbyeBtn");
//output
const o = document.getElementById("output");

function init(){


    
hb.onclick = onHelloBtnClicked;
gb.onclick = onGoodbyeBtnClicked;
}

function onHelloBtnClicked(){
    o.innerHTML= "Hello4!"
}

function onGoodbyeBtnClicked(){
    o.innerHTML= "Goodbye4!"
}