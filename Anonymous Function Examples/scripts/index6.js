"use strict";

//anonymous function
window.onload = function(){
    
    //anonymous functions
    helloBtn.onclick = function(){
        output.innerHTML= "Hello6!"
    }
    goodbyeBtn.onclick = function(){
        output.innerHTML= "Goodbye6!"
    }
    
} 

//buttons
const helloBtn = document.getElementById("helloBtn");
const goodbyeBtn = document.getElementById("goodbyeBtn");
//output
const output = document.getElementById("output");
