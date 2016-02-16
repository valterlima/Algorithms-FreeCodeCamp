// Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

function sumFibs(num) {
  var fibs = [];
  fibs[0] = 0;
  fibs[1] = 1;
  fibs[2] = 1;
  for (var i = 2; i <= num; i++){
    fibs[i] = fibs[i-1] + fibs[i-2];
  }
  
  return fibs.reduce(function(prev, elem){
  	if (elem % 2 !== 0 && elem <= num){
  		prev += elem;
  	}
  	return prev;
  });
}

sumFibs(1000); // 1785.
sumFibs(4000000); // 4613732.
sumFibs(4); // 5.
sumFibs(75024); // 60696.
sumFibs(75025); // 135721.