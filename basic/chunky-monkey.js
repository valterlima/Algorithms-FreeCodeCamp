// Write a function that splits an array (first argument) into groups the length 
// of size (second argument) and returns them as a two-dimensional array.

function chunk(arr, size){
	var tempArray = [];

  return arr.map(function(item){
    if (tempArray.length < size){
    	tempArray.push(item);
    }
    else{
    	return tempArray.splice(0, size);
    }
  })
}

chunk(["a", "b", "c", "d"], 2); // [["a", "b"], ["c", "d"]].
chunk([0, 1, 2, 3, 4, 5], 3); // [[0, 1, 2], [3, 4, 5]].
chunk([0, 1, 2, 3, 4, 5], 2); // [[0, 1], [2, 3], [4, 5]].
chunk([0, 1, 2, 3, 4, 5], 4); // [[0, 1, 2, 3], [4, 5]].
chunk([0, 1, 2, 3, 4, 5, 6], 3); // [[0, 1, 2], [3, 4, 5], [6]].
chunk([0, 1, 2, 3, 4, 5, 6, 7, 8], 4); // [[0, 1, 2, 3], [4, 5, 6, 7], [8]].