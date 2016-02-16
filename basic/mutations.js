// Return true if the string in the first element of the array contains 
// all of the letters of the string in the second element of the array.

function mutation(arr) {
  
  arr = arr.map(function(item){
  	return item.toLowerCase();
  });

  //'some' returns true if the condition of not having the current letter is true
  return !arr[1].split('').some(function(letter){
  	return arr[0].indexOf(letter) < 0;
  })
}

mutation(["hello", "hey"]); // false.
mutation(["hello", "Hello"]); // true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]); // true.
mutation(["Mary", "Army"]); // true.
mutation(["Mary", "Aarmy"]); // true.
mutation(["Alien", "line"]); // true.
mutation(["floor", "for"]); // true.
mutation(["hello", "neo"]); // false.