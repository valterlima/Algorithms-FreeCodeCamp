// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

function every(collection, pre) {
  return collection.every(function(item){
  	return item.hasOwnProperty(pre) && Boolean(item[pre]);
  });
}

every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); // true.
every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); // false.
every([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"); // false.
every([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat"); // false
every([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat"); // true
every([{"single": "yes"}], "single"); // true
every([{"single": ""}, {"single": "double"}], "single"); // false
every([{"single": "double"}, {"single": undefined}], "single"); // false
every([{"single": "double"}, {"single": NaN}], "single"); // false