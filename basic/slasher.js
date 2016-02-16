// Return the remaining elements of an array after chopping off n elements from the head.

function slasher(arr, howMany) {
  return arr.splice(0, howMany);
}

slasher([1, 2, 3], 2); // [3].
slasher([1, 2, 3], 0); // [1, 2, 3].
slasher([1, 2, 3], 9); // [].
slasher([1, 2, 3], 4); // [].
slasher(["burgers", "fries", "shake"], 1); // ["fries", "shake"].
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5); // ["cheese", 4].