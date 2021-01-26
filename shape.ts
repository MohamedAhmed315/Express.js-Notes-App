"use strict"

interface Shape{
    color: string;
    filled: boolean;

    getColor(): string;
    setColor(color: string): void;
    isFilled(): boolean;
    setFilled(filled: boolean): void;
    getArea(): number;
    getData(): string;
    getCircumference(): number;
} // end shape
// ---------------------------------------------------------

class Circle implements Shape{
    
    color: string;
    filled : boolean;
    radius : number;
    constructor(color : string, filled : boolean, radius : number){
        this.color = color;
        this.filled = filled;
        this.radius = radius;
    }

    getColor(): string {
        return this.color;
    }
    setColor(color: string): void {
        this.color = color;
    }
    isFilled(): boolean {
        return this.filled;
    }
    setFilled(filled: boolean): void {
        this.filled = filled;
    }
    getData(): string {
        return `Cirlce Area = ${this.getArea().toFixed(2)}\nCircumference = ${this.getCircumference().toFixed(2)}\nRadius = ${this.radius}\nFilled = ${this.isFilled()}\nColor = ${this.getColor()}`;
    }
    getRadius(): number{
        return this.radius;
    }
    setRadius(radius: number): void{
        this.radius = radius;
    }

    getArea(): number{
        return (Math.pow(this.radius, 2) * Math.PI);
    }
    getCircumference(): number{
        return 2 * this.radius * Math.PI;
    }

}// end circle
// ---------------------------------------------------------

class Rectangle implements Shape{
    color: string;
    filled: boolean;
    width: number;
    length: number;

    constructor(color: string, filled: boolean, width: number, length: number){
        this.color = color;
        this.filled = filled;
        this.width = width;
        this.length = length;
    }
    getArea(): number {
        return this.width * this.length;
    }
    getCircumference(): number {
        return (this.width + this.length) * 2;
    }
    getColor(): string {
        return this.color;
    }
    setColor(color: string): void {
        this.color = color;
    }
    isFilled(): boolean {
        return this.filled;
    }
    setFilled(filled: boolean): void {
        this.filled = filled;
    }
    getData(): string {
        return `Rectangle Area = ${this.getArea().toFixed(2)}\nCircumference = ${this.getCircumference().toFixed(2)}\nWidth = ${this.width}\nLength = ${this.length}\nFilled = ${this.isFilled()}\nColor = ${this.getColor()}`;
    }
} // end rectangle
// ---------------------------------------------------------

class Square extends Rectangle implements Shape{
    
    side: number;
    
    constructor(color: string, filled: boolean, side: number){
        super(color, filled, side, side);
        this.side = side;
        this.color = color;
        this.filled = filled;
    }

    getArea(): number{
        return Math.pow(this.side, 2)
    }

    getCircumference(): number{
        return this.side * 4;
    }

    getData(): string {
        return `Squar Area = ${this.getArea().toFixed(2)}\nCircumference = ${this.getCircumference().toFixed(2)}\nSide = ${this.side}\nFilled = ${this.isFilled()}\nColor = ${this.getColor()}`;
    }
} // end square
// ---------------------------------------------------------

let circle1 = new Circle("brown", true, 5);
console.log("========================");
console.log(circle1.getData());
console.log("========================");

let rectangle1 = new Rectangle("cyan", false, 3, 4.1);
console.log(rectangle1.getData());
console.log("========================");

let square1 = new Square("yellow", true, 5);
console.log(square1.getData());
console.log("========================");


