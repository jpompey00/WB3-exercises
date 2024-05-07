"use strict";
window.onload = init;

//elements
const dateTextbox = document.getElementById("dateTextbox");
const outputTextBox = document.getElementById("outputTextBox");

//buttons
const submitButton = document.getElementById("submitButton");


function init(){

    submitButton.onclick = onSubmitButtonClicked;
}


function  onSubmitButtonClicked(){
    let dateTextboxValue = dateTextbox.value; //YYYY-MM-DD
    let date = new Date(dateTextboxValue); //1 day error
    //How i fixed off by 1 error
    //let tripDate = new Date(dateTextBox.value.replace(/-/g,"/")); //YYYY-MM-DD
    
    outputTextBox.innerHTML = date.toString();
}