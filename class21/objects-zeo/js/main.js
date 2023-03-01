//Create a stopwatch object that has four properties and three methods

let stopwatch = {}

let stopwatch.color = 'black'
let stopwatch.shape = 'round'
let stopwatch.brand = 'TravelBugs'
let stopwatch.time = 12

stopwatch.tellTime = function tellTime(time) {
    console.log(`The time was stopped at ${time} seconds`)
}

stopwatch.start = function () {
    console.log('Start')
}
stopwatch.stop = function () {
    console.log('Stop')
}

stopwatch.sayBrand = function () {
    console.log(stopwatch.brand)
}