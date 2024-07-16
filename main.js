// Question 1

//Its output is   == I am var ==

// var: Variables declared by var are function-scoped. This means, they can be accessed anywhere within the entire function.

// let and const: Variables declared by let and const are block-scoped. This means, they can only be accessed within the block in which they are declared.






// Question 2

function greet(name, greeting="Hellow"){
  return `${greeting}, ${name}!`;
}

console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet("Bob", "Good morning")); // "Good morning, Bob!"






// Question 3

function sum(...num) {
  return num.reduce((accu , curvalue) => accu + curvalue)
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30, 40)); // 100
console.log(sum(5)); // 5








// Question 4

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const mergedArray = [...array1, ...array2, ...array3]

// Your code here
console.log(mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]







// Question 5

// const name = "John";
// const age = 30;

// const person = {
//   name,
//   age,

//   greet(){
//     return `Hi, I'm ${name} and I'm ${age} years old.`;
//   }
// }
// // Your code here
// console.log(person.greet()); // "Hi, I'm John and I'm 30 years old."










// Question 6
const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits){
  console.log(fruit)
}





// Question 7

const name = "Alice";
const age = 25;

// Your code here
const message = `My name is ${name} and I am ${age} years old`;
console.log(message); // "My name is Alice and I am 25 years old."








// Question 8
const students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 85 },
  { name: "Charlie", grade: 92 }
];

// Your code here
for(student of students){
  console.log(student)
}









// Question 9
const nestedArrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

//Your code here
for(nestedArray of nestedArrays) {
console.log(nestedArray.reduce((accum, curvalue) => accum + curvalue));
}








// Question 10
const a = 5;
const b = 10;

// Your code here
const result = `The sum of ${a} and ${b} is ${a+b}.`;
console.log(result); // "The sum of 5 and 10 is 15."
