// We'll pass you an array of two numbers. 
// Return the sum of those two numbers and all numbers between them.

function sumAll(arr){
	var max = Math.max.apply(null,arr);
  var min = Math.min.apply(null,arr);

  // (An + A1) * N / 2
  return (max+min)*(max-min+1)/2;
}

sumAll([1, 4]); // 10.
sumAll([4, 1]); // 10.
sumAll([5, 10]); // 45.
sumAll([10, 5]); // 45.