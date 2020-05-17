class Base {
	choque(obj){
		if(this.fondo < obj.y || this.y > obj.fondo || this.derecha < obj.x || this.x > obj.derecha){
			return false;
		} else {
			return true;
		}
	}
}