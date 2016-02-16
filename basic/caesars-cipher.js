// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
// In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
// Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

function rot13(str) {
  var array = str.split('');
  var chipered = array.map(function(item){
    var code = item.charCodeAt(0);
    if (code < 65 || code > 91)
      return item;
    if (code < 78)
      code += 13;
    else
      code -= 13;
    return String.fromCharCode(code);
    });
  return chipered.join('');
}

rot13("SERR PBQR PNZC"); // "FREE CODE CAMP"
rot13("SERR CVMMN!"); // "FREE PIZZA!"
rot13("SERR YBIR?"); // "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."); // "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."