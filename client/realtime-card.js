class Card {
    constructor(y,text,color,textColor) {
        this.text = text
        this.img = document.createElement('img')
        this.img.position = 'absolute'
        this.w = (window.innerWidth>window.innerHeight)?window.innerWidth/2:window.innerWidth
        this.img.top = y
        this.img.left = window.innerWidth/2-this.w/2
        document.body.appendChild(this.img)
        this.textColor = textColor
        this.textComponents = []
    }
    createTextComponents(canvas,context) {
        var msg = ""
        var y = this.w/10,x = this.w/10
        for(let token of this.text.split(" ")) {
            const wText = context.measureText(msg+token).width
            if(wText > 4*this.w/5) {
                this.textComponents.push(new TextComponent(msg,x,y))
                msg = token
                y += this.w/8
            }
            else {
                msg += token
            }
        }
        this.textComponents.push(new TextComponent(msg,x,y))
        canvas.height = y+this.w/8
    }
    create() {
        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d')
        canvas.width = this.w
        context.font = context.font.replace(/\d{2}/,`${this.w/10}`)
        this.createTextComponents(canvas,context)
        context.fillStyle = this.color
        context.fillRect(0,0,canvas.width,canvas.height)
        this.textComponents.forEach((textComponent)=>{
            textComponent.draw(context)
        })
        this.img.src = canvas.toDataURL()
    }
}
class TextComponent {
    constructor(text,textColor,x,y) {
        this.x = x
        this.y = y
        this.text = text
        this.textColor = textColor
    }
    draw(context) {
        context.fillStyle = this.textColor
        context.fillText(text,x,y)
    }
}
