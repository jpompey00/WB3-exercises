"use strict";

window.onload = init;



function init(){


    
helloBtn.onclick = onHelloBtnClicked;
goodbyeBtn.onclick = onGoodbyeBtnClicked;
}

function onHelloBtnClicked(){
    output.innerHTML= "Hello3!"
}

function onGoodbyeBtnClicked(){
    output.innerHTML= "Goodbye3!"
}