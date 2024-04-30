let pi = 3.1412;

class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }

    getColor() {
        return this.color;
    }

    getArea() {
        return pi * this.radius * this.radius;
    }

    getCircumference() {
        return 2 * pi * this.radius;
    }
}

const myCircle = new Circle(1.0, "red");
console.log(`Radius: ${myCircle.getRadius()}`);
console.log(`Color: ${myCircle.getColor()}`);
console.log(`Area: ${myCircle.getArea()}`);
console.log(`Circumference: ${myCircle.getCircumference()}`);
