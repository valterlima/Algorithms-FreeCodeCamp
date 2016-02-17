// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convert(str) {
  var map = {
    '&':'&amp;', 
    '>':'&gt;', 
    '<':'&lt;', 
    '\'':'&apos;',
    '"':'&quot;'
  };
  
  return str.split('').map(function(item){
    return (Object.keys(map).indexOf(item) >=0) ? map[item] : item;
  }).join('');
}

convert("Dolce & Gabbana"); // Dolce &​amp; Gabbana.
convert("Hamburgers < Pizza < Tacos"); // Hamburgers &​lt; Pizza &​lt; Tacos.
convert("Sixty > twelve"); // Sixty &​gt; twelve.
convert('Stuff in "quotation marks"'); // Stuff in &​quot;quotation marks&​quot;.
convert("Shindler's List"); // Shindler&​apos;s List.
convert("<>"); // &​lt;&​gt;.
convert("abc"); // abc.