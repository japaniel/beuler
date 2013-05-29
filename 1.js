// http://projecteuler.net/problem=1
////////////////////////////////////

var results = [];

for (var i = 1; i < 1000; i++) {
	if (i % 3 === 0 || i % 5 === 0) {
		results.push(i)
	}
}

result = results.join(', ');
console.log(result);
