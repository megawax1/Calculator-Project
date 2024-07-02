let display = document.querySelector(".display");
display.textContent ="";
display.maxlength = "9";

let varOne;
let varTwo;
let operator;
let seven = document.querySelector(".seven");
seven.addEventListener("click", () => {
    if (display.textContent === "/" ||
        display.textContent === "X" ||
        display.textContent === "+" ||
        display.textContent === "-" ||
        display.textContent === "="||
        display.textContent === "0"
    ) {
    display.textContent = "7"
} else if (display.textContent.length < 9) { display.textContent += "7" }
})


let eight = document.querySelector(".eight");
eight.addEventListener("click", () => {
    if (display.textContent === "/" ||
        display.textContent === "X" ||
        display.textContent === "+" ||
        display.textContent === "-" ||
        display.textContent === "="||
        display.textContent === "0"
    ) { display.textContent = 8} else if (display.textContent.length < 9) {
    display.textContent += "8"} 
})

let nine = document.querySelector(".nine");
nine.addEventListener("click", () => {
    if (display.textContent === "/" ||
        display.textContent === "X" ||
        display.textContent === "+" ||
        display.textContent === "-" ||
        display.textContent === "="||
        display.textContent === "0"
    ) {display.textContent = 9} else if (display.textContent.length < 9) {
    display.textContent += "9"}
})

let division = document.querySelector(".divide");
division.addEventListener("click", () => {
    varOne = display.textContent;
    display.textContent = "/";
    operator = "/";
})

let four = document.querySelector(".four");
four.addEventListener("click", () => {
    if (display.textContent === "/" ||
        display.textContent === "X" ||
        display.textContent === "+" ||
        display.textContent === "-" ||
        display.textContent === "="||
        display.textContent === "0"
    ) {display.textContent = "4"} else if (display.textContent.length < 9){
    display.textContent += "4";}
})

let five = document.querySelector(".five");
five.addEventListener("click", () => {
    if (display.textContent === "/" ||
        display.textContent === "X" ||
        display.textContent === "+" ||
        display.textContent === "-" ||
        display.textContent === "="||
        display.textContent === "0"
    ) {display.textContent = "5"} else if (display.textContent.length < 9){
    display.textContent += "5";}
})

let six = document.querySelector(".six");
six.addEventListener("click", () => {
    if (display.textContent === "/" ||
        display.textContent === "X" ||
        display.textContent === "+" ||
        display.textContent === "-" ||
        display.textContent === "="||
        display.textContent === "0"
    ) {display.textContent = "6"} else if (display.textContent.length < 9){
    display.textContent += "6";}
})

let one = document.querySelector(".one");
one.addEventListener("click", () => {
    if (display.textContent === "/" ||
        display.textContent === "X" ||
        display.textContent === "+" ||
        display.textContent === "-" ||
        display.textContent === "="||
        display.textContent === "0"
    ) {display.textContent = "1"} else if (display.textContent.length < 9) {
    display.textContent += "1";}
})

let two = document.querySelector(".two");
two.addEventListener("click", () => {
    if (display.textContent === "/" ||
        display.textContent === "X" ||
        display.textContent === "+" ||
        display.textContent === "-" ||
        display.textContent === "="||
        display.textContent === "0"
    )  {display.textContent = "2"} else if (display.textContent.length < 9){
    display.textContent += "2";}
})
let three = document.querySelector(".three");
three.addEventListener("click", () => {
    if (display.textContent === "/" ||
        display.textContent === "X" ||
        display.textContent === "+" ||
        display.textContent === "-" ||
        display.textContent === "="||
        display.textContent === "0"
    ) {display.textContent = "3"} else if (display.textContent.length < 9){
    display.textContent += "3";}
})
let subtraction = document.querySelector(".subtraction");
subtraction.addEventListener("click", () => {
    varOne = display.textContent;
    display.textContent = "-";
    operator = "-";
})

let zero = document.querySelector(".zero");
zero.addEventListener("click", () => {
    if (display.textContent === "/" ||
        display.textContent === "X" ||
        display.textContent === "+" ||
        display.textContent === "-" ||
        display.textContent === "=" ||
        display.textContent === "0"
    ) {display.textContent ="0"} else if (display.textContent.length < 9){
    display.textContent += "0";}
})

let decimalpoint = document.querySelector(".decimalpoint");
decimalpoint.addEventListener("click", () => {
    if (display.textContent === "/" ||
        display.textContent === "X" ||
        display.textContent === "+" ||
        display.textContent === "-" ||
        display.textContent === "=" ||
        display.textContent.includes(".")
    ) {display.textContent = "."} else{
    display.textContent += ".";}
})

let equalsign = document.querySelector(".equalsign");
equalsign.addEventListener("click", () => {
    varTwo = display.textContent;
    display.textContent = String(calc(varOne,varTwo)).substring(0, 9);
})

let plus = document.querySelector(".plus");
plus.addEventListener("click", () => {
    varOne = display.textContent;
    display.textContent = "+";
    operator = "+";
})

let multiplication = document.querySelector(".multiplication");
multiplication.addEventListener("click", () => {
    varOne = display.textContent;
    display.textContent = "X";
    operator = "*";
})

let clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    display.textContent = "";
    operator = "";
})


function calc(varOne, varTwo) {
    let num1 = varOne;
    let num2 = varTwo;
    let result;
    if (operator === "+") {
        result = add(num1, num2);
    } else if (operator ==="-") {
        result = subtract(num1, num2);
    } else if (operator === "*") {
        result = multiply(num1, num2)
    } else if (operator === "/") {
        result = divide(num1, num2)
    }
    return result;

}

function add(a, b) {

    return Number(a) + Number(b);
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (a == 0 || b == 0) {
        return "Game Over"
    } else {
    return a / b 
}
}