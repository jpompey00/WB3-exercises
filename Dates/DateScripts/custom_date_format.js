"use strict";

let currentTime = new Date();
//display in day-Month-Year format



// console.log(currentTime);
console.log(formatDate(currentTime));


function formatDate(currentDate){
    let month = currentDate.getMonth();
    let dayNumber = currentDate.getDate();
    let year= currentDate.getFullYear();
    let weekdayNumber = currentDate.getDay();

    //console.log(month);\
    const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    //day-month-year(weekdayname)
    
    return `${dayNumber}-${monthsArray[month]}-${year} (${daysArray[weekdayNumber]})`;

}