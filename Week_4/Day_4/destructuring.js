// Destructuring

let person = {
  name: 'Mamoun',
  favouriteMusic: 'House',
  age: 23,
  address: {
    street: 'Jardim Doca do Tabaco',
    number: 82,
  },
};

/* let name = person.name;
let favouriteMusic = person.favouriteMusic;
let age = person.age;
 */

//Object destructuring
/* let {
  name,
  favouriteMusic,
  age,
  country = 'Morroco',
  address: { street, number },
} = person; */

//console.log(name);
/* console.log(favouriteMusic);
console.log(age);
console.log(country);
console.log(street);
console.log(number); */

const pokemon = {
  name: 'Skarmory',
  types: {
    main: 'Flying',
    secondary: 'Steel',
  },
  generation: 2,
};

let {
  name,
  types: { main },
  generation,
} = pokemon;

/* console.log(`${name} is of the type ${main} and is from the generation ${generation}`); */

//Array destructuring

const campuses = ['Barcelona', 'Madrid', 'Lisbon', 'Paris'];

/* const [campus1, campus2, campus3 , campus4] = campuses; */

/* let campus1 = campuses[0]
let campus2 = campuses[1]
let campus3 = campuses[2]
let campus4 = campuses[3] */

/* console.log(campus1);
console.log(campus2);
console.log(campus3);
console.log(campus4); */

const europeanCampuses = [
  ['Barcelona', 'es'],
  ['Lisbon', 'pt'],
  ['Paris', 'fr'],
];

const [[], [, country2], [campus3, country3]] = europeanCampuses;

/* console.log(campus1);
console.log(campus2);
console.log(campus3);
console.log(country1);
console.log(country2);
console.log(country3); */

let [a, b = 2, c, d = 1] = [3, 4];

//console.log(a, b, c, d);

//Spread operator

const reptiles = ['snake', 'iguana', 'crocodile'];
const mammals = ['cat', 'dog', 'pig'];

const reptilesCopy = [...reptiles];

const animals = [...reptiles, ...mammals];

const mamoun2 = { ...person };

console.log(mamoun2);

console.log(animals);

console.log(reptilesCopy);

//Rest operator
function add(...numbers) {
  return numbers.reduce((acc, value) => acc + value);
}

console.log(add(1, 2, 3, 87, 87212, 47, 15));

function showMovie(title, year, ...actors) {
  console.log(`${title}, was released in ${year}, and featured ${actors[0]} and ${actors[1]} `);
}

showMovie('Titanic', '1999', 'Leonardo Dicaprio', 'Kate Winslet');
