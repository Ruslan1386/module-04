function addKeyboardLayout(alphabet){ 

//const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
alphabet.split('');
let keyboard = [];
keyboard.length = 3;
for(let index = 0; index < alphabet.length; index++){	
	let String1Keyboard = alphabet.slice(0,9);
	let String2Keyboard = alphabet.slice(9,18);
	let String3Keyboard = alphabet.slice(18,alphabet.length);
	keyboard[0] = String1Keyboard.split('');
	keyboard[1] = String2Keyboard.split('');
	keyboard[2] = String3Keyboard.split('');
	break;
};

for (let i = 0; i < keyboard.length; i++){		
	for (let j = 0; j < keyboard.length + 9; j++){
		//document.write (i + ':' + j + ': ' + keyboard[i][j] + '<br>');
	};
};
return keyboard;
};
console.log(addKeyboardLayout("qwertyuiopasdfghjklzxcvbnm"));

function getRandCharInRow(row){
	let keyboard = addKeyboardLayout("qwertyuiopasdfghjklzxcvbnm");
	let n = Math.floor(Math.random() * (9 - 0) + 0);
	let letter = keyboard[row][n];
return letter;
};
console.log(getRandCharInRow(1));

function getRandCharInAlph(){
	let keyboard = addKeyboardLayout("qwertyuiopasdfghjklzxcvbnm");
	let i = Math.floor(Math.random() * (2 - 0) + 0);
	let j = Math.floor(Math.random() * (9 - 0) + 0);
	let letter = keyboard[i][j];
return letter;
};
console.log(getRandCharInAlph());

