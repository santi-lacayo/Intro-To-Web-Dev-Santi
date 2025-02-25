# Notes for Feb 25th

## About page
- href = reference folder
- ../ goes back
- / goes to the next folder
- ./ current folder you are in

## Intro to CSS
- Describes how HTML elements are able to be displayed in screen
- A css rule consists of a selector and a declaration block
- CSS saves a lot of work. It can control the layout of multiple web pages all at once

### Example
```html 
<style>
  p {
    color: red;
    text-align: center;
  }
</style>
```

- p is a selector in CSS
- color is a property, and red is the property value
- text-align is a property, and center is the property value

### Basic Commands
- The element selector selects HTML elements based on the element name <p>
- The id selector uses the id attribute of an HTML element to select a specific element, write a hash (#) character, followed by the id of the element
- The class selector selects HTML elements with a specific class attribute, to select elements with a specific class, write a period (.) character, followed by the class name
- The universal selector selects all the HTML elements of the page, to use it you need *
- The grouping selector selects all the HTML elements with the same style definitions

### Adding CSS
External CSS
-  You can change the look of an entire website by changing just one file
- Each HTML page must include a reference to the external style sheet file inside the element
- They must be saved with the extension .css

Internal CSS
- An internal style sheet may be used if one single HTML page has a unique style.
- The internal style is defined inside the ``` <style> ``` element, inside the head section
