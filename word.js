var randword = require("random-word");

var Word = function(){
	this.word = randword();
}

module.exports = Word;