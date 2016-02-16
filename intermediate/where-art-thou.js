// Make a function that looks through an array of objects (first argument) and returns an array of all objects
// that have matching property and value pairs (second argument). 
// Each property and value pair of the source object has to be present in the object 
// from the collection if it is to be included in the returned array.

function where(collection, source) {
  var arr = [];
  arr = collection.filter(function(item){
  	var keys = Object.keys(source);
    return keys.every(function(item2){
    	return item.hasOwnProperty(item2) && item[item2] == source[item2];;
    });
  });
  return arr;
}

where(
  [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
  { last: "Capulet" }); // [{ first: "Tybalt", last: "Capulet" }].
where(
  [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], 
  { "a": 1 }); // [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
where(
  [{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], 
  { "a": 1, "b": 2 }); // [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
where(
  [{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], 
  { "a": 1, "c": 2 }); // [{ "a": 1, "b": 2, "c": 2 }].