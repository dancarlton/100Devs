// //Create an array of movie titles. Loop through the array and add each element to the h2.
// let movieTitles = ['Shrek 1', 'Shrek 2', 'Shrek 3'];
// // arrayLength = movieTitles.length;
// for(let i = 0; i < movieTitles.length; i++){
//     document.querySelector('h2').innerText += movies[i]
// }

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let nums = [10,20,30]

nums.forEach((item, i) => {
    nums[i] = item + 3
});
console.log(nums)
//Find the average of all the numbers from question two
let sum = 0

for(let i = 0; i < nums.length; i++){
    sums += nums[i]
}

console.log( sum / nums.length)