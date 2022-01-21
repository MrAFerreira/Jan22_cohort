//OOP Object Oriented Programming

const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

let dice;

let player1 = {
  name: 'Francisco',
  color: 'black',
  position: 0,
  cash: 1000,
  move() {
    dice = 1 + Math.floor(6 * Math.random());

    this.position = (this.position + dice) % squares.length;

    this.cash += squares[this.position];

    if (this.cash <= 0) {
      console.log(`Game over for ${this.name}`);
    }
  },
  displayInfo() {
    console.log(`${this.name} is at position ${this.position} and has ${this.cash}`);
  },
};

let player2 = {
  name: 'Mamoun',
  color: 'blue',
  position: 0,
  cash: 1000,
  move() {
    dice = 1 + Math.floor(6 * Math.random());
    this.position = (this.position + dice) % squares.length;

    this.cash += squares[this.position];

    if (this.cash <= 0) {
      console.log(`Game over for ${this.name}`);
    }
  },
  displayInfo() {
    console.log(`${this.name} is at position ${this.position} and has ${this.cash}`);
  },
};

let player3 = {
  name: 'Filipa',
  color: 'green',
  position: 0,
  cash: 1000,
  move() {
    dice = 1 + Math.floor(6 * Math.random());

    this.position = (this.position + dice) % squares.length;

    this.cash += squares[this.position];

    if (this.cash <= 0) {
      console.log(`Game over for ${this.name}`);
    }
  },
  displayInfo() {
    console.log(`${this.name} is at position ${this.position} and has ${this.cash}`);
  },
};

/* player1.move();
player1.displayInfo();
player2.move();
player2.displayInfo();
player3.move();
player3.displayInfo(); */

//Roll the dice
/* dice = 1 + Math.floor(6 * Math.random());

//Updating the position
player1.position = (player1.position + dice) % squares.length;

player1.cash += squares[player1.position];

if (player1.cash <= 0) {
  console.log(`Game over for ${player1.name}`);
} */

// Player 2 turn
/* 
dice = 1 + Math.floor(6 * Math.random());

//Updating the position
player2.position = (player2.position + dice) % squares.length;

player2.cash += squares[player2.position];

if (player2.cash <= 0) {
  console.log(`Game over for ${player2.name}`);
} */

// Player 3 turn

/* dice = 1 + Math.floor(6 * Math.random());

//Updating the position
player3.position = (player3.position + dice) % squares.length;

player3.cash += squares[player3.position];

if (player3.cash <= 0) {
  console.log(`Game over for ${player3.name}`);
} */

/* console.log(player1);
console.log(player2);
console.log(player3); */

// Create a library object,
//shelf - an array
//create a method addBook that receives a string and adds it to the shelf
//create a print method that console.logs every item in your shelf Extra: print everything in a single console.log separated by a comma ,
//ex: 'Lord of the Rings, The great gatsby, Harry Potter'

/* const library = {
  shelf: [],
  addBook(book) {
    this.shelf.push(book);
  },
  print() {
    console.log(this.shelf.sort().join(', '));
  },
};

library.addBook('1984');
library.addBook('Lord of the rings');
library.addBook('Around the world in 80 days');
library.print(); */

/* let player1 = {
  name: 'Francisco',
  color: 'black',
  position: 0,
  cash: 1000,
  properties: [],
  move() {
    dice = 1 + Math.floor(6 * Math.random());

    this.position = (this.position + dice) % squares.length;

    this.cash += squares[this.position];

    if (this.cash <= 0) {
      console.log(`Game over for ${this.name}`);
    }
  },
  displayInfo() {
    console.log(`${this.name} is at position ${this.position} and has ${this.cash}`);
  },
}; */

// classes

class Player {
  //constructor - built in javascript method
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.position = 0;
    this.cash = 1000;
  }

  //our own methods
  move() {
    dice = 1 + Math.floor(6 * Math.random());
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash <= 0) {
      console.log(`Game over for ${this.name}`);
    }
  }

  displayInfo() {
    console.log(`${this.name} is at position ${this.position} and has ${this.cash}`);
  }
}

const vitor = new Player('Vitor', 'grey');
let taylor = new Player('Taylor', 'white');
let ruben = new Player('Ruben', 'pink');

/* console.log(vitor);
console.log(taylor);
console.log(ruben); */

/* vitor.move();
vitor.displayInfo();
taylor.move();
taylor.displayInfo();
ruben.move();
ruben.displayInfo();
 */

class Animal {
  constructor(name, color, sound) {
    this.name = name;
    this.color = color;
    this.sound = sound;
  }
  makeSound() {
    console.log(this.sound);
  }
}

class Cat extends Animal {
  constructor(name, color, sound, isAsleep) {
    super(name, color, sound);
    this.isAsleep = isAsleep;
  }
  changeState() {
    this.isAsleep = !this.isAsleep;
  }
}

const tom = new Cat('Tom', 'Blueish Gray', 'meow', false);

/* console.log(tom);
tom.changeState();
tom.makeSound();
console.log(tom); */

class Penguin extends Animal {
  constructor(name, fishCaught) {
    super(name, 'black and white', 'Pardon, excuse me');
    this.fishCaught = fishCaught;
  }
}

const happy = new Penguin('Happy', 7);
//happy.makeSound();

//console.log(happy);

//create a class Whale that extends Animal
//additional attribute : eaten which is an empty array []
//create a method called eat() that accepts a string and will add it to the property eaten. It also makes the animal sound

// Create a white whale called Moby with the sound 'Yum!'

// Make her eat Ahab and Pequod

/* class Whale extends Animal {
  constructor(name, color, sound, eaten) {
    super(name, color, sound);
    this.eaten = eaten;
  }

  eat(food) {
    this.eaten.push(food);
    this.makeSound();
  }
}

const moby = new Whale('Moby', 'white', 'Yum!', []);

moby.eat('Ahab');
moby.eat('Pequod');
console.log(moby.eaten); */

class Whale extends Animal {
  constructor(name, color, sound) {
    super(name, color, sound);
    this.eaten = [];
  }
  eat(food) {
    this.eaten.push(food);
    this.makeSound();
    console.log(`This ${food} was delicious!`);
    if (this.eaten.length >= 5) {
      console.log('I am full!');
    } else {
      console.log('I love food!');
    }
  }
  showEaten() {
    if (!this.eaten.length) {
      console.log("I haven't eaten anything, sad Whale!");
    } else {
      console.log(`I have eaten ${this.eaten.join(', ')}! Loved it! Happy Whale`);
    }
  }

  makeSound() {
    super.makeSound();
    console.log("I'm a whale");
  }
}

let moby = new Whale('Moby', 'White', 'Yum!');

moby.makeSound();
console.log(moby);
