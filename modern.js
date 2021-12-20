// ES-6

// console.log("Hey it's your boy");

// Rest parameter
// function sum(...args) {
//     // console.log(args);
//     let result = 0;
//     for (let i = 0; i < args.length; i++) {
//         result += args[i]
//     }
//     console.log(result);
// }
// sum(2, 5, 6, 8);


// Spread Operator
// let array = [1, 2, 3];
// let anotherArray = [5, 4, 6];
// let spreadArray = [...array, ...anotherArray]
// // console.log(spreadArray);


// For of
// let score = [80, 39, 69, 96, 55];
// for (const x of score) {
//     console.log(x);
// }


// Template literals
// const number = 5;
// let str = `he
// it's
// ur
// boy
// !  his no is ${number}`;
// console.log(str);


// Array Destructuring

// let book = ["universe", 55, 69];
// // console.log(book[0]);
// let [title, page, price] = book;
// console.log(title);
// console.log(page);
// console.log(price);


// Object Destructuring
// let book = {
//     name: "Window",
//     page: 69,
//     price: 599
// };
// let {
//     name: title,
//     page,
//     price = 669,
// } = book;
// console.log(price);


// Object Oriented Programming

// Object
// Old OOPS
// let anotherOne = new Object();
// anotherOne.Author = 'Dj Khalid'

// console.log(anotherOne.Author);

// let person1 = {
//     firstName: "Uniq",
//     lastName: "Boy",
//     age: 21,
//     'id proof': "Pan",

//     fullName: function () {
//         // console.log(this.firstName + " " + this.lastName);
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
// };
// person1.city = "Night City";
// // console.log(person1.city);
// person1.age = 20;
// console.log(person1.age);
// console.log(person1["id proof"]);
// person1.fullName();

// Constructor
// function Person(first, last, age) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;

//     this.sayHi = function () {
//         console.log(`Hi ${this.firstName} ${this.lastName}!`);
//     };

//     this.changeAge = function (newAge) {
//         this.age = newAge;
//     };
// }

// let person1 = new Person("Spy", "Boy", 21);
// person1.changeAge(55);
// console.log(person1);
// console.log(person1.age);
// console.log(person1.sayHi());
// console.log(person1);
// console.log(person1.sayHi());

// let person2 = new Person("Lost", "Boy", 20);
// console.log(person2);


// Prototype
// let person3 = {};


// let person4 = {
//     name: "Spider"
// };
// console.log(person4);

// console.log(person4.hasOwnProperty('name'));

// Another constructor
function Creature(ls) {
    this.lifeSpan = ls;
}
Creature.prototype.breath = function () {
    console.log('breathing...');
}

// Object
let creature1 = new Creature(100);

console.log(creature1);

// Lets define constructor
function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}
// // Prototype
Person.prototype.fullName = function () {
    console.log(`Hey ${this.firstName} ${this.lastName}`);
}

Person.prototype.__proto__ = Object.create(Creature.prototype);


let person1 = new Person("Uniq", "Boy", 21);

// 

console.log(person1);
person1.breath();
person1.fullName();

// <--- Done --->