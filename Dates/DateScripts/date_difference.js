"use strict";
window.onload = init;
/*
Notes:
Works fine with longer days but things that are 1 day away or the like will 
not produce the result I want.
*/

//html elements
const dateTextBox = document.getElementById("dateTextBox");
const outputTextBox = document.getElementById("outputTextBox");
//html buttons
const submitButton = document.getElementById("submitButton");


//CONSTANTS
const MILLISECONDS_PER_DAY = 1000*60*60*24;


//Dates to compare
let startDate = "July 11, 2022";
let endDate = "November 11, 2022";

function init(){

    submitButton.onclick = onSubmitButtonClicked;

}


function onSubmitButtonClicked(){
    let tripDate = new Date(dateTextBox.value.replace(/-/g,"/")); //YYYY-MM-DD
    let currentDate = new Date();
    outputTextBox.innerHTML = compareDates(currentDate,tripDate);
}

function compareDates(startDate, endDate){

    let elapsedMilliseconds = (new Date(endDate).getTime()) - (new Date(startDate).getTime());
    
    let days = Math.round(elapsedMilliseconds / MILLISECONDS_PER_DAY);

    //output for the original assignment
    console.log(`The number of days between ${startDate} and ${endDate} is ${days}`);

    //modifying it for the trip date
    return `Your trip on ${endDate.toDateString()} is in ${days} days`
}




