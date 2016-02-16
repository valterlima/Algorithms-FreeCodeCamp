// Create a function that looks through an array (first argument) and returns the 
// first element in the array that passes a truth test (second argument).

function find(arr, func) {
  return arr.find(function(item){
  	return func(item);
  });
}

find([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }); // 8.
find([1, 3, 5, 9], function(num) { return num % 2 === 0; }); // undefined.