//Variables globales
var bucle;
var velocidad = 5;
var canvas = document.getElementById("canvas");
var areaW = canvas.width;
var areaH = canvas.height;
var ctx = canvas.getContext("2d");
var puntosj1 = 0;
var puntosj2 = 0;
var tamanoPaleta = 75;
var superficie = areaH-tamanoPaleta;
//Clases






//objetos
var bola = new Bola();
var jugador1 = new Paleta(30);
var jugador2 = new Paleta(545);
//funciones de control
function moverPaletas(event){
	var tecla = event.keyCode;
	if(tecla == 38){
		jugador2.dir = -velocidad;
	}
	if(tecla == 40){
		jugador2.dir = velocidad;
	}
	if(tecla == 87){
		jugador1.dir = -velocidad;
	}
	if(tecla == 83){
		jugador1.dir = velocidad;
	}
}
function pararPaletas(event){
	var tecla = event.keyCode;
	if(tecla == 38 || tecla == 40){
		jugador2.dir = 0;
	}
	if(tecla == 87 || tecla == 83){
		jugador1.dir = 0;
	}
}

function choque(){
	if(bola.choque(jugador1) || bola.choque(jugador2)){
		bola.xdir = -bola.xdir;
	}
}
//funciones globales
function dibujar(){
	ctx.clearRect(0,0,areaW, areaH);
	bola.dibujar();
	jugador1.dibujar();
	jugador2.dibujar();
	
}
function frame(){
	bola.mover();
	jugador1.mover();
	jugador2.mover();
	dibujar();
	choque();
	bucle = requestAnimationFrame(frame);
}
function iniciar(){
	var modal = document.getElementById("modal");
	modal.style.display = "none";
	frame();
}

