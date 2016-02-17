// Translate the provided string to pig latin.
// Pig Latin takes the first consonant (or consonant cluster) of an English word, 
// moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end

function translate(str) {
  const vowels = ['a','e','i','o','u'];

  var consoant = '';
  var result = '';
  var array = str.split('');

  array.every(function(item, index, array){
    if (vowels.indexOf(item) >= 0){
      //If it starts with Vowel, return the result ASAP
      if (index === 0){
        result = str+'way';
        return false;
      }

      if (consoant != ''){
        result = array.splice(index).join('') + consoant + 'ay';
        return false;
      }
      
    }
    else{
      consoant += item;
      return true;
    }
  });

  return result;
}

translate("california"); // "aliforniacay".
translate("paragraphs"); // "aragraphspay".
translate("glove"); // "oveglay".
translate("algorithm"); // "algorithmway".
translate("eight"); // "eightway".