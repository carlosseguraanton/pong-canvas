class Bola extends Base {
	constructor(){
		super();
		this.t = 25;
		this.x = Math.floor(Math.random() * (areaW - this.t));
		this.y = Math.floor(Math.random() * (areaH - this.t));
		this.xdir = velocidad;
		this.ydir = velocidad;
		this.p1 = new Puntos(25);
		this.p2 = new Puntos(575);
	}
	choqueV(){
		if(this.y <= 0 || this.y >= (areaH -this.t)){
			this.ydir = -this.ydir;
		}
	}
	choqueH(){
		if(this.x <= 0){
			this.xdir = -this.xdir;
			puntosj2++;
			this.p2.punto = puntosj2;
		}
		if(this.x >= (areaW - this.t)){
			this.xdir = -this.xdir;
			puntosj1++;
			this.p1.punto = puntosj1;
		}
	}
	mover(){
		this.x+=this.xdir;
		this.y+=this.ydir;
		this.fondo = this.y+this.t;
		this.derecha = this.x+this.t;
		this.choqueV();
		this.choqueH();
	}
	dibujar(){
		ctx.fillRect(this.x, this.y, this.t, this.t);
		this.p1.dibujar();
		this.p2.dibujar();
	}
}