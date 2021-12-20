// console.log("Hey it's your by from the hood!");
// // ES-6 Class and objects
// class person {
//   constructor(n, a) {
//     this.name = n;
//     this.age = a;
//   }
//   sayHi() {
//     console.log(`Hi ${this.name}`);
//   }
//   static hello() {
//     console.log("hey...");
//   }
// }
// let person1 = new person("Spider", 21);
// console.log(person1);
// console.log(person1.name);
// person1.sayHi();
// person.hello();

// let person2 = new person();
// console.log(person2);

// Inheritance
// class emp {
//   constructor(n) {
//     // console.log("emp constructor called...");
//     this.name = n;
//   }
//   msg() {
//     console.log("Hey it's from emp...");
//   }
// }

// class manager extends emp {
//   constructor(s, d) {
//     super(s);
//     //   console.log("manager constructor called...");
//     this.department = d;
//   }
//   msg() {
//     console.log("Hey it's from manager...");
//   }
//   info() {
//     this.msg();
//     super.msg();
//     console.log(`${this.name} is manager of department ${this.department}`);
//   }
// }

// let mg1 = new manager("Spider", "Web");

// console.log(mg1);
// console.log(mg1.name);
// // console.log(mg1.msg);
// // mg1.msg();
// mg1.info();

// class admin extends manager {}

// let admin1 = new admin("Uniq", "Android");
// console.log(admin1);

// Mixin

// let usefulMethods = {
//   sayHi() {
//     console.log("Hi...");
//   },
//   sayBye() {
//     console.log("Bye...");
//   },
// };

// class user {
//   constructor() {
//     this.name = "Uniq";
//   }
// }
// // Mixin

// Object.assign(user.prototype, usefulMethods);

// let user1 = new user();
// console.log(user1);

// user1.sayHi();
// user1.sayBye();

// class admin extends user {}
// Object.assign(admin.prototype, usefulMethods);

// let admin1 = new admin();
// console.log(admin1);
// admin1.sayHi();

// Arrow function

const sum = (a, b) => a + b;
console.log(sum(5, 6));
const namePrint = (name) => console.log(name);
namePrint("Rider");
