//ODM - Object Document Mapper

const mongoose = require('mongoose');
const Cat = require('./models/Cat');

mongoose
  .connect('mongodb://localhost/animals')
  .then((x) => console.log('Connected to Mongo! Database name:', x.connections[0].name))
  .catch((err) => console.log(err));

//CRUD

//Models

//Creating a model - (Create)
/* const Cat = mongoose.model('Cat', { name: String }); */

/* 
Cat : {
  find: function find(),
  update: function method(),
}
 */
//Mongoose picks the model name and cretaes a collection with that name

//creating a variable based on that model
//const kitty = new Cat({ name: 'Mr. Pusheen' });
/* 
kitty : {
  name: 'Mr.pusheen'
  save() => {}
}
*/

//Saving that information on the DB
/* kitty
  .save()
  .then((createdCat) => console.log(`A new cat was created! ${createdCat}`))
  .catch((err) => console.log(err)); */

//Finding a document
//find()

//Callback approach
/* Cat.find({}, (err, cats) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Got all the cats!');
  cats.forEach((cat) => console.log(cat.name));
}); */

//Promise approach
/* Cat.find({ name: 'Mr. Pusheen' })
  .then((catsFromDb) => console.log(catsFromDb))
  .catch((err) => console.log(err));
 */
/* function addCat(catName, color, age) {
  const kitty = new Cat({ name: catName, color: color, age: age });
  kitty
    .save()
    .then((createdCat) => console.log(`A new cat was created! ${createdCat}`))
    .catch((err) => console.log(err));
} */

let newCat = { name: 'Mr. Meowy', color: 'white', age: 8 };
function addCat(data) {
  Cat.create(data)
    .then((catCreated) => console.log(catCreated))
    .catch((err) => console.log(err));
}

addCat(newCat);
//find() returns an array
/* Cat.find({ age: { $gte: 10 } }, 'name age')
  .then((catsFound) => {
    catsFound.forEach((cat) => console.log(cat.name));
  })
  .catch((err) => console.log(err)); */

//return a single object
/* Cat.findById('62050182c7d7ac44caff2972')
  .then((foundCat) => console.log(foundCat))
  .catch((err) => console.log(err)); */

//Update
/* Cat.findByIdAndUpdate('62050182c7d7ac44caff2972', { color: 'grey' })
  .then((previousValue) => console.log(previousValue))
  .catch((err) => console.log(err)); */

/* Cat.updateMany({ age: 10 }, { age: 11 })
  .then((updateInformation) => console.log(updateInformation))
  .catch((err) => console.log(err)); */

//Delete
/* Cat.findByIdAndDelete('62050778473b9265d7eca810')
  .then((deletedCat) => console.log(deletedCat))
  .catch((err) => console.log(err)); */

/* Cat.deleteOne({ name: 'Mr. Pusheen' })
  .then((cat) => console.log(cat))
  .catch((err) => console.log(err)); */

/* Cat.countDocuments()
  .then((value) => console.log(`We have ${value} cats`))
  .catch((err) => console.log(err)); */
