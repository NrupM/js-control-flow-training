console.log("security_questions.js loaded");

let securityQuestions = [
  {
    question: "What was your first pet's name?",
    expectedAnswer: "Charlie"
  },
  {
    question: "What is your mother's maiden name?",
    expectedAnswer: "Evans"
  },
  {
    question: "What was your first car?",
    expectedAnswer: "Volvo"
  }
]

let userInput = "";
let hacker = false;

//prompt user for security question answer. user's input needs to equal expected answer.
//if user gives wrong answer, they are a hacker, and must not be able to answer any more questions.
  for (let i=0; i < securityQuestions.length; i++){
    userInput = prompt(securityQuestions[i].question);
    if (userInput !== securityQuestions[i].expectedAnswer){
      alert("wrong answer!");
      hacker = true;
      break;
    }
}

//if hacker = true, console.log("Stop!")
if (hacker === true){
  console.log("Stop it! or else.");
}
