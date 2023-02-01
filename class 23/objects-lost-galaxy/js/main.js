//Create a dog object that has four properties and three methods

let dog = {}

dog.breed = 'Rottweiler'
dog.bark = 'Big'
dog.personality = 'Loving'
dog.name = 'Layla'

dog.noise = function(){
    console.log(dog.bark)
}
dog.jump = function(){
    console.log('down!')
}
dog.fetch = function(){
    console.log('ZOOoom!!!')
}