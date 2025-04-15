# Looping code
Loops help to simplify thngs inside of code by going over a specific assignment for multiple times
## Looping through a collections
Usually you use a collection to decide what your loop is going to do, one example are arrays 

The basic coding for looping through a collection is by using ```for...of```
```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
```
What it does is:  
1. Given the collection cats, get the first item in the collection.
2. Assign it to the variable cat and then run the code between the curly braces {}.
3. Get the next item, and repeat (2) until you've reached the end of the collection.

Apart from Arrays you can also use ```map()``` and ```filter``` to loop through a collection

Use ```map()``` to do something to each item in a collection and create a new collection containing the changed items

function toUpper(string) {
  return string.toUpperCase();
}
```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
const upperCats = cats.map(toUpper);
console.log(upperCats);
``` 
What you do is create a function to do something (change to uppercase) and then by using map, you can create a constant that links the array to your function, priting the array with all leters in uppercase.

```filter``` goes through each item of the collection and creates a new collection with matching items
```js
function lCat(cat) {
  return cat.startsWith("L");
}
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
const filtered = cats.filter(lCat);
console.log(filtered);
```
What you do is create a function that will only return cat from the array cats that start letter L and then you assign it to your specific array using filter so it only prints cats that start with letter L

## The standard for loop
For loops are the standard way of creating loops, and they use specific syntax: 
```js
for (initializer; condition; final-expression) {
  // code to run
}
```
What to include:
1. The keyword ```for```
2. An initializer: his is usually a variable set to a number, which is incremented to count the number of times the loop has run.
3. A condition: Defines when the loop should stop looping. Which is generally an expression featuring a comparison operator.
4. A final expression: this is always evaluated (or run) each time the loop has gone through a full iteration. It usually serves to increment (or in some cases decrement) the counter variable, to bring it closer to the point where the condition is no longer true.
5. Curly brackets: Inside you put the code that the loop will iterate.

## Looping through a collection with for loop
Another way in which you can also loop through collections is with ```for``` loops
```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}
``` 
This way you are able to tell your computer the loop strts at 0 and will run as long as that number is less than the length of the array, with the final parameter it increments i by one so the loop can keep going until it reaches the length of the array

Although you can use both ways it's better to use for...of in this cases as you can prevent a typo mistake

## Exiting loops with break
You can use a ```break``` statement to exit a loop before it finishes its iterations. What it will do is exit the loop and goto the next section of your code

## Skipping iterations with continue
Continue is similar to break, but instead of breaking out of the loop, it skips to the next iteration of the loop, you add them before you close the curly bracket

## While and do...while
These are other loops apart from for, that act similar but have some distinctions
```js
initializer
while (condition) {
  // code to run

  final-expression
}
``` 
This is a while loop, as you see the order varies, having the ```initializer``` before the loop and the  ```final expression``` inside the loop. 
```js
const cats = ["Pete", "Biggles", "Jasmine"];
let myFavoriteCats = "My cats are called ";
let i = 0;
while (i < cats.length) {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }
  i++;
}
console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."
```
And here is the do...while
```js
initializer
do {
  // code to run

  final-expression
} while (condition)
``` 
The main difference between a do...while loop and a while loop is that the code inside a do...while loop is always executed at least once. That's because the condition comes after the code inside the loop. So we always run that code, then check to see if we need to run it again. In while and for loops, the check comes first, so the code might never be executed.

Now here is the same example we used with for and while but now with do...while
```js 
const cats = ["Pete", "Biggles", "Jasmine"];
let myFavoriteCats = "My cats are called ";
let i = 0;
do {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }
  i++;
} while (i < cats.length);
console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."





