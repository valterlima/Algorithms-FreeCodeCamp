// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  var missing = undefined;
  for(var i = 0; i < str.length; i++){
  	if (str.charCodeAt(i) !== str.charCodeAt(i+1) - 1){
  		missing = str.charCodeAt(i+1)-1;
  		break;
  	}
  }
  return (missing) ? String.fromCharCode(missing) : undefined;
}

fearNotLetter("abce"); // "d".
fearNotLetter("abcdefghjklmno"); // "i".
fearNotLetter("bcd"); // undefined.
fearNotLetter("yz"); // undefined.