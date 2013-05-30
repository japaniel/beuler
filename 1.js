// http://projecteuler.net/problem=1
////////////////////////////////////

var result = 0;

Number.prototype.isMultipleof = function (num) {
	if (this % num === 0) {
		return true;
	}
	return false;
}

for (var i = 1; i < 1000; i++) {
	if (i.isMultipleof(3) || i.isMultipleof(5) ) {
		result += i;
	}
}

console.log(result);
