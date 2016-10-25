// Test Your Javascript skills!! 

// Let's Add our Variables.... Annnnd Go! 

var q = 0, trivia, triviaStatus, question, choice, choices, ansA, ansB, ansC, ansD, correct, wrong = 0; 
var triviaQuestions = [
//Q1 
	["What is i++?", "A. Incrementor", "B. Operator", "C. Iterator", "D. Decrementor", "A"],
//Q2
	//["Which built-in method reserves the order of the elements in an array?"
	 //"A. changeOrder(order)", "B. reserve()", "C. sort(order)", "D. charCodeAt()", "A"],
//Q3
	["Which of the options below are data types?", 
	"A. Number, String, Function", "B. String, Boolean, Data", "C. Boolean, Number, Sting", "D. Number, String, Boolean", "D"],
//Q4	
	//["var dogName = dog["name"] is an example of:", 
	//"A. Object Literal Notation", "B. Bracket Notation", "C. Dot Notation", "D. Object Literal Notation", "B"],
//Q5	
	["In the function below, what does the text '(w,l)' represent? var area = function (w,l) { return w*l;};", 
	"A. Variables", "B. Parameters", "C. Strings", "D. Object", "B"],

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
//****** Add progress bar function to show tester trivia progress... duh. 
//function move()

function checkAnswer() {
	choices = document.getElementsByName("choices");
	for (var i = 0; i < choices.length; i++) {
		if(choices[i].checked) {
			choices = choices[i].value;
		}
	}
	// This evalutes if tester chose the correct choice answer as listed in array of triviaQ's and keeping track of how many tester gets correct.
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
window.addEventListener('load', renderQuestion, false);

}








