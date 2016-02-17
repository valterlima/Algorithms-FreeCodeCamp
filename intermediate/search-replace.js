//Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).

function myReplace(str, before, after) {
  var b = before.split('');
  var a = after.split('');
  if (b[0] === b[0].toUpperCase()){
    a[0] = a[0].toUpperCase();
  }
  else if (b[0] === b[0].toLowerCase()){
    a[0] = a[0].toLowerCase();
  }
  after = a.join('');

  return str.replace(before, after);
}

myReplace("Let us go to the store", "store", "mall"); // "Let us go to the mall".
myReplace("He is Sleeping on the couch", "Sleeping", "sitting"); // "He is Sitting on the couch".
myReplace("This has a spellngi error", "spellngi", "spelling"); // "This has a spelling error".
myReplace("His name is Tom", "Tom", "john"); // "His name is John".
myReplace("Let us get back to more Coding", "Coding", "algorithms"); // "Let us get back to more Algorithms".