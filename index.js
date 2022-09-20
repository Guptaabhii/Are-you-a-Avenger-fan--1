var readlineSync = require('readline-sync');

console.log("well come to Abhishek's Quiz on Avengers⚒️");
var userName = readlineSync.question("\nEnter your name-\n");
console.log("Hi "+userName+"❤️  enter a/b/c as answer in each question");
console.log("\nyou will get +1 point for each correct answer and\n -1 for each incorrect answer");
var score = 0;

function play(question, answer){
  var userAns = readlineSync.question(question);
  if(userAns === answer){
    console.log("congo! you are right");
    score++;
  }
  else{
    console.log("Opps! this is not the right answer");
    console.log("\nthe right answer is "+answer);
    score--;
  }
  console.log("your current score is "+score+"");
  console.log("\n--------------\n");
}

var allQuestion = [{
  question: "\n\n1. How many Infinity Stones are there?\na.5\nb.6\nc.7\n",
  answer: "b"
},{
  question: "2. What type of doctor is Doctor Strange?\na.neurosurgeon\nb.cardiologist\nc.eye-specalist\n",
  answer: "a"
},{
  question: "3. Who was able to pick up Thor’s hammer in Endgame?\na.Hulk\nb.Captain America\nc.Black Panther\n",
  answer: "b"
},{
  question: "4. Hawkeye has how many children?\na.5\nb.2\nc.3\n",
  answer: "c"
},{
  question: "5. Who is the Winter Soldier?\na.nick fury\nb.bucky\nc.groot\n",
  answer: "b"
},{
  question: "6. Who is the firstborn child of Odin?\na.Thor\nb.Loki\nc.Hela\n",
  answer: "c"
},{
  question: "7. Who did Captain America give his shield to in Endgame?\na.sam\nb.bucky\nc.nebula\n",
  answer: "a"
},{
  question: "8. Where is Captain America from?\na.brookly\nb.paris\nc.london\n",
  answer: "a"
},{
  question: "9. What is the strongest metal in the Marvel Universe?\na.uranium\nb.vibranium\nc.freluium\n",
  answer: "b"
},{
  question: "10. Who is the leader of S.H.I.E.L.D?\na.tony stark\nb.banner\nc.nick furry\n",
  answer : "c"
}];

for(var i=0;i<allQuestion.length;i++){
  var currQue = allQuestion[i];
  play(currQue.question, currQue.answer);
}
console.log("yo! your final score is "+score+"✨");

var highScore = [{
name:"pratts",
point:"10"
},{
name:"roshan",
point:"9abhi"
}];

console.log("\n--------\n");
console.log("****check-out scoreboard****");

for(let i=0; i<highScore.length; i++){
  console.log(highScore[i].name+":"+highScore[i].point);
}
console.log("\n\n If you had beaten the High-Score than send\n me the screenshot of your Final Score so,\n that i can update the Scoreboard. ")