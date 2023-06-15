## Button

The button is used to initiate a closed-loop operation task, such as "delete" an object or "purchase" a product.

### Fill Button

The primary button is typically used to highlight the highest priority action that the user should take on a webpage, guiding their attention and prompting them to proceed with the action.

### Text Button

A text button is a button that uses plain text as its content. It is visually the least attention-grabbing type of button and is commonly used in areas such as table action bars, alongside headings, or next to fields.

``` yhht-plus-demo

/src/docs/button/button-text-EN.vue

```

### Outline Button

An outline button is commonly designed with a white background and text. It has a lower visual emphasis compared to a filled button and is often used in combination with filled buttons as a group.

### Dashed Button

The button border is a dashed line, commonly used for adding configuration items in forms. 

``` yhht-plus-demo

/src/docs/button/button-outline-EN.vue

```
### The shape and size of the button

There are three sizes available: large, medium (default), and small.

There are four shapes available: rectangle, rounded rectangle, circle, and square. 

``` yhht-plus-demo

/src/docs/button/button-shape-size-EN.vue

```

### Block Button

The "block" button expands its width to fill its parent container (with no padding or margin values). This type of button is commonly used in mobile applications and certain form scenarios.

!!! warning 

Circular buttons will be disabled.

!!!

``` yhht-plus-demo

/src/docs/button/button-block-EN.vue

```


### Attributes

| Name     | Description                                                         | Type    | Default    | Accepted Values                                     |
| :------- | :----------------------------------------------------------- | :------ | --------- | ------------------------------------------ |
| block    | Is it a block-level element                                               | Boolean | false     | true                                       |
| disabled | Is the button disabled                                                 | Boolean | false     | true                                       |
| shape    | The button shape has four options: rectangle, square, rounded rectangle, and circle. The available options are: rectangle, square (not supported), rounded rectangle, and circle.  | String  | rectangle | rectangle、square，round、circle           |
| size     | Component sizes                                      | String  | medium    | small、medium、large                       |
| theme    | Component styles, in order: default, primary, danger, warning, success. The available options are: default, primary, danger, warning, success. | String  | default   | default、primary、danger、warning、success |
| variant  | Button styles include: base, outline, dashed, and text. The available options are: base, outline, dashed, and text. | String  | base      | base、outline，dashed、text                |
| loading  | Is it displayed in a loading state         | Boolean | false     | true                                       |

