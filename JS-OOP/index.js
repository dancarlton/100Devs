
// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function(){
            console.log('draw');
        }
    };
}
const circle = createCircle(1);

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
const another = new Circle(10);

circle.location = { x: 1}

// Abstraction
function Circle(radius) {
    this.radius = radius;

    this.defaultLocation = { x: 0, y: 0};

    this.computeOptimumLocation = function(){
        // ...
    }

    this.draw = function() {
        this.computeOptimumLocation();

        console.log('draw');
    };
}

const circle = new Circle(10);