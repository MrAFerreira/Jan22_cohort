const myObj = {
  longKey: 1,
  key2: 2,
  key3: 3,
};

//const myObjConstructor = new Object();

const myStore = {
  keyboard: 30.99,
  mouse: 15,
  screen: 'Not available!',
};

//Dot notation
//console.log(myStore.keyboard);

// Bracket notation
//console.log(myStore['keyboard']);

myStore.laptop = 1000;
myStore['chair'] = 123;

//console.log(myStore);

//in
//console.log('keyboard' in myStore);
//console.log('car' in myStore);

//console.log(myStore);

delete myStore.chair;

//console.log(myStore.laptop);

//Object.keys

let myKeys = Object.keys(myStore);

//console.log(myKeys);

//Object.values

let myValues = Object.values(myStore);

//console.log(myValues);

// for in loop

/* for (let product in myStore) {
  console.log(`product: ${product}, price: ${myStore[product]} `);
} */

/* delete myStore.keyboard;
delete myStore.mouse;
delete myStore.screen;
delete myStore.laptop;

console.log(myStore); */

// userObject = {}
//name, and city

// song1 = {title, artist, genre}

const user = {
  name: 'André',
  city: 'Lisbon',
};

const song1 = { title: 'Song 2', artist: 'Blur', genre: 'Rock' };
const song2 = { title: 'Pokerface', artist: 'Lady Gaga', genre: 'Pop' };
const song3 = { title: 'Ride on Time', artist: 'Tatsuro Yamashita', genre: 'City Pop' };

// Add a playlist property to user which has an array with your 3 songs

user.playlist = [song1, song2, song3];

console.log(user);

//console.log(user);
//Song 2
//Blur
//Rock

//This returns strings
/* user.playlist.forEach(function (song) {
  Object.values(song).forEach(function (element) {
    console.log(element);
  });
}); */

/* user.playlist.forEach(function (song) {
  for (let value in song) {
    console.log(song[value]);
  }
}); */

//This returns arrays
/* user.playlist.forEach(function (song) {
  console.log(Object.values(song));
}); */

/* for (let product in user.playlist) {
  let title = user.playlist[product].title;
  let artist = user.playlist[product].artist;
  let genre = user.playlist[product].genre;
  console.log(title, ':', artist, ':', genre);
} */

//Accessing arrays inside of arrays
const myArray = [
  ['André', 'Karina'],
  ['Luciana', 'Vitoria'],
];

console.log(myArray[1][1]);
