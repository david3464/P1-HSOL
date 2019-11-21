function Question(text, choices, answer) {
	this.text = text;
	this.choices = choices;
	this.answer = answer;
}

Question.prototype.correctAnswer = function(choice){
	return choice === this.answer;
}



function Quiz(questions) {
	this.score = 0;
	this.questions = questions;
	this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
	return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function() {
	return this.questions.length === this.questionIndex+1;
}

Quiz.prototype.guess = function(answer) {


	if(this.getQuestionIndex().correctAnswer(answer)) {
		this.score++;
	};
	this.questionIndex++;
}

