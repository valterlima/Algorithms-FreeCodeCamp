// Return the provided string with the first letter of each word capitalized. 
// Make sure the rest of the word is in lower case.

function titleCase(str){
  var words = str.toLowerCase().split(' ');
  return words.map(function(item, index){
    var word = item.split('');
    word[0] = word[0].toUpperCase();
    return word.join('');
  }).join(' ');
}

titleCase("I'm a little tea pot"); // "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt"); // "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"); // "Here Is My Handle Here Is My Spout".