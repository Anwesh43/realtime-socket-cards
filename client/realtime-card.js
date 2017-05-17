class RealTimeCard {
    constructor(text,color,textColor) {
        this.text = text
        this.img = document.createElement('img')
        this.img.style.position = 'absolute'
        this.w = (window.innerWidth<window.innerHeight)?window.innerWidth:window.innerWidth/2
        this.img.style.top = 0
        this.img.style.left = window.innerWidth/2-this.w/2
        document.body.appendChild(this.img)
        this.textColor = textColor
        this.textComponents = []
        this.color = color
    }
    createTextComponents(canvas,context) {
        var msg = ""
        var y = this.w/10,x = this.w/10
        for(let token of this.text.split(" ")) {
            const wText = context.measureText(msg+token).width
            if(wText > 4*this.w/5) {
                const wMsg = context.measureText(msg).width
                this.textComponents.push(new TextComponent(msg,this.textColor,this.w/2-wMsg/2,y))
                msg = token
                y += this.w/15
            }
            else {
                msg += " "+token
            }
        }
        const wMsg = context.measureText(msg).width
        this.textComponents.push(new TextComponent(msg,this.textColor,this.w/2-wMsg/2,y))
        canvas.height = y+this.w/15
        context.font = context.font.replace(/\d{2}/,`${this.w/17}`)
    }
    create() {
        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d')
        canvas.width = this.w
        context.font = context.font.replace(/\d{2}/,`${this.w/17}`)
        console.log(context.font)
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
        console.log(this.text)
        context.fillStyle = this.textColor
        context.fillText(this.text,this.x,this.y)
    }
}
