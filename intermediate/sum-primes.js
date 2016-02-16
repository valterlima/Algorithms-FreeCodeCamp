// Sum all the prime numbers up to and including the provided number.

// Sieve of Eratosthenes
function primesUpTo(n){
	var numbers = [];

	for(var i = 2; i <= n; i++){
		numbers.push(i);
	}
	var primes = numbers.slice();

	numbers.forEach(function(item){
		primes = primes.filter(function(i){
			return (i % item !== 0) || i === item;
		})
	})

	return primes.reduce(function(prev, elem){
		return prev += elem;
	});
}

sumPrimes(10); // 17.
sumPrimes(977); // 73156.