//---Easy
//create a function that subtracts two numbers and alerts the difference

function subTwo(num1, num2) {
    alert( num1 - num2 )
}
subTwo(10,7)
//create a function that divides three numbers and console logs the quotient

function divThree(n1, n2, n3) {
    console.log(n1 / n2 / n3)
}
divThree(12,4,3)
//create a function that multiplys three numbers and returns the product

function multThree (nA, nB, nC) {
    return nA * nB * nC
}
console.log(multThree(2,3,5))
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

// function medium(n1, n2, n3) {
//     (n1 + n2) % n3
// }

const medium = (n1,n2,n3) => (n1+n2)%n3

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function fuckAroundAndMathOut(n1, n2, n3, n4) {
    let product = n1 * n2
    if ( product > 100 ) {
        console.log(product + n3 + n4)
    } else if (product < 100) {
        console.log(product - n3 - n4)
    } else {
        alert((product * n3) % n4)
    }
}
fuckAroundAndMathOut(5,4,3,2)