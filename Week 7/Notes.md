# Divs
The ```<div>``` is used as a container for other HTML

It is by default a block element, meaning it takes all the available width
```html
<div>
  <h2>London</h2>
  <p>London is the capital city of England.</p>
  <p>London has over 9 million inhabitants.</p>
</div>
```
## Float
It wasn't properly made to align ```<div>```elements, but it has been used like that. It allows elements to be placed horizontally
## Grid
The CSS Grid Layout Module offers a grid-based layout system, with rows and columns

The CSS grid method requires that you surround the ```<div>``` elements with another ```<div>``` element and give the status as a grid container
```html
.grid-container {
  display: grid;
  grid-template-columns: 33% 33% 33%;
}
````
# Classes
It is used to specify a class for an html element, multiple elements can share the same class

The class attribute is often used to point to a class name in a style sheet. It can also be used by a JavaScript to access and manipulate elements with the specific class name

## Syntax
To create a ```class```; write a period (```.```) character, followed by a class name. Then, define the CSS properties within curly braces ```{}```:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .city {
        background-color: tomato;
        color: white;
        padding: 10px;
      }
    </style>
  </head>
  <body>
    <h2 class="city">London</h2>
    <p>London is the capital of England.</p>

    <h2 class="city">Paris</h2>
    <p>Paris is the capital of France.</p>
  </body>
</html>
```
You can have multiple ```clases```, separate them with spaces
