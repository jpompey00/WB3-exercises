"use strict";


//test variables
let productCode0 = "ACME:123-L";
let productCode1 = "DI:12345-M";
let productCode2 = "ACE:1-12";

//returns all characters before the :
function getSupplier(code){
    return code.substring(0,code.indexOf(":"));
    }

//returns all characters between : and -
function getProductNumber(code) {
    return code.substring(code.indexOf(":") + 1, code.indexOf("-"));
}

//returns all characters after the -
function getSize(code) {
    return code.substring(code.indexOf("-") + 1)
}


//outputs the parts info in a concise way based on the earlier functions
function outputPartInfo(code) {
    let supplier = getSupplier(code);
    let productNumber = getProductNumber(code);
    let size = getSize(code);
    let sizeExpanded;

    //If-Else block that checks if the size is in SML format or is a number.
    if (isNaN(Number(size))) {
        if (size.toUpperCase() == "L") {
            sizeExpanded = "large (L)";
        }
        if (size.toUpperCase() == "M") {
            sizeExpanded = "medium (M)";
        }
        if (size.toUpperCase() == "S") {
            sizeExpanded = "small (S)";
        }
    } else {
        sizeExpanded = `size ${size}`;
    }

    return `The ${sizeExpanded} part ${productNumber} is supplied by ${supplier}`;
}


console.log(outputPartInfo(productCode0));