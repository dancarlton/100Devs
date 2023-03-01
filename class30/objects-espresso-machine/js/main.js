//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

// class EspressoMachine {
//     constructor(flavor,size,tempature,cup){
//         this.flavor = flavor
//         this.width = size
//         this.tempature = tempature
//         this.cup = cup
//     }
// }
// const power(){

// }

class EspressoMachine{
    constructor(color,make,model,price){
        this.color = color
        this.make = make
        this.model = model
        this.price = price
    }
    turnOn(){
        console.log('Time to wake tf up and get after it!!!')
    }

    steam(){
        console.log('Lets get steamy')
    }

    brew(){
        console.log('Take the day mfer!!')
    }
}

let nespressoMachine = new EspressoMachine('black', 'nespresso', 'verturoPlus', '$249.99')