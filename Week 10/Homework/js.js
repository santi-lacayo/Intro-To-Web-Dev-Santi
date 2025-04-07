//variables
var name = "Santiago";
var age = 19;
var favoriteNumber = 17.7;
var code = true;

//alert
document.getElementById("alertButton").onclick =function () {
    window.alert("Hello World");
};
//console log
console.log("My first JavaScript assignment");

//modify text
document.getElementById("output").innerHTML ="I just modified this element with Javascript ";

//variable practice
document.getElementById("exercise").innerHTML = "Hello, my name is " + name + ", I am " + age + " years old, and my favorite number is " + favoriteNumber;

//calculator function
function calculate(a,b,elementId) {
    let c = a + b;
    let d = a - b;
    let r = a * b;
    let m = a / b;
    document.getElementById(elementId).innerHTML = 
    "The sum of " + a + " and " + b + " is: " + c + "<br>" +
    "The difference of " + a + " and " + b + " is: " + d + "<br>" +
    "The product of " + a + " and " + b + " is: " + r + "<br>" +
    "The quotient of " + a + " and " + b + " is: " + m;
}

calculate(10,5,"calculate1");
calculate(8,4,"calculate2");
calculate(6,2,"calculate3");

//temperature converter
function fahrenheitToCelsius (F){
    let C = (F - 32) * 5/9;
    document.getElementById("convert1").onclick =function () {
    window.alert("The temperature in celcius is " + C);
    };
    }
    fahrenheitToCelsius(77);

function celciusToFahrenheit (C){
    let F = C * 9/5 + 32;
    document.getElementById("convert2").onclick =function () {
    window.alert("The temperature in fahrenheit is " + F);
    };
    }
    celciusToFahrenheit(20);

//string manipulation
function manipulation(string){
    document.getElementById("displaystring").onclick = function () {
        const uCase = string.toUpperCase();
        const length = string.length;
        window.alert("Uppercase: " + uCase + " /" + " Length: " + length);
    }
}
manipulation("I'm tired");

//toggle switch
var isOn = true
function switchOff() {
    const text1 = document.getElementById("lightstatus");
    if (isOn == true) {
        text1.innerHTML = "Light is OFF";
        isOn = false;
    } else {
        text1.innerHTML = "Light is ON";
        isOn = true;
    }
}

//for loop
function countByTwo(n) {
    let value = ""
    for (let i = 0; i<= n; i+= 2){
        value += "The number is: " + i + "<br>";
    }
    document.getElementById("countby").innerHTML = value;
}
