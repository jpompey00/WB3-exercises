"use strict";
//code here

function getSocSecurityTax(grossPay){
    return grossPay * .062;
}

function getMedicareTax(grossPay){
    return grossPay * .145;
}

function getFederalTax(grossPay, withholdingCode){
    switch (withholdingCode){
        case 0:
            return grossPay * .23;
        case 1:
            return grossPay * .21;
        case 2:
            return grossPay * .195;
        case 3:
            return grossPay * .185;
        default:
            return grossPay * (.18 - ((withholdingCode - 4)*.005));

    }
}

console.log(getSocSecurityTax(750));
console.log(getMedicareTax(750));
console.log(getFederalTax(750,0));
console.log(`\n`);
console.log(getSocSecurityTax(1150));
console.log(getMedicareTax(1150));
console.log(getFederalTax(1150,2));
console.log(`\n`);
console.log(getSocSecurityTax(1100));
console.log(getMedicareTax(1100));
console.log(getFederalTax(1100,6));