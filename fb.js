
f = "Fizz";
b = "Buzz";

function fb(n) {
	if (n == 0) return;
	fb(n - 1);
	if (n % 15 == 0) {
		console.log(f + b);
	} else if (n % 5 == 0) {
		console.log(b);
	} else if (n % 3 == 0) {
		console.log(f);
	} else {
		console.log(n);
	}
}

fb(100);

