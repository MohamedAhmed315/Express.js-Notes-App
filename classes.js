
class Circle {
    // radius;
    constructor(radius){
        this.radius = radius;
    }
    getArea(){
        return (Math.pow(this.radius, 2) * Math.PI).toFixed(2);
    }

    getCircumference(){
        return (2 * this.radius * Math.PI).toFixed(2);
    }
}
let circle = new Circle(5);
console.log("==================================");
console.log("Circle Area = " + circle.getArea());
console.log("Circle Circumference = " + circle.getCircumference());
console.log("==================================");

// ==========================================================================

class Triangle {   
    base;
    height;
    sideA;
    sideB;

    set base(base){
        this.base = base;
    }
    set height(height){
        this.height = height;
    }
    set sideA(sideA){
        this.sideA = sideA;
    }
    set sideB(sideB){
        this.sideB = sideB;
    }
    getArea(){
        return (this.base * this.height) / 2
    }
    getCircumference(){
        return this.sideA + this.sideB + this.base;
    }
}

let triangle = new Triangle();
triangle.base = 8;
triangle.height = 7;
triangle.sideA = 1;
triangle.sideB = 3;
console.log("Triangle Area = " + triangle.getArea());
console.log("Triangle Circumference = " + triangle.getCircumference());
console.log("==================================");

// ==========================================================================

class Car {
    name;
    color;
    model;
    price;

    setCarData(name, color, model, price){
        this.name = name;
        this.color = color;
        this.model = model;
        this.price = price;
    }

    getCarData(){
        return `
        Name: ${this.name} \n
        Color: ${this.color} \n
        Model: ${this.model} \n
        Price: ${this.price}`;
    }
}

let car = new Car();
car.setCarData("Nissan", "Red", 22241, 500000);
console.log(car.getCarData());