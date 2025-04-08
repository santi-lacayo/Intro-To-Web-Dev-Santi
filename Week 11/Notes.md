# What is an array?

Arrays are generally described as "list-like objects"; they are basically single objects that contain multiple values stored in a list.

If we didn't have arrays, we'd have to store every item in a separate variable, then call the code that does the printing and adding separately for each item.

Creating arrays
Arrays consist of square brackets and items that are separated by commas.

Suppose we want to store a shopping list in an array. Paste the following code into the console:

```js
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping);
```
### Finding the length of an array

You can find out the length of an array (how many items are in it) in exactly the same way as you find out the length (in characters) of a string — by using the `length` property. Try the following:

```js
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping.length); // 5
```

### Accessing and modifying array items

Items in an array are **numbered**, starting from zero. This number is called the _item's index_.

First item has index `0`, the second has index `1`, and so on.

You can access individual items in the array using bracket notation and supplying the item's index, in the same way that you accessed the letters in a string.

Enter the following into your console:

```js
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping[0]);
// returns "bread"
```

You can also modify an item in an array by giving a single array item a new value. Try this:

```js
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
shopping[0] = "tahini";
console.log(shopping);
// shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]
```
### Finding the index of items in an array

If you don't know the index of an item, you can use the indexOf() method.

The indexOf() method takes an item as an argument and will either return the item's index or -1 if the item is not in the array:

```js
const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl")); // 2
console.log(birds.indexOf("Rabbit")); // -1
```

### Adding items

To add one or more items to the end of an array we can use `push()`.

**Note that you need to include one or more items that you want to add to the end of your array.**

```js
const cities = ["Manchester", "Liverpool"];
cities.push("Cardiff");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff" ]
cities.push("Bradford", "Brighton");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton" ]
```

The new length of the array is returned when the method call completes.

If you wanted to store the new array length in a variable, you could do something like this:

```js
const cities = ["Manchester", "Liverpool"];
const newLength = cities.push("Bristol");
console.log(cities); // [ "Manchester", "Liverpool", "Bristol" ]
console.log(newLength); // 3
```

To add an item to the start of the array, use `unshift()`:

```js
const cities = ["Manchester", "Liverpool"];
cities.unshift("Edinburgh");
console.log(cities); // [ "Edinburgh", "Manchester", "Liverpool" ]
```

### Removing items

To remove the last item from the array, use `pop()`.

```js
const cities = ["Manchester", "Liverpool"];
cities.pop();
console.log(cities); // [ "Manchester" ]
```
If you know the index of an item, you can remove it from the array using `splice()`:

```js
Copy to Clipboard
const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const index = cities.indexOf("Liverpool");
if (index !== -1) {
cities.splice(index, 1);
}
console.log(cities); // [ "Manchester", "Edinburgh", "Carlisle" ]
```

In this call to `splice()`, the first argument says where to start removing items, and the second argument says how many items should be removed.

So you can remove more than one item:

```js
const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const index = cities.indexOf("Liverpool");
if (index !== -1) {
  cities.splice(index, 2);
}
console.log(cities); // [ "Manchester", "Carlisle" ]
```

# JavaScript Math Methods

Let's take a look deeper at two of JavaScript’s number data types: **Floats** and **Integers** and some built in JavaScript methods we can use with them.

### To review:

Integers are whole numbers, and Floats are floating point numbers (decimal numbers).

## Integers + Simple Math Calculations

First, inside a ` <script>`` tag in the  `<head>` of our document, let’s declare some global variables. You can read more about variable scope here.

```js
var x = 15;
var y = 35;
```

Notice both of these variables start off as Integers. We will introduce Floats in a bit.

Now we can perform some simple math operators and log them out to our console. Notice how similar to algebra this all looks:

addition +

```js
console.log(x + y);
```

subtraction -

```js
console.log(y - x);
```

multiplication \*

```js
console.log(x * y);
```

division /

```js
console.log(y / x);
```

Lets also take a look at the modular operator. The _modular operator_ `%` returns the division remainder. This is helpful if we want to use even numbers, or every nth number by checking remainders.

```js
console.log(y % x);
```

35/15 is 2 with a remainder of 5. Modulo will return the remainder 5!

We can also write longer math expressions just like we did in algebra. Here to execute our addition first we need to group it in parentheses.

```js
console.log((x + y) * y - 1);
```

## Incrementing and Decrementing Numbers

Sometimes we need to increase or decrease a number by 1, or any other number. Perhaps for a counter of sorts, or in a for loop.

increment by 1 ++

```js
x++;
console.log(x);
```

increment by any other number +=N

```js
x = x += 5;
console.log(x);
```

we can also decrement by 1 or any other number

```js
y--;
console.log(y);

y = y -= 5;
console.log(y);
```
## Floating point number data types and Built in Math Functions

We can access JavaScripts Math object’s built in methods (functions) at any time using the Math Object name and then dot notation to access an individual method We will go over JavaScript Objects and JSON soon, and all will be much clearer.

Declare var z and assign it a floating point value

```
 var z = 2.25;
```

#### Math.floor() rounds a float DOWN to nearest Int

```js
var zf = Math.floor(z);
console.log(zf);
```

Declare var n and assign it a floating point value

```js
var n = 5.35;
```

#### Math.ceil() rounds a float UP to nearest Int

```js
var nc = Math.ceil(n);
console.log(nc);
```

#### Math.round() rounds up or down to the nearest whole number

```js
var num1 = 2.2;
var num2 = 2.7;
console.log(Math.round(num1));
console.log(Math.round(num2));
```

### Math.random(); When in doubt grab a random number!

Math.random returns a random float between 0 and 1

```js
var r = Math.random();
console.log(r);
```
