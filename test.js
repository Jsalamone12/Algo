// var ten = [1,2,3,4,5,6]

function d6() {
    var roll = (Math.floor(6 * Math.random())+1);
    // your code here
    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);


// console.log(Math.floor(6 * Math.random())+1);
function lifesProblems(){

    
    var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
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
    "Very doubtful."
];

var roll = (Math.floor((lifesAnswers.length - 1) * Math.random())+1);

console.log(lifesAnswers[roll]);
return lifesAnswers[roll]
}
lifesProblems();