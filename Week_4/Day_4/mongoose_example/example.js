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

let newCat = { name: 'Mr. Bubbles', color: 'white', age: 33 };
function addCat(data) {
  Cat.create(data)
    .then((catCreated) => console.log(catCreated))
    .catch((err) => console.log(err));
}

addCat(newCat);
