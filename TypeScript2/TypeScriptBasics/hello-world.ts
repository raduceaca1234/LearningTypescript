
//arrow fct
var fn = () => 'response';

//js
var a;
a =10;
a = true;
a = {};

//ts
var a2: number;
var b: boolean;
var c: string;
a2=10;
b = true;
c = 'Hello';

var foo = undefined;
var myArr:number[];
myArr = [];
myArr = [1,2];
myArr.push(1);
myArr.pop();


//var myArr2 = [1,'string',true];
//tuple 
var myArr2 :[number,boolean];
myArr2 = [1,true];
myArr2=[100,false];
//myArr2 = [1]; can't

function add(a, b){
    return a+b;
}

var sum = add(1, 2);
console.log(sum);

// or
//this gives us compile time advantage
//because in js there aren't any types
function substract(a:number, b:number){
    return a-b;
}

var diff = substract(4, 2);
console.log(diff);



