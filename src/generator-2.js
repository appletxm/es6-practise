function *foo() {
	var x = 10;
	var y = 20;
	
	console.info(x,y)

	yield;

	var z = x + y;
	console.info(z)
}