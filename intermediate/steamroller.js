// Flatten a nested array. You must account for varying levels of nesting.

function steamroller(arr) {
	var result = [];

	var flatten = function(arg){
		if (!Array.isArray(arg)){
	  	result.push(arg);
	  }
	  else{
	    arg.forEach(function(item){
	    	flatten(item);
	    });
	  }
	}
  arr.forEach(flatten);

  return result;
}  

steamroller([[["a"]], [["b"]]]); // ["a", "b"].
steamroller([1, [2], [3, [[4]]]]); // [1, 2, 3, 4].
steamroller([1, [], [3, [[4]]]]); // [1, 3, 4].
steamroller([1, {}, [3, [[4]]]]); // [1, {}, 3, 4].