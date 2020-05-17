class Puntos {
	constructor(x){
		this.x = x;
		this.y = 25;
		this.punto = 0;
	}
	dibujar(){
		ctx.font = "25px Arial";
		ctx.fillText(this.punto.toString(), this.x, this.y);
	}
}