// Reverse the provided string.

function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString("hello"); // "olleh"
reverseString("Howdy"); // "ydwoH"
reverseString("Greetings from Earth"); //"htraE morf sgniteerG"