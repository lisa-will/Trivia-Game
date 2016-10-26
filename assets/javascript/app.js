// Test Your Javascript skills!! 
// Let's start by adding the timer! Yay!! 

// * Add "Start Trivia" button function. 

function startTimer(duration, display){
	var timer = duration, minutes, seconds;
	setInterval(function (){
		minutes = parseInt(timer / 60, 10);
		seconds = parseInt(timer % 60, 10);

		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;

		display.textContent = minutes + ":" + seconds;

		if (--timer < 0) {
			timer = duration;

		}
	}, 1000);
}

function startTrivia(){
	var fiveMinutes = 60 * 5, 
		display = document.querySelector('#time');
	startTimer(fiveMinutes, display);	
};

$("#startTrivia").on("click", function(){
	startTrivia();
	renderQuestion();
})

// Progress bar function to show tester trivia progress... 

// * Still needs some work. 

var progression = 0;

function updateProgressBar() { 
		$('#progress .progress-text').text(progression + '%');
		$('#progress .progress-bar').css({'width': progression+'%'});
		if(progression == 100) {
	//fill
		} else {
			progression += 5;
		}

};



// Let's Add our Trivia Variables.... Annnnd Go! 
// * Add Trivia-Q' images. 


var q = 0, trivia, triviaStatus, question, choice, choices, ansA, ansB, ansC, ansD, correct, wrong = 0; 

var triviaQuestions = [
//Q1 
	["assets/images/1.png", "A. Incrementor", "B. Operator", "C. Iterator", "D. Decrementor", "A"],
//Q2
	["assets/images/2.png", "A. Variables", "B. Parameters", "C. Strings", "D. Object", "B"],
//Q3
	["assets/images/3.png", "A. Method", "B. Variable", "C. Object", "D. Function", "D"],
//Q4	
	["assets/images/4.png", "A. Variable", "B. String", "C. Object", "D. Method", "A"],
//Q5
	["assets/images/5.png", "A. Function", "B. Object", "C. For Loop", "D. While Loop", "C"],
//Q6
	["assets/images/6.png", "A. Property", "B. Variable", "C. Value", "D. String", "A"],
//Q7
	["assets/images/7.png", "A. Object Literal Notation", "B. Bracket Notation", "C. Dot Notation", "D. Object Literal Notation", "B"],
//Q8
	["assets/images/8.png", "A. Array", "B. Function", "C. Object", "D. Method", "A"],
//Q9
	["assets/images/9.png", "A. While Loop", "B. Incrementor", "C. For Loop", "D. Function", "A"],	
//Q10	
	["assets/images/10.png", "A. Dot Notation", "B. Object Literal Notation", "C. Bracket Notation", "D. Object Constructor Notation", "B"],
//Q11
	["assets/images/11.png", "A. If... Else Statement", "B. Ternary Operator", "C. Else If Statement", "D. Switch Statement", "D"],
//Q12
	["assets/images/12.png", "A. If Statement", "B. If... Else Statement", "C. Else If Statement", "D. Switch Statement", "B"],		
//Q13
	["assets/images/13.png", "A. Dot Notation", "B. Bracket Notation", "C. Object Literal Notation", "D. Object Constructor Notation", "A"],	
//Q14
	["assets/images/14.png", "A. If Statement", "B. If...Else Statement", "C. Switch Statement", "D. Ternary Statement", "D"],
//Q15
	["assets/images/15.png", "A. Method", "B. Object", "C. Function", "D. Variable", "C"],	
//Q16
	["assets/images/16.png", "A. Object Literal Notation", "B. Object Constructor Notation", "C. Dot Notation", "D. Bracket Notation", "B"],
//Q17
	["assets/images/17.png", "A", "B", "C", "D", "A"],
//Q18
	["assets/images/18.png", "A", "B", "C", "D", "D"],
//Q19
	["assets/images/19.png", "A", "B", "C", "D", "D"],
//Q20
	["assets/images/20.png", "A", "B", "C", "D", "B"],		
];
// This function returns the element Id when it is called. 
//function _(x) {
	//return document.getElementById(x);
//}
// This renderQuestion function pulls the question + answer choices from the triviaQuestions array. 
function renderQuestion() {
	trivia = $("#trivia");
// This will tally up number of answer right! 
	if(q >= triviaQuestions.length)	{
		trivia.innerHTML = "<h2>You got "+correct+" of "+triviaQuestions+" questions correct!</h2>";
		$("#triviaStatus").innerHTML = "Trivia Over";
		q = 0;
		correct = 0; 
		wrong = 0; 
		return false;
	}
	$("#triviaStatus").html("Question " +(q+1)+" of "+triviaQuestions.length);
	question = triviaQuestions[q][0];
	ansA = triviaQuestions[q][1];
	ansB = triviaQuestions[q][2];
	ansC = triviaQuestions[q][3];
	ansD = triviaQuestions[q][4];
// This displays the trivia question. 
	trivia.html("<img id='pic' src='"+question+"'><br>");
// This displays answer selections with "radio-style" button.
	trivia.append("<input type='radio' name='choices' value='A'> "+ansA+"<br>");
	trivia.append("<input type='radio' name='choices' value='B'> "+ansB+"<br>");
	trivia.append("<input type='radio' name='choices' value='C'> "+ansC+"<br>");
	trivia.append("<input type='radio' name='choices' value='D'> "+ansD+"<br><br>");
	trivia.append("<button onclick='checkAnswer()'>Sumbit Answer</button>");

	updateProgressBar()
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








