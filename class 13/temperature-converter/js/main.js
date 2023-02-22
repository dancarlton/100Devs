//Write your pseduo code first! 
// 0 -> 32

// Input farenheit tempauture value into a input box, find equivalent in celcius tempature, convert to celcius = 0 ->32

// Equation is C = (5/9) * (F-32)


document.querySelector('#yell').addEventListener('click', convert)

    function convert() {
    // need the value from celcius
    let temp = document.querySelector('#cel').value
    // convert from celcius to farenheight
    temp = temp * 9/5 + 32
    // show it
    document.querySelector('#placeToYell').innerText = temp

}