//Promises

//async and sync
/* setTimeout(() => {
  console.log('Me');
}, 1000);

console.log('First'); */

//Promise

/* const myPromise = new Promise((resolve, reject) => {
  if(someCondition) {
    resolve()
  } else {
    reject()
  }
}) */

// Promises have 3 states:
// Pending

/* const promisePending = new Promise((resolve, reject) => {});

console.log(promisePending);

// Resolved

const promiseResolved = Promise.resolve(42);
console.log(promiseResolved);

// Rejected

const promiseRejected = Promise.reject('We rejected it');
console.log(promiseRejected); */

const names = ['André', 'Karina', 'Guilherme', 'Diogo'];

/* function obtainNames(count) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(names[count]);

      if (!names[count]) {
        reject('Name not found - error');
      } else {
        resolve(names[count]);
      }
    }, 500);
  });
} */

//then()
//will run only after the promise is successful

//Promise Chain

/* obtainNames(0)
  .then(() => obtainNames(1))
  .then(() => obtainNames(2))
  .then(() => obtainNames(4))
  .then(() => obtainNames(3))
  .catch((error) => console.log(error))
  .finally(() => console.log('This will always run')); */

//catch()

//If you get an error on a promise chain, it will skip all blocks and go directly to the .catch()

//finally()
//Always runs independently of the promise resolving or being rejected.

//Create a function that returns a promise
//the function will take an array with strings
//If the array has 4 persons :
// Console.log 'This row has :  Andre, Karina, Guilherme, Diogo'
//If not : reject with the message ('Incorrect number of persons')

//If it has the correct amount: resolve with the array, and only after that you console.log the array

const newRow = ['Pedro', 'Vitor', 'Filipa', 'Hollie'];

function obtainRows(arr) {
  return new Promise((resolve, reject) => {
    if (arr.length === 4) {
      resolve(arr);
    } else {
      reject('Incorrect number of people');
    }
  });
}

/* obtainRows(newRow)
  //after the promsie resolves successfuly:
  .then((response) => {
    //Inside of the then, we have access to the return value of the promise
    console.log(`The row has: ${response[0]}, ${response[1]},${response[2]},${response[3]}`);
    return response;
  })
  .then((response2) => {
    // throwing an error on purpose - Will go to the next catch block
    throw new Error('I want it to stop here');
    console.log(response2);
    return 'Finsihed everything';
  })
  .then((response3) => {
    console.log(response3);
  })
  .catch((err) => console.log(err)); */

// Promise.all();

let pr1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 1000);
});

let pr2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(232424);
  }, 2000);
});

let pr3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: 'André' });
  }, 4000);
});

/* Promise.all([pr1, pr2, pr3]).then((values) => {
  console.log(values);
}); */

// Async await

//async - asynchronous
//await

//Async with declaration
//async function myFunc() {}

//Async with function expression
const myFunc = async () => {
  return true;
};

//myFunc().then((value) => console.log(value));

//Synchronous runs in the same order (top to bottom)

//Asynchronous runs parallel
/* setTimeout(() => {
  console.log('last');
}, 0); */

//Synchronous
/* console.log('1');
console.log('2');
console.log('3'); */

function obtainNames(count) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(names[count]);

      if (!names[count]) {
        reject('Name not found - error');
      } else {
        resolve(names[count]);
      }
    }, 500);
  });
}

//await

const getNames = async () => {
  try {
    await obtainNames(0);
    await obtainNames(5);
    console.log(`It worked`);
  } catch (err) {
    console.log(err);
  } finally {
    console.log('Everything ran');
  }
};

getNames();

//try / catch

/* try{

} catch(err) {

} */
