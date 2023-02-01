// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

const sentance = 'I am a sentance?'
alert( sentance.endsWith('?'))

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

let multipleWords = 'I am a jr. dev bitch!'

// console.log( multipleWords.replaceAll('jr. dev', 'software engineer') )

// // *Functions*
// // Create a function that returns rock, paper, or scissors as randomly as possible

function rps(){
    let random = Math.random()

    if (random < .33){
        alert('rock')
    } else if (random < .66){
        alert('paper')
    } else {
        alert('scissors')
    }
}


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function checkWin(playerChoice){
    let botChoice = rps()
    if ((playerChoice === 'rock' && botChoice === 'scissors') || (playerChoice === 'paper' & botChoice === 'rock') || (playerChoice === 'scissors' && botChoice === 'paper')){
        console.log('You win!')
    } else if (playerChoice === botChoice){
        console.log('Tieeeeddd')
    } else{
        console.log('You lost you little pussy')
    }
}
checkWin('paper')

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.


