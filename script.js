// IIFE to create function that displays "Good Bye" + " " + "name" for names that begin with J and 
// "Hello" + " " + "name" for names that begin with other letters

//IIFE
(function(){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  //loop through all the names
  for (var m in names) {
    //select lowercase of firt letter from name array
    var firstLetter = names[m].charAt(0).toLowerCase(); 

    //call byeSpeaker for letters that begin with "j" else call helloSpeaker
    if (firstLetter === 'j') {
      bye.speak(names[m]);
    } else {
      hello.speak(names[m]);
    }
  }

})();
