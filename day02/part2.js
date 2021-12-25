const fs = require('fs');

var file = fs.readFileSync('./input.txt').toString().split('\n'),
	depth = 0,
	horizontalPosition = 0,
	aim = 0;

for (var i = 0; i < file.length; i++) {
	let instruction = file[i].split(' ')[0],
		steps = parseInt(file[i].split(' ')[1]);
	
	if (instruction == "forward") {
		horizontalPosition += steps;
		depth += (aim * steps)
	} else if (instruction == "down") {
		aim += steps;
	} else if (instruction == "up") {
		aim -= steps;
	}
}

console.log(depth, horizontalPosition);
console.log(depth * horizontalPosition);