"use strict";

let inputDetail = document.querySelector("input");
const errorMsg = "Error! You need to input an amount."
document.querySelector("button").addEventListener("click", actionFunc);

function actionFunc(){
let amount = parseFloat (inputDetail.value);
const calcul = ((amount/100)*0.5).toLocaleString();
let displayResult = document.getElementById("result").textContent = `Your Cybersecurity charges on ₦${amount} will be ₦${calcul}.` ;
if (inputDetail.value.trim() === "") {
    document.getElementById("result").classList.add("error");
    document.getElementById("result").textContent = errorMsg ;
}else{ 
    document.getElementById("result").classList.remove("error");
    return displayResult; }
}

for (let i = 0; i < document.getElementsByClassName("input").length; i++) {
    document.getElementsByClassName("input")[i].onkeyup = function (i) {
        return function () {
            // console.log(this);
            let text_max = 99;
            let text_length =this.value.length;
            let text_remaining = text_max - text_length;
            document.getElementsByClassName("counter")[i].innerHTML = "Character-count:" + text_length + "/" + text_max;
        };
    }(i);
}
