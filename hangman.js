var Word = require("./word.js");

var Letters = require("./letters.js");

var inq = require("inquirer");

var guessArr = [];

var allGallows = [
["+====+"],
["||   |"],
[["||"], ["||  (_)"]],
[["||"], ["||   |"]],
[["||"], ["||  /|"], ["||  /|\\"]],
[["||"], ["||   /"], ["||   /|"]],
["========"]];

var curGallow = [];

var wrong = 0;

var oWord;

var pWord;

var done = false;

var chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// function printGal(){
// 	var n = 0;

// 	for(i in allGallows){
// 		if(i >= 2 && i <= 5){
// 			curGallow.push(allGallows[i][wrong % n]);
// 			n += allGallows[i].length - 1;
// 		}
// 		curGallow.push(allGallows[i][0]);
// 	}
// 	for(i in curGallow){
// 		console.log(String(curGallow[i]));
// 	}
// }

function printGallows(){
	if(done == true && wrong < 6){
		console.log("YOU WIN");
		console.log("Press any key to play again");
	}else{
		if(wrong === 6){
			console.log("You lose...");
		}
		for(var i = 0; i < allGallows.length; i++){
			if(i === 2){
				if(wrong >= 1){
					console.log(String(allGallows[i][1]));
				}else{
					console.log(String(allGallows[i][0]));
				}
			}else if(i === 3){
				if(wrong >= 2){
					console.log(String(allGallows[i][1]));
				}else{
					console.log(String(allGallows[i][0]));
				}
			}else if(i === 4){
				if(wrong === 3){
					console.log(String(allGallows[i][1]));
				}else if(wrong >= 4){
					console.log(String(allGallows[i][2]));
				}else{
					console.log(String(allGallows[i][0]));
				}
			}else if(i === 5){
				if(wrong === 5){
					console.log(String(allGallows[i][1]));
				}else if(wrong >= 5){
					console.log(String(allGallows[i][2]));
				}else{
					console.log(String(allGallows[i][0]));
				}
			}else{
				console.log(String(allGallows[i][0]));
			}
		}
		if(wrong < 6 && wrong > 0){
		  console.log(allGallows[wrong][1]);
		}else if(wrong!=0){
		  console.log("YOU LOSE");
		}
	}
}

function newRound(){
	oWord = new Word();
	runGame();
}

function runGame(){
	console.log(oWord.word);

	var lets = new Letters(oWord.word);
	lets.setWord(guessArr);

	done = !lets.divword.includes("-");
	if(wrong == 6){
		done = true;
	}

	printGallows();

	console.log(lets.divword);

	inq.prompt([
		{
			type: "input",
			message: "Guess a letter in the word or the stick guy gets it...",
			name: "guess"
		}
	]).then(function(resp){
		if(chars.includes(resp.guess.toLowerCase()) && !guessArr.includes(resp.guess)){
			if(lets.tempword.includes(resp.guess.toLowerCase())){
				console.log("You are correct!");
			}else{
				console.log("You are incorrect...");
				wrong++;
			}
			guessArr.push(resp.guess.toLowerCase());
		}else if(guessArr.includes(resp.guess)){
			console.log("Enter a character you haven't tried before");
		}else{
			console.log("Enter a valid character");
		}


		runGame();
	});
};

newRound();

