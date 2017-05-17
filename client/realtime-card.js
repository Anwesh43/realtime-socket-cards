class Card {
    constructor(y,text) {
        this.text = text
        this.img = document.createElement('img')
        this.img.position = 'absolute'
        this.w = (window.innerWidth>window.innerHeight)?window.innerWidth/2:window.innerWidth
        this.img.top = y
        this.img.left = window.innerWidth/2-this.w/2
        document.body.appendChild(this.img)
    }
    create() {

    }
}
class TextComponent {
    constructor(text,x,y) {

    }
    draw(context) {

    }
}
