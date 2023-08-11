//  array
function sumArray(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(sumArray(numbers));

// objects

const person = { "name": "govind", "age": 22, "email": "govindgiri2000@gmail.com" };

for (key in person) {
    console.log(key, person[key]);
}

//  function as parameter

const greeting = (name) => {
    console.log("hello ", name)
}

greeting("govind giri");

// this keyword functionality

const car = {
    brand: "mercedes",
    model: "A23D",
    start: function () {
        console.log(this.brand, "this.brand")
        return this.brand;
    }
}
var m = car.start();
console.log(m);

// var keyword
function printNumber()
 {

    for(var count=0;count<=10;count++)
     {
         console.log(count);
     }
   console.log(count);
 } 
printNumber(); 

// function binding

const user={
    name:"govind",
    mother_name:"mother",
}

function say_your_name()
 {
    return this.name;
 }
 // arrow function have not their own this out put will be undefined
const say_mother_name=()=>{
    return this.mother_name;
}
 const user_name=say_your_name.bind(user);
 const mother_name=say_mother_name.bind(user);
 console.log(user_name());
 console.log(mother_name());
// arrow function

const double=(num)=>{
    return 2*num;
}

console.log(double(34));

