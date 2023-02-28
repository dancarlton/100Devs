//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

class StreetFighter {
    constructor(name, health, speed, specialMove){
        this.name = name
        this.health = health
        this.speed = speed
        this.specialMove = specialMove

    this.finishingMove = function(){
        console.log(`My name is ${this.name} and your life is mine!!`)
    }

    this.taunt = function(){
        console.log(`You can't handle my ${this.specialMove}`)
    }

    this.fatality = function(){
        console.log(`Get over here!!`)
    }

}
}

let chunLi = new StreetFighter('Chun Li', 100, 100, 'Spinning Bird Kick')