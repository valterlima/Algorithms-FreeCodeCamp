// Drop the elements of an array (first argument), starting from the front, 
// until the predicate (second argument) returns true.

function drop(arr, func) {
	var array = [];
  for(var i = 0; i < arr.length; i++){
  	if (func(arr[i]))
  		array = arr.splice(i,arr.length);
  }
  return array;
}

drop([1, 2, 3, 4], function(n) {return n >= 3;}); // [3, 4].
drop([0, 1, 0, 1], function(n) {return n === 1;}); // [1, 0, 1].
drop([1, 2, 3], function(n) {return n > 0;}); // [1, 2, 3].
drop([1, 2, 3, 4], function(n) {return n > 5;}); // [].
drop([1, 2, 3, 7, 4], function(n) {return n > 3;}); // [7, 4].
drop([1, 2, 3, 9, 2], function(n) {return n > 2;}); // [3, 9, 2].