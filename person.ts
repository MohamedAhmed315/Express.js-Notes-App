
"use strict"

abstract class Person {
    protected name: string;
    protected address: string;

    constructor(name: string, address: string){
        this.name = name;
        this.address = address;
    }

    protected get personName(): string{
        return this.name;
    }
    protected get personAddress(): string{
        return this.address;
    }

    protected set personAddress(address: string){
        this.address = address;
    }

   protected abstract get AllInfo(): object;

}// end person
// ---------------------------------------------------------

class Student extends Person{

    program: string;
    year: number;
    fee: number;

    constructor(name: string, address: string, program: string, year: number, fee: number){
        super(name, address);
        this.program = program;
        this.year = year;
        this.fee = fee;
    }
    get AllInfo(): object{
        return {"Name": this.name, "Address": this.address, "Program": this.program, "Year": this.year, "Fee": this.fee}
    }

    get stdProgram(): string{
        return this.program;
    }

    set stdProgram(program: string){
        this.program = program;
    }

    get stdYear(): number{
        return this.year;
    }

    set stdYear(year: number){
        this.year = year;
    }

    get stdFee(): number{
        return this.fee;
    }

    set stdFee(fee: number){
        this.fee = fee;
    }
} //end student
// ---------------------------------------------------------

class Staff extends Person{
    school: string;
    pay: number;

    constructor(name: string, address: string, school: string, pay: number){
        super(name, address);
        this.school = school
        this.pay = pay;
    }

    get AllInfo(): object {
        return {"Name": this.name, "Address": this.address, "School": this.school, "Pay": this.pay};
    }

    get staffSchool(): string{
        return this.school;
    }

    set staffSchool(school: string){
        this.school = school;
    }

    get staffPay(): number{
        return this.pay;
    }

    set staffPay(pay: number){
        this.pay = pay;
    }
}

let student1 = new Student("Mohamed", "Cairo, Egypt", "OOP", 2021, 1000);

console.log("Student Info:");
console.log(student1.AllInfo);

let staff1 = new Staff("Ali", "Alex, Egypt", "school name", 2000);

console.log("Staff Info:");
console.log(staff1.AllInfo);

 