class DragNDrop {
    constructor (node, top = 0, right = 0, bottom = 0, left = 0) {
        node.draggable = true;
        node.addEventListener('dragstart', event => {
            this.offsetTop = event.clientY;
            this.offsetLeft = event.clientX;
        });
        node.addEventListener('dragend', event => {
            var {height, width} = this.canvas;
            this.availHeight = height > node.offsetHeight + bottom ? height - node.offsetHeight - bottom : 0;
            this.availWidth = width > node.offsetWidth + right ? width - node.offsetWidth - right : 0;
            this.offsetTop = node.offsetTop + event.clientY - this.offsetTop;
            this.offsetLeft = node.offsetLeft + event.clientX - this.offsetLeft;
            this.offsetTop = this.offsetTop < top ? top : this.offsetTop > this.availHeight ? this.availHeight : this.offsetTop;
            this.offsetLeft = this.offsetLeft < this.offsetLeft ? this.offsetLeft : this.offsetLeft > this.availWidth ? this.availWidth : this.offsetLeft;
            node.style.top = this.offsetTop + 'px';
            node.style.left = this.offsetLeft + 'px';
            if (typeof this.ondragend === 'function') {
                this.ondragend(event);
            }
        });
    }
    get canvas () {
        var Document = document.documentElement;
        return {height: Document.clientHeight, width: Document.clientWidth};
    }
}
