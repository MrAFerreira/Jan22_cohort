const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

let myRecipe = {
  title: 'Tuna Chilly',
  level: 'Easy Peasy',
  ingredients: [
    'Tuna',
    'black beans',
    'Tomato Sauce',
    'Chillies',
    'Onion',
    'Bell Peppers',
    'White Rice',
  ],
  cuisine: 'Weird',
  dishType: 'main_course',
  duration: 120,
  creator: 'André',
};

async function createDatabase() {
  try {
    const connected = await mongoose.connect(MONGODB_URI);
    console.log(connected.connection.name);
    await Recipe.deleteMany();
    let recipeCreated = await Recipe.create(myRecipe);
    console.log(recipeCreated);
    await Recipe.insertMany(data);
    await Recipe.updateOne({ title: 'Rigatoni alla Genovese' }, { duration: 100 });
    await Recipe.deleteOne({ title: 'Carrot Cake' });
    mongoose.disconnect(() => console.log('Disconnected from db'));
  } catch (err) {
    console.log(err);
  }
}

createDatabase();

// Connection to the database "recipe-app"
/* mongoose
  .connect(MONGODB_URI)
  .then((x) => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany();
  })
  .then(() => {
    //Write your code here
    return Recipe.create(myRecipe);
  })
  .then((createdRecipe) => {
    console.log(createdRecipe);
    return Recipe.insertMany(data);
  })
  .then((many) => {
    console.log(many);
    return Recipe.updateOne({ title: 'Rigatoni alla Genovese' }, { duration: 100 });
  })
  .then((updated) => {
    console.log(updated);
    return Recipe.deleteOne({ title: 'Carrot Cake' });
  })
  .then((deleted) => {
    console.log(deleted);
    mongoose.disconnect(() => console.log('Disconnected from db'));
  })
  .catch((error) => {
    console.error('Error connecting to the database', error);
  }); */
