const { faCircle } = require("@fortawesome/free-solid-svg-icons");

console.log("hello");

var lifesAnswers = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes – definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
];

function askQuestion() {
  var question = document.getElementById("input").value;
  var circle = document.getElementById("circle");
  circle.innerHTML = "the questinon is:<H4>" + question + "</H4>";
}

function getAnswer() {
  var answer = Math.floor(Math.random() * lifesAnswers.length);
  return lifesAnswers[answer];
}

document.getElementById("circle");
