// IIFE to create function that displays "Good Bye" + " " + "name". name will be passed as arguement.

(function(window){
	var bye = {};
	var speakWord = "Good Bye";
	bye.speak = function speak(name) {
  		console.log(speakWord + " " + name);
	}

window.byeS = bye;

})(window);


