//Arrays

const emptyArray = [];

const namesArray = ['José', 'Rita', 'Greg'];

const differentArray = ['Karina', 100, true];

/* console.log(namesArray[1]);
console.log(namesArray.length); */

// Array methods

namesArray.push('Filipa');
//console.log(namesArray);

namesArray.unshift('Francisco');
console.log(namesArray);

let popName = namesArray.pop();
console.log(popName);

console.log(namesArray);

namesArray.shift();
console.log(namesArray);

//.splice(startingIndex, numberOfElementsToRemove)
/* let indexToFind = namesArray.indexOf('Rita');
console.log(indexToFind);

let getName = namesArray.splice(indexToFind, 1);
console.log(namesArray); */
/* let singleElement = getName[0];
console.log(getName);
console.log(singleElement); */

/* let fruitsArray = ['banana', 'apple', 'cabbage', 'carrot', 'pinneaple'];
console.log('original array', fruitsArray);

let vegetablesArray = fruitsArray.splice(2, 2);

console.log('only fruits; ', fruitsArray);
console.log('only vegetables', vegetablesArray); */

// Iteration

/* for (let i = 0; i < namesArray.length; i++) {
  console.log(namesArray[i]);
}

namesArray[2] = 100;
console.log(namesArray); */

//Loop 1
//console.log(namesArray[0]);
//Loop 2
//console.log(namesArray[1]);
//Loop 3
//console.log(namesArray[2]);

// Create an array with 100 elements from 1 to 100
//Don't use array.push()
//console.log at the end

/* let myArray = [];

for (let i = 0; i <= 99; i++) {
  myArray[i] = i + 1;
}

console.log(myArray); */

/* let myArray = [];

function addFirst(array, element) {
array.unshift(element)
}

for (let i = 100; i > 0; i--) {
  addFirst(myArray, i)
}

console.log(myArray); */

//forEach

/* namesArray.forEach(function (element, index) {
  console.log(`${element} takes seat number ${index}`);
});

console.log(namesArray); */

/* let numbersArray = [23, 567, 98, 87, 6453];

numbersArray.forEach(function (number) {
  console.log(number + 10);
}); */

/* let longString = 'How much wood would a woodchuck chuck if a woodchuck could chuck wood?';

let words = longString.split(' ');

console.log(words); */

//Functions

// DRY - Don't repeat yourself

//Function declaration
/* function functioName(parameters) {
  // write our actions
  return something;
} */

function sayHello(name) {
  if (!name) {
    return `Please enter a name`;
  }
  return `Hello ${name}!`;
}

console.log(sayHello());
console.log(sayHello('André'));
// function initialization
/* sayHello('Taylor');
sayHello('Victoria');
sayHello('Gui');
sayHello('Francisco');
let returnedValue = sayHello('André');
console.log('return', returnedValue); */

/* function meetAndGreet(name1, name2) {
  console.log(`Hello ${name1}, meet ${name2}`);
}

meetAndGreet('Hollie', 'Asif'); */

//Create a function that accepts an array and calculates the average

// sum of all values / number of values

// take 1 array  //
// sum the elements in the array
// divide by the number of items

let myAverageArray = [350, 560, 680, 10];
//let tensArray = [10, 10, 10];

function sum(arr) {
  if (!arr) {
    return 'Please input a valid array';
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function avg(arr) {
  return sum(arr) / arr.length;
}

//console.log(sum());
//console.log(avg(myAverageArray));
//console.log(avg(tensArray));

function catchEm(trainer, poke1, poke2, poke3) {
  const dex = [trainer, poke1, poke2, poke3];
  return dex;
}

const hollieDex = catchEm('Hollie', 'Psyduck', 'Bulbasaur', 'Mew');

console.log(hollieDex);

function addTen(n1, n2, n3) {
  const result = [n1 + 10, n2 + 10, n3 + 10];
  return result;
}

console.log(addTen(10, 67, 98));
