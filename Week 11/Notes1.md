# JavaScript Objects

#### Javascript Object Notation

Let’s write our own JavaScript object and access the properties and their individual variables.

Let’s make a variable to hold our javascript object called customer:

```js
var customer = {};
```

Right now, customer is an empty object. So let’s add a few simple properties:

```js
var customer = {
  firstName: "Tony",
  lastName: "Pony",
};
```

Each property consists of a key and a value, or a key value pair. The syntax is:

```js
var myVar = {
  key: value,
  key: value,
};
```

The key value pairs are separated by commas “,” just like in an Array. Remember to not add a comma after the last key value pair.

The values can be Strings | Integers | Floats | Arrays | other Objects or even Functions. Let’s add some more properties to our customer object. We can do this 2 different ways:

Add an array to our pets key we declare the object:

```js
var customer = {
  firstName: "Tony",
  lastName: "Pony",
  pets: ["Dog", "Cat", "Iguana"],
};
```

Access the firstName property with dot notation

```js
console.log(customer.firstName);
```

Access the second pet in the array

```js
console.log(customer.pets[1]);
```

Add an Integer to our customer object later on in our code (maybe we needed some user form input, or to access our users current geolocation before assigning this property a value):

Add a new property later in our code with dot notation

```js
customer.age = 45;
//log out the entire object to see our added property
console.log(customer);
```
