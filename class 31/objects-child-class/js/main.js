//Create an a class and extend it - Can be anything you would like it to be! 

class Toothbrush {
    constructor(brand) {
        this.brand = brand
    }
    brush(){
        console.log(`This ${this.brand} toothbrush is really getting in there!`)
    }
}

class MediumToothbrush extends Toothbrush {
    constructor(brand, medium){
        super(brand)
        this.medium = medium
    }
}

let crest = new Toothbrush('Crest')