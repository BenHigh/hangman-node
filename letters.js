var Letters = function(word){
	this.divword = "";
	this.tempword = word.split('');

	this.setWord = function(guessArr){
		for(i in this.tempword){
			if(!guessArr.includes(this.tempword[i])){
				this.divword+=" -";
			}
			else{
				this.divword+=(" "+this.tempword[i]);
			}
		}
	}
}


module.exports = Letters;