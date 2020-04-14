interface Person{
    firstName: string;
    lastName: string;
    getFullName():string;
}

class Foo implements Person{
    firstName: string;
    lastName: string;
    getFullName(): string{
        return this.firstName+this.lastName;
    }
}


let aPerson: Person = new Foo();

let someObj = {
    firstName: 'Tests',
    lastName: 'Compiling',
    getFullName:() => "Test"

};

//aPerson = someObj();


class Client{
    //readonly name = "Radu";
    //or
    readonly name;
    constructor(name: string){
        this.name = name;
    }
}

var client = new Client("Radu");
console.log(client.name);

enum DaysOfTheWeekend{
    SUN,MON,TUE,WED,THU,FRI,SAT
}

let day: DaysOfTheWeekend;

day = DaysOfTheWeekend.MON;
if(day == DaysOfTheWeekend.MON){
    console.log("Got to go to work");
    
}


//generic function
function echo<T>(arg: T): T{
    return arg;
}

var myStr = echo(1);


import {User} from './gen';

class Admin extends User{

}

class Manager extends User{

}

let admin = new Admin('a','a');
let manager = new Manager('b','b');

function personEcho<T extends User>(person: T):T{

    return person;
}

var foo = personEcho(admin);

