"use strict";
//because i know it will be 1-3 names, that means there will be 2 spaces, so I can use both indexOf and lastIndexOf

window.onload = init;

//input field
const nameTextBox = document.getElementById("nameTextBox");
const nameOutputTextBox = document.getElementById("nameOutputTextBox");

//button
const nameSubmitButton = document.getElementById("nameSubmitButton");


function init(){
    nameSubmitButton.onclick = onNameSubmitButtonClicked;
}

// let fullName = "Julian Alexander Pompey";

function outputName(fullName){
//Checks if the indexs have the same value, meaning there is only one space. And checks if the index is -1.
//If it is -1 then that means there is no space and the else-if block handles that

let firstName;
let middleName;
let lastName;
if (fullName.indexOf(" ") == fullName.lastIndexOf(" ") && fullName.indexOf(" ") != -1) { 
    firstName = fullName.substring(0, fullName.indexOf(" "));
    lastName = fullName.substring(fullName.indexOf(" ") + 1);
    console.log(`First name: ${firstName}\nLast name: ${lastName}`);
    return `First name: ${firstName}\nLast name: ${lastName}`;


} else if (fullName.indexOf(" ") == -1) { //if there is no space then there is 1 name
    // console.log(`Only Name: ${fullName}`);
    return `Only Name: ${fullName}`

} else { //only thing to account for left is there being 3 names
    firstName = fullName.substring(0, fullName.indexOf(" "));
    middleName = fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" "));
    lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);

    console.log(
        `Name: ${fullName}\nFirst name: ${firstName}\nMiddle name: ${middleName}\nLast name: ${lastName}`
    );
    return `Name: ${fullName}\nFirst name: ${firstName}\nMiddle name: ${middleName}\nLast name: ${lastName}`


}
}



//doesn't really format correctly
function onNameSubmitButtonClicked(){
    nameOutputTextBox.innerHTML = outputName(nameTextBox.value)
}