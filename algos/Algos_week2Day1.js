//dice roller
function d6() {
    var roll = Math.random();
    // your code here
    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

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
    "Very doubtful."
];

function consultOracle(arr){
    //console.log(arr.length)
    // console.log(Math.floor(Math.random() * (arr.length - 1)))
    answer = arr[Math.floor(Math.random() * (arr.length-1))]
    
    return answer
}

//consultOracle(lifesAnswers)

console.log(consultOracle(lifesAnswers))
