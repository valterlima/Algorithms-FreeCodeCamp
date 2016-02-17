// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false

function boo(bool) {
  return Boolean(bool) === bool;
}

boo(true); // true.
boo(false); // true.
boo([1, 2, 3]); // false.
boo([].slice); // false.
boo({ "a": 1 }); // false.
boo(1); // false.
boo(NaN); // false.
boo("a"); // false.
boo("true"); // false.
boo("false"); // false.