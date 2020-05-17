class Paleta extends Base {
	constructor(x){
		super();
		this.x = x;
		this.w = 25;
		this.h = tamanoPaleta;
		this.y = Math.floor(Math.random() * superficie);
		this.dir = 0;
	}
	dibujar(){
		ctx.fillRect(this.x,this.y,this.w,this.h);
	}
	mover(){
		this.y+=this.dir;
		this.derecha = this.w+this.x;
		this.fondo = this.h+this.y;
		if(this.y <= 0){
			this.y = 0;
			this.dir = 0;
		}
		if(this.y >= superficie){
			this.y = superficie;
			this.dir = 0;
		}
	}
}