# Notes for Feb 27th
## Navigation Bar
With css you can transform boring HTML menus into navigation bars

**Navigation bars don't need bullets**
You can remove bullets using css

```list-style-type: none;``` do it inside css ```ul```

## Basic commands
```display: inline;``` Removes line breaks before and after each item

```display: block;``` Allows us to specify padding (and height, width, margins, etc. if you want)

```padding: 8px;``` Specify some padding between each ```<a>``` element, to make them look good

```border-right/left``` Make dividers
## Box Model
They affect all visual content of your website
and understanding these boxes is key to being able to create more complex layouts with CSS, or to align items with other items
### Parts of Box Models
- Content box: The area where your content is displayed; size it using properties like width and height
- Padding box: The padding sits around the content as white space; size it using padding and related properties
- Border box: The border box wraps the content and any padding; size it using border and related properties
- Margin box: The margin is the outermost layer, wrapping the content, padding, and border as whitespace between this box and other elements; size it using margin and related properties

```display: inline-block;``` Makes a block in between lines
```display: block;``` Displays block in another line