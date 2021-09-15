const billAmt = document.querySelector("#bill-amt");
const cashGiven = document.querySelector("#cash-given");
const errorMsg = document.querySelector("#error-msg");
const checkButton = document.querySelector("#check");

var twoThousand = document.querySelector("#twoThousand");
var fiveHundred = document.querySelector("#fiveHundred");
var hundred = document.querySelector("#hundred");
var twenty = document.querySelector("#twenty");
var ten = document.querySelector("#ten");
var five = document.querySelector("#five");
var one = document.querySelector("#one");

function clickhandler(){

    const billValue = parseInt(billAmt.value); 
    const cashValue = parseInt(cashGiven.value);

    if(billValue <= 0 || cashValue <= 0 || billValue === "" || cashValue === "" || cashValue < billValue){
        errorMsg.innerHTML = "Invalid Input"; 
    }
    else{
        errorMsg.innerHTML = "";
        computeNotes(cashValue-billValue);
    }
}

function computeNotes(amount){
    if ( amount > 0){
        returnCash = amount / 2000;
        amount = amount % 2000;
        twoThousand.innerText = returnCash.toString().split(".")[0];
    }
    if ( amount > 0){
        returnCash = amount / 500;
        amount = amount % 500;
        fiveHundred.innerText = returnCash.toString().split(".")[0];
    }
    if ( amount > 0){
        returnCash = amount / 100;
        amount = amount % 100;
        hundred.innerText = returnCash.toString().split(".")[0];
    }
    if ( amount > 0){
        returnCash = amount / 20;
        amount = amount % 20;
        twenty.innerText = returnCash.toString().split(".")[0];
    }
    if ( amount > 0){
        returnCash = amount / 10;
        amount = amount % 10;
        ten.innerText = returnCash.toString().split(".")[0];
    }
    if ( amount > 0){
        returnCash = amount / 5;
        amount = amount % 5;
        five.innerText = returnCash.toString().split(".")[0];
    }
    if ( amount > 0){
        returnCash = amount / 1;
        amount = amount % 1;
        one.innerText = returnCash.toString().split(".")[0];
    }
}


checkButton.addEventListener("click",clickhandler)