//Create a mouse object that has four properties and three methods

// function Mouse(eyes, ears, body, tail) {
//     this.sight = eyes
//     this.hearing = ears
//     this.chub = body
//     this.girth = tail
// }

let mouse = {}

mouse.brand = 'Logitech'
mouse.color = 'black'
mouse.model = 'MX Ergo'
mouse.wireless = true

mouse.leftClick = function(){
    console.log('Left Click')
}
mouse.rightClick = function(){
    console.log('Right Click')
}
mouse.scroll = function() {
    console.log('Jump Jump Jump')
}

let mouse2 = {}

mouse2.brand = 'Logitech'
mouse2.color = 'black'
mouse2.model = 'Pro Wireless'
mouse2.wireless = true

mouse2.leftClick = function(){
    console.log('Left Click')
}
mouse2.rightClick = function(){
    console.log('Right Click')
}
mouse2.scroll = function() {
    console.log('Jump Jump Jump')
}

let mouse3 = {}

mouse3.brand = 'Apple'
mouse3.color = 'silver'
mouse3.model = 'Magic Trackpad 2'
mouse3.wireless = true

mouse3.leftClick = function(){
    console.log('Left Click')
}
mouse3.rightClick = function(){
    console.log('Right Click')
}
mouse3.scroll = function() {
    console.log('Multidirectional Slider')
}