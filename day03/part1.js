const fs = require('fs');

var file = fs.readFileSync('./input.txt').toString().split('\n'),
	binaryLength = file[0].length,
	gammaRate = "",
	epsilonRate = "";

for (let i = 0; i < binaryLength; i++) {
	var zeroCount = 0,
		oneCount = 0;
	
	for (let j = 0; j < file.length; j++) {
		if (file[j][i] == '0') {
			zeroCount++;
		} else if (file[j][i] == '1') {
			oneCount++;
		}
	}

	if (zeroCount >= oneCount) {
		gammaRate += "0";
		epsilonRate += "1";
	} else {
		gammaRate += "1";
		epsilonRate += "0";
	}
}

console.log(parseInt(gammaRate, 2) * parseInt(epsilonRate, 2))