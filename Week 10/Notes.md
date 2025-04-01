# Outputs
Javascript doesn't have any display built in function
- ```inner.HTML``` change the text between the opening and closing tags of an HTML element of our choosing
- ```alert()``` display a pop up window with dtata we pass into the ()
- ```console.log``` logs data into the javascript console

For javascript to work it needs to stirctly be opened in a browser

## Using variables 
```javascript
let x, y, z
x = 5;
y = 6;
z = x + y;
```
## Semicolons
They separate statements in javascript, you should always put one in the end
## Code Blocks
You can group things in Javascript by uing curly brackets and writting inside {}

They define statements to be executed together
```javascript
function myFunction() {
  document.getElementById("demo1").innerHTML = "Hello Dolly!";
  document.getElementById("demo2").innerHTML = "How are you?";
}
```
# Syntax
## Javascript values
Javascript defines two types of values
- Fixed values (literals) numbers 1, 2,3, strings "Helloworld"
- Variable values (variables) javascript uses ```var```, ```let```, and ```const``` to define variables
## Operators
Arithmetic operators (+,-,/,*,) are used to compute values

Assignment operator (=) is used to assign values to variables
## Variables
When to use ```var``` ```let``` and ```const```
- Always use ```const``` if the value should not be changed
- Always use ```const``` if the type shpuld not be changed
- Use let or ```var``` if you can't use ```const```
- Try to avoid using var
- You can declare multiple variables in one line ```let cat, dog, bird```
## Boolean
True or false 

Example: Did you click on this element (true or false) the variable can be named however you want

# Functions
Functions contain the keyword ```function``` followed by a function name of your choosing, then parenthesis() where you put the parameters, and then the code for the function to be execute is placed after inside curly brackets {}

For the  and they need to be invoked in order to be executed
```javascript
function sumValues(a,b) {
    let c = a + b;
    alert("The value of z is " + c)
}
```





