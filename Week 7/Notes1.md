# Image Styling
## Sizing Images
As everything in css generates a box, it is important to knwo what you should do when an image overflows or is smaller than a box. To solve thiss issue we can use ```max-width``` of an image 100%, to let the image become smaller than the box, but never larger

If you want it to completely fill the space of the box you can use ```object-fit``` 
## Rounded Images
You can use ```border-radius``` to create rounded images
## Thumbnail Images
Use the ```border``` property to create thumbnails
## Responsive Images
They automatically adjust to fit the size of the screen ```height: auto;````
## Transparent Image
Use the ```opaicty``` property which takes value from 0.0 to -1.0
## Text in Image
You can add text inside of an image by:
```html
<div class="textContainer">
      <img
        class="textImg"
        src="img_5terre_wide.jpg"
        alt="Cinque Terre"
        width="1000"
        height="300"
      />
      <div class="textCenter">Centered</div>
      <div class="bottomleft">Bottom Left Text</div>
      <div class="bottomright">Bottom Right Text</div>
      <div class="topright">Top Right Text</div>
      <div class="topleft">Top Left Text</div>
    </div>
```
By making a container, and puting the text inside it, the text becomes part of the image
## Image overlays
You can use ```hover``` to add effects to your images when hovering, such as slide, opacity, flip image, etc.

# Transformations (2D)
## translate() 
Moves an image from the position where it's at, it uses parameters for x-axis and y-axis
## rotate() 
Rotates an element clockwise or counterclockwise according to a given degree (use negatives to switch direction)
## scale()
The scale will increase or decrease the size of an element according to width and height parameters
## skew()
Skew element by the given angles, x-axis and y-axis
## matrix()
Combines all the 2D transform into one, use it as follow: matrix(scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY())

##Transformations (3D)
## RotateX()
Rotates element around its X-axis at a given degree
## RotateY()
Rotates element around its Y-axis at a given degree
## RotateZ()
Rotates element around its Z-axis at a given degree

## CSS Transitions
Allow us to change values smoothly
To create one you need:
- The CSS property you want to add the effect to
- The duration of the effect
```html
div {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 2s;
}
````
Then add the value so it performs the effect
```html
div:hover {
  width: 300px;
}
```