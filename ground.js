class Ground{

constructor(){
var option = {
    isStatic:true
}

this.body = Bodies.rectangle(200,380,400,10,option)
World.add(world,this.body)

}
display(){
    var pos = this.body.position
rectMode(CENTER)
fill ("blue")
rect (pos.x,pos.y,400,10)

}

}