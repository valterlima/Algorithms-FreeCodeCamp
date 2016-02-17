// The DNA strand is missing the pairing element. 
// Take each character, get its pair, and return the results as a 2d array.

var map = {
  'A':'T',
  'T':'A',
  'C':'G',
  'G':'C'
};

function pair(str) {
  var array = str.split('');
  var result = [];
  
  array.forEach(function(item){
    result.push([item,map[item]]);
  });
  
  return result;
}

pair("ATCGA"); // [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pair("TTGAG"); // [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pair("CTCTA"); // [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].