// Test Your Javascript skills!! 
// Let's start by adding the timer! Yay!! 

// * Add "Start Trivia" button function. 

function startTimer(duration, display){
	var timer = duration, minutes, seconds;
	setInterval(function (){
		minutes = parseInt(timer / 60, 10)
		seconds = parseInt(timer % 60, 10);

		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;

		display.textContent = minutes + ":" + seconds;

		if (--timer < 0) {
			timer = duration;

		}
	}, 1000);
}

window.onload = function (){
	var fiveMinutes = 60 * 5, 
		display = document.querySelector('#time');
	startTimer(fiveMinutes, display);	
};

// Progress bar function to show tester trivia progress... 

// * Still needs some work. 

$(document).ready(function() {
	var progression = 0, 
	progress = setInterval(function() 
	{
		$('#progress .progress-text').text(progression + '%');
		$('#progress .progress-bar').css({'width': progression+'%'});
		if(progression == 100) {
			clearInterval(progress);
		} else
			progression += 10;

	}, 1000);
});



// Let's Add our Trivia Variables.... Annnnd Go! 
// * Add Trivia-Q' images. 

// Add function ...
/* $(document).ready(function() {
 	 var triviaQ =  ['assets/images/1.png',
 					'assets/images/2.png',
 					'assets/images/3.png',
 					'assets/images/4.png',
 					'assets/images/5.png',
 					'assets/images/6.png',]; */

var q = 0, trivia, triviaStatus, question, choice, choices, ansA, ansB, ansC, ansD, correct, wrong = 0; 

var triviaQuestions = [
//Q1 
	["Blah Blah Blah", "A", "B", "C", "D", "A"],
//Q2
	["Blah Blah Blah", "A. Method", "B. Variable", "C. Object", "D. Function", "D"],
//Q3

//Q4	
	
//Q5


	
];
// This function returns the element Id when it is called. 
function _(x) {
	return document.getElementById(x);
}
// This renderQuestion function pulls the question + answer choices from the triviaQuestions array. 
function renderQuestion() {
	trivia = _("trivia");
// This will tally up number of answer right! 
	if(q >= triviaQuestions.length)	{
		trivia.innerHTML = "<h2>You got "+correct+" of "+triviaQuestions+" questions correct!</h2>";
		_("triviaStatus").innerHTML = "Trivia Over";
		q = 0;
		correct = 0; 
		wrong = 0; 
		return false;
	}
	_("triviaStatus").innerHTML = "Question " +(q+1)+" of "+triviaQuestions.length;
	question = triviaQuestions[q][0];
	ansA = triviaQuestions[q][1];
	ansB = triviaQuestions[q][2];
	ansC = triviaQuestions[q][3];
	ansD = triviaQuestions[q][4];
// This displays the trivia question. 
	trivia.innerHTML = "<h3>"+question+"</h3";
// This displays answer selections with "radio-style" button.
	trivia.innerHTML += "<input type='radio' name='choices' value='A'> "+ansA+"<br>";
	trivia.innerHTML += "<input type='radio' name='choices' value='B'> "+ansB+"<br>";
	trivia.innerHTML += "<input type='radio' name='choices' value='C'> "+ansC+"<br>";
	trivia.innerHTML += "<input type='radio' name='choices' value='D'> "+ansD+"<br><br>";
	trivia.innerHTML += "<button onclick='checkAnswer()'>Sumbit Answer</button>";
}

function checkAnswer() {
	choices = document.getElementsByName("choices");
	for (var i = 0; i < choices.length; i++) {
		if(choices[i].checked) {
			choice = choices[i].value;
		}
	}
	// This evaluates if tester chose the correct choice answer as listed in array of triviaQ's and keeping track of how many tester gets correct.
	if (choice == triviaQuestions[q][5]){
		correct++; 
	}
	
	else if (choice != triviaQuestions[q][5]) {
		wrong++;
	}
		
	// This keeps the trivia questions flowing! 
	q++;
	renderQuestion();

// This code fires off the questions as soon as the page loads! 
window.addEventListener("load", renderQuestion, false);

}








