 function createObject() {
	
 	//assign properties to the object
	this.name = "bala";
	this.height = 180;
	//assign method to return their properties	 
	this.aboutYourSelf = function () {
		return "I am " + this.name + ". I am " + this.height + " cm height";
	}
	return this;
}

var me = createObject();
console.log(me.aboutYourSelf())