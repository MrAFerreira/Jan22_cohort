// Scope

// Global scope
//Function scope
//Block scope
//var message;

console.log(message);
var message = 'Hello from the global scope!';

console.log(message);

function localScoped() {
  let greeting = 'Hello from the function/local scope';
  console.log(message);
  return greeting;
}

//localScoped();

//console.log(greeting);

//var message = 'New message';

//console.log(message);

/* for (let i = 1; i <= 20; i++) {
  console.log(`Iteration number ${i}`);
}
console.log(`After the loop: ${i}`); */

let name = 'Greg';
let age = 0;
if (true) {
  let name = 'Carlos';
  age = 21;
  console.log(`Name inside if statement: ${name}, ${age}`);
}

//console.log(age);

//console.log(name);

let myObj = {};

myObj.name = 'José';

/* myObj = { name: 'José' }; */

//console.log(myObj);

//Shadowing
let a = 1;
let b = 2;

function inner() {
  a = 4;
  let b = 3;
  return b;
}

/* inner();
console.log(a);
console.log(b); */
let result = 0;
const multiply = (a, b) => {
  let newNumber = 25;
  result = a * b;
  return result;
};

//multiply(2, 3);

/* for (let i = 0; i <= 10; i++) {
  console.log(i);
} */

/* function add(n1, n2) {
  return n1 + n2;
}

function makeCalc(n1, n2, operation) {
  if (operation === 'add') {
    return add(n1, n2);
  }
} */

/* function init() {
  const result = makeCalc(2, 3, 'add');
  console.log(result);
}

init();

function powerOfthree(num) {
  return num ** 3;
} */

//let invalidArray = new Array(-1);

/* try {
  //Write your code here
  powerOfthree(3);
} catch (error) {
  console.log(error);
  console.log('Error here');
} finally {
  console.log('Still runs');
} */

/* function getUserName(name) {
  if (!name) {
    throw new Error('Incomplete or missing name');
  }
  console.log(name);
}

getUserName(); */

// Async and callbacks

function someCallback() {
  console.log('Hey there');
}

const timeoutId = setTimeout(() => {
  console.log('Wait some time');
}, 3000);

clearTimeout(timeoutId);
console.log('I am first');
//const timeoutId = setTimeout(someCallback, 3000);

const intervalId = setInterval(() => {
  console.log('1 second');
}, 1000);

clearInterval(intervalId);

// Create a function that counts seconds up to ten, and then it stops
//1 second
//2 second...
//10 seconds

//Gui's solution
/* let time = 1;
const intervalId2 = setInterval(function () {
  console.log(`${time} seconds`);
  time++;
  if (time > 10) {
    clearInterval(intervalId2);
  }
}, 1000); */

const user = {
  name: 'Asif',
  age: 23,
  getOlder: function () {
    setInterval(() => {
      this.age += 1;
      console.log(this.age);
    }, 1000);
  },
};

//user.getOlder();
