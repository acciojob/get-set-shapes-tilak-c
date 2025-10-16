//complete this code
class Rectangle {
	constructor(_width,_height){
		this._width=_width;
		this._height=_height;
	}
	get width(){
		return this._width;
	}
	get height(){
		return this._height;
	}
	getArea(){
		return this._width*this._height;
	}
}

class Square extends Rectangle {
	constructor(_side){
		super(_side,_side);
		this._side=_side;
	}
	getPerimeter(){
		return 4*this._side;
	}
	
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
