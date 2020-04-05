
export{}
let message = 'Hello World'
console.log(message)

let x = 10;
const y =20;
let sum=x+y;
const title = 'Some text title';

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Radu';

let sentence: string = `My name is ${name}
I am a beginner in TypeScript`;
console.log(sentence);

//subtypes of all other types
let n: null;
let u: undefined = undefined;
//^^^
let isNew: boolean = null;
let myName: string = undefined;


//these are the same
let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3]

//exactly one string value and one numeric value
//the order has to match
//we cannot have let person1: [string,number] = [ 22, 'Chris'];
//or let person1: [string,number] = ['Chris', 22, 35];

let person1: [string,number] = ['Chris', 22];


enum Color {Red, Green, Blue};
//or enum Color {Red = 5, Green, Blue};
//and Green is 6
//otherwise Green is 1
let c: Color = Color.Green;
console.log(c);

//any type

let randomValue: any = 10;
randomValue = true;
randomValue = 'Radu';

let myVariable: any = 10;
//these will not throw an error because myVariable is of type any
//console.log(myVariable.name);
//myVariable();
//myVariable.toUppercase();

//unknown type
let myVariable2: unknown = 10;
//these will throw an error because myVariable is of type unknown
//console.log(myVariable2.name);
//myVariable2();
//myVariable2.toUppercase();
//but this will not
//(myVariable2 as string).toUpperCase();


function hasName(obj: any): obj is { name: string }{
    return !!obj&&
        typeof obj == "object"&&
        "name" in obj
}

if (hasName(myVariable2)){
    console.log(myVariable2.name);
}

//works perfectly
let a;
a = 10;
a = true;

//type error
//b is already declared
////let b = 20;
////b = true;

//restriction, multiValue must be of type number or boolean
let multiType: number | boolean;
multiType = 20;
multiType = true;

//no restriction, anyType can be of any type
let anyType: any;
anyType = 20;
anyType = true;


function add(num1: number, num2: number): number{
    return num1 + num2;
}
add(5, 10);

//num2 is optional
function add2(num1: number, num2?: number): number{
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add2(5, 10);
add2(5);

//num2 has a default value
function add3(num1: number, num2: number = 10): number{
    if (num2)
        return num1 + num2;
    else
        return num1;
}

add3(5, 10);
add3(5);

interface Person{
    firstName: string;
    lastName: string;
}


function fullName(person: Person){
    console.log(`${person.firstName} ${person.lastName}`);
}


let p = {
    firstName: 'Radu',
    lastName: 'Ceaca'
};

fullName(p);

class Employee{
    employeeName: string;

    constructor(name: string){
        this.employeeName = name;
    }

    greet(){
        console.log(`Hello ${this.employeeName}`)
    }
}

let emp1 = new Employee('Radu')
console.log(emp1.employeeName);
emp1.greet();


class Manager extends Employee{
    constructor(managerName: string){
        super(managerName);
    }

    delegateWork(){
        console.log(`Manager delegating tasks`);
    }
}

let m1 = new Manager('Ceaca');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

