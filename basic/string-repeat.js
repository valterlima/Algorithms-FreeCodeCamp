// Repeat a given string (first argument) num times (second argument). 
// Return an empty string if num is a negative number.

function repeat(str, num) {
  if (num <= 0)
    return '';
  else
    return str+repeat(str, num-1);
}

repeat("*", 3); // "***".
repeat("abc", 3); // "abcabcabc".
repeat("abc", 4); // "abcabcabcabc".
repeat("abc", 1); // "abc".
repeat("*", 8); // "********".
repeat("abc", -2); // "".