// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

let assignSentence = "This is a sentence ?"

if (assignSentence.endsWith("?"))   {
    alert(assignSentence)
} 


//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

let devAssigner = "software developer, jr.dev, senior developer, computer science"

console.log(devAssigner.replaceAll("jr.dev", "software engineer"))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors()    {
    let botschoice = Math.random()
    if(botschoice  < .33)   {
        return "rock"
    }   else if(botschoice < .66)   {
        return "paper"
    }   else    {
        return "scissors"
    }
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function rpsGame(playerChoice)  {
    let computerChoice = rockPaperScissors()
    if((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper"))   {
        console.log("Winner !") 
    } else if ((playerChoice === "rock" && computerChoice === "rock") || (playerChoice === "paper" && computerChoice === "paper") || (playerChoice === "scissors" && computerChoice === "scissors")) {
        console.log("Tied !")
    } else  {
        console.log("Loser !")
    }
}

rpsGame("paper")


//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
