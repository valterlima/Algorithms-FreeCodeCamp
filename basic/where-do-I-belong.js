// Return the lowest index at which a value (second argument) should 
// be inserted into an array (first argument) once it has been sorted.

function where(arr, num) {
  arr.push(num);
  // Order array ascending
  var sorted = arr.sort(function(a,b) { return a-b; });
  return sorted.indexOf(num);
}

where([10, 20, 30, 40, 50], 35); // 3.
where([10, 20, 30, 40, 50], 30); // 2.
where([40, 60], 50); // 1.
where([3, 10, 5], 3); // 0.
where([5, 3, 20, 3], 5); // 2.
where([2, 20, 10], 19); // 2.
where([2, 5, 10], 15); // 3.