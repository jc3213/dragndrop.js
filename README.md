## How to implement
### HTML
```HTML
<script src="https://raw.githubusercontent.com/jc3213/dragndrop.js/main/dragndrop.js"
        integrity="sha256-CH+YUPZysVw/cMUTlFCECh491u7VvspceftzLGzhY3g=" crossorigin="anonymous"></script>
```
### TamperMonkey
```javascript
// @require https://raw.githubusercontent.com/jc3213/dragndrop.js/main/dragndrop.js#sha256-CH+YUPZysVw/cMUTlFCECh491u7VvspceftzLGzhY3g=
```
## Syntax
```javascript
const dragndrop = new DragNDrop(element, top, right, bottom, left);
```
### dragndrop
A javascript object
#### `dragndrop.offsetTop`
Current Top of element
#### `dragndrop.offsetLeft`
Current left of element
#### `dragndrop.availHeight`
Current available height of canvas
#### `dragndrop.availWidth`
Current available width of canvas
### element `*required`
A DOM HTML Element
### top `Optional`
Offset of available top `integer`, `default: 0`
### right `Optional`
Offset of available right `integer`, `default: 0`
### bottom `Optional`
Offset of available bottom `integer`, `default: 0`
### left `Optional`
Offset of available left `integer`, `default: 0`
## Event `Optional`
```javascript
dragndrop.ondragstart = function (event) {}
```
```javascript
dragndrop.ondragend = function (event) {}
```
