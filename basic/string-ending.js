// Check if a string (first argument) ends with the given target string (second argument).

function end(str, target) {
  var strSize = str.length;
  var targetSize = target.length;
  return (str.substr(strSize-targetSize, targetSize) === target);
}

end("Bastian", "n"); // true.
end("Connor", "n"); // false.
end("Walking on water and developing software from a specification are easy if both are frozen", "specification"); // false.
end("He has to give me a new name", "name"); // true.
end("He has to give me a new name", "me"); // true.
end("He has to give me a new name", "na"); // false.
end("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"); // false.