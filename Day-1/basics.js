// OOPs -> Object Oriented Programming system/structure -> Paradigm

// class -> a custom data structure (props and methods) -> rules / blueprint
// objects -> real time
// properties or attributes  -> variables inside a class
// methods or behaviours -> functions inside a class

// class Human {
//   age = 10;

//   eat(params) {
//     console.log("eating....");
//   }
// }

// ways to create objects
// 1. Object literals
// 2. factory methods
// 3. Constructor method

// object literals
// const aditya = {
//   name: "aditya",
//   age: 10,
//   display: function () {
//     function inner() {
//       console.log(`My name is ${this.name} and my age is ${this.age}`);
//     }

//     inner();
//   },
// };

// aditya.display();

// Node JS Global object / window object
// const obj = {
//   name: "vasanth",
//   demo: function () {
//     const inner = () => {
//       console.log(this);
//     };
//     inner();
//   },
// };

// obj.demo();

// IIFE -> Immediately invoked function expression
// (function (module, exports, __pathname, __dirname, require) {
//   // code
//   function demo() {
//     console.log(this);
//   }

//   demo();
// })(module, exports, __pathname, __dirname, require);
// const axios = require("axios");
// module.exports = {};
// console.log(module);

// this -> parent
// If parent is a fn, this -> global object
// if parent is an object, this -> object
// arrow fn always points to parent obj

// const demo = () => {
//   console.log(this);
// };

// demo();

// const vasi = {
//   name: "vasi",
//   age: 10,
//   display: function () {
//     console.log(`My name is ${this.name} and my age is ${this.age}`);
//   },
// };

// console.log(vasi);

// const virat = {
//   name: "virat",
//   age: 36,
//   display: function () {
//     console.log(`My name is ${this.name} and my age is ${this.age}`);
//   },
// };

// vasi.display();
// virat.display();
// console.log(vasi);
// console.log(virat);

// factory method -> fn which generates obj
// function createPerson(name, age) {
//   return {
//     name,
//     age,
//     display: function () {
//       console.log(`My name is ${this.name} and my age is ${this.age}`);
//     },
//   };
// }

// const vasi = createPerson("vasi", 10);
// const virat = createPerson("virat", 36);

// // vasi.display();
// // virat.display();

// console.log(vasi);
// console.log(virat);

// constructor method
// class -> syntactic suagar of fns
// class createPerson {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   //   getters
//   //   get display() {
//   //     console.log(`My name is ${this.name} and my age is ${this.age}`);
//   //   }

//   //   static -> utils
//   static display() {
//     console.log(this.name);
//     // console.log(`My name is ${this.name} and my age is ${this.age}`);
//   }
// }

// const vasi = new createPerson("vasi", 10);
// const virat = new createPerson("virat", 30);
// console.log(vasi);
// console.log("=".repeat(50));
// console.log(virat);
// vasi.display();
// virat.display();

// vasi.display();
// createPerson.display();

// polyfills
// Array.prototype.vasanth = function () {
//   console.log("vasanth");
// };

// const nums = new Array(); // [];
// nums.vasanth();

// Arrays also object
const nums = [1, 2, 3];
// console.log(Array.isArray(nums));
nums[100] = "vasanth";
nums["name"] = "vasanth";
console.log(nums);

// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i]);
// }

// for (let num of nums) {
//   console.log(num);
// }

for (let key in nums) {
  console.log(key);
}

// const obj = {};
// console.log(obj.name);
