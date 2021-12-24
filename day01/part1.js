const fs = require('fs');

var file = fs.readFileSync('./input.txt').toString().split('\n'),
	increases = 0;

for (var i = 0; i < file.length - 1; i++) {
	let firstNum = parseInt(file[i]),
		secondNum = parseInt(file[i+1]);

	if (secondNum > firstNum) {
		increases++;
	}
}

console.log(increases);