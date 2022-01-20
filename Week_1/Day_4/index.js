//Function Declaration
//Named function that CAN be stored in a variable

function sum(num1, num2) {
  return num1 + num2;
}

//console.log('first function "declaration" :', sum(10, 20));

const mySum = sum;
//console.log(mySum(10, 290));

// Function Expression
// Anonymous function that IS stored in a variable

const newSum = function (num1, num2) {
  return num1 + num2;
};

//console.log(newSum(10, 20));

//Function declaration is hoisted (put on top of the program)
//checkFuncDeclaration();

function checkFuncDeclaration() {
  console.log('I can invoke this before it is defined');
}

//checkFuncExpression();

const checkFuncExpression = function () {
  console.log('Function expressions CAN NOT be invoked before');
};

//Callbacks

/* function doFirst() {
  setTimeout(function () {
    console.log('Do this first');
  }, 2000);
} */

function doFirst(callback) {
  console.log('Do first');
  callback();
}

function doAfter(name) {
  console.log('Do this after', name);
}

//doFirst(doAfter);
//doAfter();

/* setTimeout(function () {
  console.log('Do this first');
}, 2000);

let myArray = [1, 2, 3, 4];

myArray.forEach(function (element) {
  console.log(element);
});


function forEach(callback) {
  for (let i = 0; i < Array.length; i++){

    callback()
  }
} */

const greeting = function (name) {
  console.log(`Hello , ${name}`);
};

//greeting('Rita');

//Arrow functions
/* const arrowGreeting = (name) => {
  return `Hello , ${name}`;
}; */

//With only one expressipon (the return of the string)
const arrowGreeting = (name) => `Hello , ${name}`;

console.log(arrowGreeting('Ruben'));

/* const sayHi = () => 'Hi';

console.log(sayHi()); */

//Array methods

//.map

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//forEach way
/* const newArray = [];

myArray.forEach((number) => {
  number *= 2;
  newArray.push(number);
});

console.log(newArray); */

//using map

const newArray = myArray.map((number) => {
  return number + 10;
});

console.log(myArray);
//console.log(newArray);

const silent = ['can', 'you', 'hear', 'me'];

const scream = silent.map((word) => word.toUpperCase());

console.log(silent);
console.log(scream);

const cities = [
  'miami',
  'barcelona',
  'madrid',
  'amsterdam',
  'berlin',
  'sao paulo',
  'lisbon',
  'mexico city',
  'paris',
];

// Return a new array with the capital cities capitalized

const capitalCities = cities.map((city) => {
  return city[0].toUpperCase() + city.slice(1);
});

//console.log(capitalCities);

//.filter

const evenNumbers = myArray.filter((number) => {
  return number % 2 === 0;
});

const greaterThanFive = myArray.filter((number) => {
  return number > 5;
});

//console.log(evenNumbers);

//console.log(greaterThanFive);

const products = [
  { name: 'Keyboard', price: 30.0, available: 'Yep' },
  { name: 'Mouse', price: 64.99, available: 0 },
  { name: 'Controller', price: 59.8, available: true },
  { name: 'Speakers', price: 43.7, available: 0 },
];

// Rerturn an array with the available products

let availableProducts = products.filter((product) => product.available);

let keyboardAvailable = products.filter((product) => {
  return product.name === 'Keyboard';
});

//console.log(keyboardAvailable);
//console.log('original', products);
//console.log(availableProducts);

// .reduce

//const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let initialValue = 10;

/* let reducedArray = myArray.reduce(function (accumulator, currentValue) {
  console.log('Accumulator:', accumulator);
  console.log('CurrentValue:', currentValue);
  return accumulator + currentValue;
}, 0); */

/* let reducedArray = myArray.reduce((acc, value) => { return acc + value}, 0) */

//console.log(reducedArray);

const separateWords = ['United', 'different', 'okay', 15, 'really?', 10];

const unitedWord = separateWords.reduce((acc, value) => acc + value);

//first iteration
'U' + 'n' === 'Un';
//second iteration
'Un' + 'i' === 'Uni';
//third iteration
'Uni' + 't' === 'Unit';

console.log(unitedWord);

// return the total amount of characters

let total = separateWords.reduce((acc, value) => {
  if (typeof value === 'string') {
    return acc + value.length;
  } else {
    return acc + value;
  }
}, 0);

console.log(total);
