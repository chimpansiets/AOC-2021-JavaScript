const fs = require('fs');

var file = fs.readFileSync('./input.txt').toString().split('\n'),
	increases = 0;

for (var i = 0; i < file.length - 2; i++) {

	/*
	**	Loop option: More easily adaptable, but less efficient.
	*/

	let sumFirstSlide = 0;

	for (var j = 0; j < 3; j++) {
		sumFirstSlide += parseInt(file[i+j])
	}

	let sumSecSlide = 0;

	for (var j = 1; j < 4; j++) {
		sumSecSlide += parseInt(file[i+j])
	}

	/*
	**	Hardcoded addition (currently commented): More efficient, but not modular.
	**	If you have any tips for a cleaner/better way, please share 
	**	since my JS knowledge is fairly rusty at the moment.
	*/
	
	// let sumSecSlide = parseInt(file[i+1]) + parseInt(file[i+2]) + parseInt(file[i+3]),
	// 	sumFirstSlide = parseInt(file[i]) + parseInt(file[i+1]) + parseInt(file[i+2]);

	if (sumSecSlide > sumFirstSlide) {
		increases++;
	}
}

console.log(increases);