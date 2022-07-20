// IIFE to create function that displays "Hello" + " " + "name". name will be passed as arguement.

(function(window){
	var hello = {};
	var speakWord = "Hello";
	hello.speak = function speak(name) {
  		console.log(speakWord + " " + name);
	}

window.hello = hello;

})(window);


