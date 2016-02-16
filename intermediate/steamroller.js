'use strict';

function steamroller(arr) {

  return arr.map(function(item){
  	console.log(item);
  	while(Array.isArray(item)){
  		item = item.push(...item)
  	}
  	return item;
  });
}

var a = steamroller([1, [2], [3, [[4]]]]);
console.log(a);
