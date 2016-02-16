// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both
// forward and backward, ignoring punctuation, case, and spacing.

function palindrome(str) {
  var copy = str.toLowerCase().split('');
  copy = copy.filter(function(item){
    return !(item == ' ' || item == ',' || item == '.' || item == '_' || 
           item == '(' || item == ':' || item == '-' || item == '/' || item == '\\');
  });
  var length = copy.length;
  for (var i = 0; i < length; i++){
    if (copy[i] !== copy[length-1-i]){
      return false;
    }
  }
  return true;
}

palindrome("eye");//  true.
palindrome("race car"); // true.
palindrome("not a palindrome"); // false.
palindrome("A man, a plan, a canal. Panama"); // true.
palindrome("never odd or even"); // true.
palindrome("nope"); // false.
palindrome("almostomla"); // false.
palindrome("My age is 0, 0 si ega ym."); // true.
palindrome("1 eye for of 1 eye."); // false.
palindrome("0_0 (: /-\ :) 0-0"); // true.