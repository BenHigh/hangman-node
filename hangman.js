var Word = require("./word.js");

var Letters = require("./letters.js");

var inq = require("inquirer");

var wrong = 0;

var guessArr = [];

var allGallows = [
["+====+"],
["||   |"],
[["||"], ["||  (_)"]],
[["||"], ["||   |"]],
[["||"], ["|| /||"], ["|| /||\\"]],
[["||"], ["||  /"], ["||  /\\"]],
["========"]];

var curGallow = [];

var oWord;

var pWord;

var done = false;

var chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// function printGal(){
// 	var n = 0;

// 	for(i in allGallows){
// 		if(i >= 2 && i <= 5){
// 			console.log(wrong % n);
// 			curGallow.push(allGallows[i][wrong % n]);
// 			n += allGallows[i].length - 1;
// 		}
// 		curGallow.push(allGallows[i][0]);
// 	}
// 	for(i in curGallow){
// 		console.log(String(curGallow[i]));
// 	}
// }

// function printGallows(){
// 	if(done == true && wrong < 6){
// 		console.log("YOU WIN");
// 		console.log("Press any key to play again");
// 	}else{
// 		if(wrong < 6 && wrong > 0){
// 		  console.log(gArray[wrong][1]);
// 		}else if(wrong!=0){
// 		  console.log("YOU LOSE");
// 		}
// 	}
// }

// function showWord() {
// 	var divword = "";
// 	var tempword = oWord.word.split('');
// 	console.log("wrong " + wrong);

// 	if(wrong == 6){
// 		done = true;
// 	}

// 	for(i in tempword){
// 		if(!guessArr.includes(tempword[i]) && !done){
// 			divword+=" -";
// 		}
// 		else{
// 			divword+=(" "+tempword[i]);
// 		}
// 	}
// 	done = !divword.includes("-");
// 	console.log(divword);
// }

// function updateScore() {
// 	pWord = new Letter(oWord.word);
// 	pWord.setWord(guessArr); 

// 	if(wrong == 6){
// 		done = true;
// 	}

// 	done = !pWord.divword.includes("-");

// 	console.log(pWord.divword);

// 	console.log((6-wrong) + " guesses remaining...");
// 	var spacedguess = guessArr.sort().join(", ");
// 	console.log(spacedguess);
// 	printGal();
// }

function newRound(){
	oWord = new Word();
	runGame();
}

function runGame(){
	console.log(oWord.word);

	var lets = new Letters(oWord.word);
	lets.setWord(guessArr);

	console.log(lets.divword);

	inq.prompt([
		{
			type: "input",
			message: "Guess a letter in the word or the stick guy gets it...",
			name: "guess"
		}
	]).then(function(resp){
		if(chars.includes(resp.guess.toLowerCase())){
			guessArr.push(resp.guess.toLowerCase());
		}else{
			console.log("Enter a valid character")
		}
		runGame();
	});
};

newRound();

