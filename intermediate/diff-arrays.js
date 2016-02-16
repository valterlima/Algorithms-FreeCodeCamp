// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
// In other words, return the symmetric difference of the two arrays.

function diff(arr1, arr2) {

  // Union - Intersection = Difference

  var intersect = arr1.filter(function(item){
    return arr2.indexOf(item) >= 0;
  });

  var union = arr1.concat(arr2);

  return union.filter(function(item, pos){
  	return (intersect.indexOf(item) < 0);
  });
}

diff(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], 
	["diorite", "andesite", "grass", "dirt", "dead shrub"]); // ["pink wool"].

diff(["andesite", "grass", "dirt", "pink wool", "dead shrub"], 
	["diorite", "andesite", "grass", "dirt", "dead shrub"]); // ["diorite", "pink wool"].

diff(["andesite", "grass", "dirt", "dead shrub"], 
	["andesite", "grass", "dirt", "dead shrub"]); // [].

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]); // [4].

diff([1, "calf", 3, "piglet"], [1, "calf", 3, 4]); // ["piglet", 4].

diff([], ["snuffleupagus", "cookie monster", "elmo"]); // ["snuffleupagus", "cookie monster", "elmo"].

diff([1, "calf", 3, "piglet"], [7, "filly"]); // [1, "calf", 3, "piglet", 7, "filly"].
