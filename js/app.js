
let spokenPhrases = ""; //this variable will stores the words that are spoken.

//speakNow function to speak the words and store to the above variable
function speakNow(arrayList) {
	if ('speechSynthesis' in window) { //if the speechSynthesis is supported in window 
//stores the random index from the length of the array--> using math function
		let randomIndex = Math.floor(Math.random() * arrayList.length);
		  // store the word of that random index
		let selectedWord = arrayList[randomIndex];
		  // a new speech synthesis object with the current word
		let utterThis = new SpeechSynthesisUtterance(selectedWord);
		window.speechSynthesis.speak(utterThis);
		
		  // storing the spoken word for later use
		spokenPhrases += selectedWord + " "; // Add the phrase with a space for separation
	} else { //if the speechSynthesis does not support throws an error message;
		console.error("Speech Synthesis is not supported in this browser.");
	}
}

// Function to speak the stored words/sentence 
function speakStoredPhrases() {
	if ('speechSynthesis' in window) { 
		// a speechSynthesis object with spokenPhrase
		let utterThis = new SpeechSynthesisUtterance(spokenPhrases);
		window.speechSynthesis.speak(utterThis); //making it speak the phrase
	} else {
		console.error("Speech Synthesis is not supported in this browser."); //error message incase
	}
}
//function to reset the spokenPhrase;
function resetPhrase(){
	spokenPhrases=""; //making the variable empty
}

//fucntion to generate random sentence from the lists 
function generateRandomPhrase(noun1, Verb, sound, noun2, places) {
    if ('speechSynthesis' in window) {
        // Generate random word for each array and store it
        let randNoun1 = noun1[Math.floor(Math.random() * noun1.length)];
        let randVerb = Verb[Math.floor(Math.random() * Verb.length)];
        let randAdjective = sound[Math.floor(Math.random() * sound.length)];
        let randNoun2 = noun2[Math.floor(Math.random() * noun2.length)];
        let randPlace = places[Math.floor(Math.random() * places.length)];
        // concatinating the words from each list
        let phrase = `${randNoun1} ${randVerb} ${randAdjective} ${randNoun2} ${randPlace}`;
        // Create a new speech synthesis utterance and speak it
        let utterThis = new SpeechSynthesisUtterance(phrase);
        window.speechSynthesis.speak(utterThis);
    } else {
        console.error("Speech Synthesis is not supported in this browser.");
    }
}


  // Event Listeners for buttons
// using the speakNow funtion for first 5 buttons using eventlistener(means when the botton is click the function will be executed)
document.getElementById('btn1').addEventListener('click', function() {
	speakNow(noun1);
});
document.getElementById('btn2').addEventListener('click', function() {
	speakNow(Verb);
});
document.getElementById('btn3').addEventListener('click', function() {
	speakNow(sound);
});
document.getElementById('btn4').addEventListener('click', function() {
	speakNow(noun2);
});
document.getElementById('btn5').addEventListener('click', function() {
	speakNow(places);
});

	document.getElementById('btn6').addEventListener('click', speakStoredPhrases); // Sixth button to speak stored phrases
	document.getElementById('btn7').addEventListener('click', function() {  //button to execute the random generate function 
		generateRandomPhrase(noun1, Verb, sound, noun2, places);
	});
	
	document.getElementById('btn8').addEventListener('click', resetPhrase);  //execution of reset fucntion by reset button
	
  // list of arrays 
var noun1 = ["Turkey", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
var Verb = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
var sound = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
var noun2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var places = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];
