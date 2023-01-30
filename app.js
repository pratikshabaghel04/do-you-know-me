var readlineSync = require('readline-sync');

var score = 0;

var userName = readlineSync.question("What's your name? ");

  console.log("Welcome " + userName);
   console.log("--------------")

var userName = readlineSync.question("Let's start the quiz " + " DO YOU KNOW Pratiksha?");
console.log("--------------")


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("right!");
    score = score + 1;
  } else {
    console.log("wrong!");

  }

  console.log("current score: ", score);
  console.log("-----------------");

}
var questions = [{
  question: "Am i older than 22? ",
  answer: "no"
},
{
  question: "Is my hometown mumbai? ",
  answer: "no"
},
{
  question: "Is my favourite color yellow? ",
  answer: "yes"
},
{
  question: "Am I work at Flipkart? ",
  answer: "no"
},
{
  question: "Am i love chocolate? ",
  answer: "yes"
},
];

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("YAY! You SCORE: ", score);
  
