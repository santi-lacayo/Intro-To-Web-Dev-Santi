# Media Queries
The ```@media``` makes it possible to define styles for different media types: phone, laptop, ipad

## CSS Media Types
- All: Used for all media type devices
- Print: Used for print preview mode
- Screen: Used for computers, ipads, phones

## Media Query Syntax
A media query consists of a media type and can contain one or more media features, which resolve to either true or false
```css
@media not|only mediatype and (media feature) and (media feature) {
  CSS-Code;
}
```

# Flexbox
Layout method to arrange items in rows or columns 
## Components
- A flex container (the parent container) ```<div>```
- Flex items (everything inside the parent) ```<div>```
## Example
```html
<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```
```css
.flex-container {
  display: flex;
}
```
## Properties 
- Flex direction: Display direction (row, column)
- Flex wrap: How it wraps when screen is bigger smaller (non wrap, wrap, wrap-reverse)
- Flex flow: Shorthand to set both direction and wrap (center, flex-start, flex-end, space-around, space-between, space-evenly)
- Align-items: Align flex items when they don't use all available space (center, flex-start, flex-end, stretch, baseline, normal)
- Align-content: Similar to ```align-items``` but it aligns the flex lines (center, flex-start, flex-end, space-around, space-between, space-evenly) 
### Center element
Set both the ```justify-content``` and ```align-items``` properties to center, and the flex item will be perfectly centered



