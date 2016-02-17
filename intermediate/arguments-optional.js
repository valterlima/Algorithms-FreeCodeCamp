// Create a function that sums two arguments together. 
// If only one argument is provided, then return a function that expects one argument and returns the sum.

function add() {
	var args = (arguments.length === 1) 
    ? [arguments[0]] 
    : Array.apply(null, arguments);

	console.log(args);
	if (args.some(function(number){
		console.log(number, !Number.isInteger(number))
		return !Number.isInteger(number)
		})
	){
		return undefined;
	}

	if (!Number.isInteger(arguments[0]))
		return undefined;
  else if (arguments.length === 2)
    return arguments[0] + arguments[1];
  else if (arguments.length === 1)
  	var x = arguments[0];
    return function(y){
    	if (!Number.isInteger(y))
    		return undefined;
      return x + y;
    }
}

console.log(add(2,3))
console.log(add(2)(3))
console.log(add("http://bit.ly/IqT6zt"))
console.log(add(2, "3"))
console.log(add(2)([3]))

add(2, 3); // 5.
add(2)(3); // 5.
add("http://bit.ly/IqT6zt"); // undefined.
add(2, "3"); // undefined.
add(2)([3]); // undefined.