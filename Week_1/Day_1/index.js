// This is a comment
/* This is a 
multiline comment */

// Variables
//var
//let
//const

//Declaration
//let welcome;
let a, b, c;

//Initialization
//welcome = 'Hello Ironhacker';

//DEclaration and initialization

let welcome = 'Hello Ironhacker';
welcome = 'Hey';

//console.log(welcome, typeof welcome);

/* welcome = 22;

console.log(welcome, typeof welcome);

const secondWelcome = 'Hi there';

console.log(secondWelcome);

secondWelcome = 1;

console.log(secondWelcome);

const city; */

// Primitive Types
/*
Strings
Number
Boolean
Null
Undefined
Symbol (ES6)
*/

//Number

let age = 27;
let price = 10.99;

//NaN
let name = 'José';
let division = name / 2;

//console.log(division, typeof division);

//Operators

/*
+ sum
- subtraction
*multiplication
/division
*/

//console.log(age + price);

// ** exponential

let twoThePower = 2 ** 3;

//console.log(twoThePower);

// % modulo (remainder)

let moduloFirst = 5 % 2;

//console.log(moduloFirst);

let newNumber = 10;

newNumber *= 10;

//console.log(newNumber);

//console.log(2 + 2);

//String

let firstName = 'Guilherme';
let lastName = 'Silva';
let favouritePet = `Dog`;

// Concatenation
let oldMessage = 'Hello ' + firstName + ' ' + lastName + ', how are you?';

//console.log(oldMessage);

// String interpolation
let newMessage = `Hello ${firstName} ${lastName}, how are you?`;

//console.log(newMessage);

let favouriteMovie = 'I love "Lord of the rings" ';

//console.log(favouriteMovie);

let multiLane = '1.Frodo \n2.Bilbo \n3.Pippin';

//console.log(multiLane);

//console.log(firstName.length);

//String methods

let myString = 'This is a long message';

//charAt method
console.log(myString.charAt(21));

//Bracket notation
console.log(myString[2]);
console.log(myString[7]);

//console.log(myString.indexOf('long'));
//console.log(myString.indexOf('s', 4));
console.log(myString.indexOf('Gui'));

console.log(myString.lastIndexOf('s'));

//repeat
console.log('ah'.repeat(3));
let lyrics = 'alright ';

console.log(lyrics.repeat(7));

//substring and slice
let howdy = 'Hey there, how are you?';
let startIndex = 0;
console.log(howdy.substring(startIndex, 3));
console.log(howdy.slice(-3, -1));

//localeCompare
//console.log('age'.localeCompare('bonus'));
//console.log('bonus'.localeCompare('age'));
//console.log('ac'.localeCompare('ab'));
console.log('2'.localeCompare('10000000'));

const shakespeare = 'To be, or not to be, that is the question.';

//startsWith
/* console.log(shakespeare.startsWith('To be'));
console.log(shakespeare.startsWith('not'));
console.log(shakespeare.startsWith('not to be', 10)); */

//endsWith
/* console.log(shakespeare.endsWith('question.'));
console.log(shakespeare.endsWith('to be'));
console.log(shakespeare.endsWith('to be', 19)); */

//includes

/* let toBe = 'To be';
console.log(shakespeare.includes('to be'));
console.log(shakespeare.includes('nonexistent'));
console.log(shakespeare.includes('To be'));
console.log(shakespeare.includes('To be', 1)); */

//Boolean
/* 
let myBool = true;
let myBool2 = false;

console.log(myBool);

//Operator

//OR
//searches for at lest one True value
console.log(false || true);
console.log(false || false);
console.log(false || 10 > 1);

//AND
console.log(true && (true || false));
console.log(true && 10 > 1);
 */

//Short-circuits
/* console.log(false && ...)
console.log(true || ...) */

//NOT
//console.log(!true);
//console.log(!(10 > 1));

// Undefined

let user;
console.log(user);

// Null
let userName = null;
userName = 'Victoria';

//Truthy and Falsy

if (true && '0' && 'false' && {} && [] && -234) {
  console.log('All of these are true');
}

if (false || 0 || '' || null || undefined || NaN) {
  console.log('These are all falsy');
}

/* if (userName) {
  console.log('Verified user');
} */

//Immutability

/* let myName = 'André';

console.log(myName);

myName = 'Lisbon';

console.log(myName);

myName[0] = 'F';
console.log(myName);

myName += myName.slice(0, 2);
console.log(myName);

let immutableString = 'String';
console.log(immutableString);
immutableString = 89;
console.log(immutableString); */

// Conditionals

//If, else, else if

/* if (false) {
  console.log('Yep, this is true');
} else {
  console.log('Nope, this is false');
}

const myAge = 27;

if (myAge >= 65) {
  console.log('You have a senior discount');
} else if (myAge <= 16) {
  console.log('You have a junior discount');
} else {
  console.log('No discount')
} */

// Switch

const pokemon = 'Pikachu';
let type = '';

switch (pokemon) {
  case 'Pikachu':
    type = 'Electric';
  case pokemon.length === 7:
    console.log('You chose Pikachu');
    break;
  case 'Charmander':
    type = 'Fire';
    break;
  case 'Squirtle':
  case 'Totodile':
  case 'Mudkip':
    type = 'Water';
    break;
  default:
    type = 'Other';
}

//console.log(`The pokemon type is ${type}`);

//While

let count = 0;

/* while (count <= 100) {
  console.log(count);
  count++;
}
 */

/* do {
  console.log(count);
  count++;
} while (count <= 0); */

//Create a loop that console.logs numbers from 0 to 30
// 10, 20, 30 = 'ten', 'twenty' , 'thirty'
//0
//1
//...
// 'ten'

/* while (count <= 30) {
  if (count === 10) {
    console.log('ten');
  } else if (count === 20) {
    console.log('twenty');
  } else if (count === 30) {
    console.log('thirty');
  } else {
    console.log(count);
  }
  count++;
} */

// for

/* for(initialization; condition; finalExpression) {
  // Logic here
} */

/* for (let i = 1; i <= 3; i++) {
  console.log('Asif did a lap');
  for (let j = 1; j <= 3; j++) {
    console.log('Ruben did a lap');
  }
} */

// for ... of

/* const iterable = 'Lisbon Campus';

for (character of iterable) {
  if (character === 'L') {
    console.log('Found an L!');
  } else {
    console.log(character);
  }
}

console.log(iterable); */

//break

let counter = 0;

/* while (counter < 5) {
  counter++;
  console.log(counter);
  if (counter === 3) {
    break;
  }
} */

//continue

/* while (counter < 5) {
  counter++;
  if (counter === 3) {
    continue; //continue to the next iteration
  }
  console.log(counter);
} */

// iterate from 0 to 20
//  0 is even
//  1 is odd

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

// VCS / DVCS
// Distributed Version Control System
