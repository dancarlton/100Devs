//---Easy
//create a function that subtracts two numbers and alerts the difference

function subTwoNumsAndAlert(n1, n2) {
    alert(n1 - n2)
}
subTwoNumsAndAlert(50, 30)

//create a function that divides three numbers and console logs the quotient
function divideThreeNum(num1, num2, num3) {
    console.log( num1 / num2 / num3 )
}
divideThreeNum(12,4,3)

//create a function that multiplys three numbers and returns the product
function multThreeNumsAndReturns(dick, balls, pussy) {
    return dick * balls * pussy 
}
let product = multThreeNumsAndReturns(5,10,2)
alert(product)

// function turnIntoMoney() {
//     let product = multThreeNumsAndReturns(5,10,2)
//     alert( '$' + product)
// }
// turnIntoMoney()

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function addTwoAndDivide(n1, n2, n3) {
    return (n1 + n2) % n3
}
console.log(addTwoAndDivide(3,3,2))

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
