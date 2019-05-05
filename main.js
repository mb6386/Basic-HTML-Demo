function check(){
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;
	
	if (question1 == "A"){
		correct++;
	}
	if (question2 == "B"){
		correct++;
	}
	if (question3 =="C"){
		correct++;
	}
	var messages = ["You will need to get all three questions correct to pass!", "You passed!"];
	var pictures = ["img/lose.gif", "img/win.gif"];
	var range;
	if(correct < 3) {
		range = 0;
	} else {
	range = 1;
	}
	document.getElementById("submit").style.visibility = "visible";
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("message").innerHTML = messages[range];
	document.getElementById("picture").src=pictures[range];
	
}