// Array Destructuring

let list = ["Audi", "BMW", "Honda"];
let [car1, car2, car3] = list;
// console.log(car1, car2, car3);

// Object Destructuring


// let {
//     name: usr,
//     age: year
// } = person;

// console.log(usr, year);
// console.log(person);

let num1 = 100;
let num2 = num1;

num2 = 50;

// console.log(num1);
// console.log(num2);

let person = {
    name: "Uniq",
    age: 21
}

let person2 = {
    ...person
}

person2.name = "Spider";
person2.age = 20;

// console.log(person);
// console.log(person2);

// Map

let arr = [2, 4, 5, 11];

let arr2 = arr.map(x => x * 2);

let arr3 = arr.filter(x => x % 2 == 0)

// console.log(arr2);
// console.log(arr3);