var readlineSync = require('readline-sync');

var people = readlineSync.question("What's your name? ");

console.log("Welcome " + people + " ! how well do you know me? lets check it out ");
var score = 0 ;

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are absolutely right!");
    score = score + 1;
  } else {

    console.log("Ops! Wrong answer.")
  }
  console.log("Your Score = " + score);
  console.log("---------------------");

}

var questions = [{
  question : "My nickname?  ",
  answer : "kanha"
}, {
  question : "My hometown?  ",
  answer : "bhilai"
}, {
  question : "do i own a dog?  ",
  answer : "no"
}];

for (var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("Your Total score is " + score + " ! Thankyou so much for taking this quiz");
