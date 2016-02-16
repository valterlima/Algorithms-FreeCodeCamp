// Return the length of the longest word in the provided sentence.

'use strict';

function findLongestWord(str) {
  var arrays = str.split(' ');
  var size = 0;
  arrays.filter( (n) => {
    if (n.length > size) size = n.length;
  });
  return size;
}

findLongestWord("The quick brown fox jumped over the lazy dog"); // 6.
findLongestWord("May the force be with you"); // 5.
findLongestWord("Google do a barrel roll"); // 6.
findLongestWord("What is the average airspeed velocity of an unladen swallow"); // 8.
findLongestWord("What if we try a super-long word such as otorhinolaryngology"); // 19.