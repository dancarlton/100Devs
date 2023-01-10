// *Variables*
// Create a variable and console log the value

let variable = 'value'
console.log(variable)

// Create a variable, add 10 to it, and alert the value

let number = 11
alert(number += 10)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtractsFourNums(num1, num2, num3, num4) {
    alert( num1 - num2 - num3 - num4)
}

// Create a function that divides one number by another and returns the remainder

function dividesOneNum(num1, num2) {
    return num2 % num1
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addsTwoNums (num1, num2) {
    let product = num1 + num2
    if (product > 50) {
        alert('Jumanji')
    }
}
addsTwoNums()

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiplysThreeNums(num1, num2, num3) {
    let product = num1 * num2 * num3
    if (product % 3) {
        alert('ZEBRA')
    }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function loopDaddy(word, num){
    for( let i = 1; i <= number; i++ ) {
        console.log(word)
    }
}