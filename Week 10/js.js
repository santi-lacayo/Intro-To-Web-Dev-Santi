//variables
var x = 5;
var y = 111.11;
var hi = "hi";
var z = x * y;
var carName = "Ferrari";
var math1 = 5 * 8;
var name1 = "Santiago";
var age = 19;
var code = true;

//alert
document.getElementById("alertButton").onclick =function () {
    window.alert("good job!");
};
//console log
console.log("I'm Santiago");

//car assignment
function car() {
    let statement = carName + " " + "is my favorite car";
    document.getElementById("carHTML").innerHTML = statement;
}

//math assignment
document.getElementById("math").innerHTML = "The answer is" + " " + math1;

//name assignment
document.getElementById("exercise").innerHTML = "Hello, my name is " + name1 + " I am " + age + " years old and I can code Javascript: " + code;

//creating a function
function sumValues(a,b) {
    let c = a + b;
    alert("The value of z is " + c)
}

//using booleans
var isOn = true
function switchOff() {
    if (isOn == true) {
        alert("The light is on");
        isOn = false;
    } else {
        alert("The light is off");
        isOn = true;
    }
}