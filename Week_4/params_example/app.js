const express = require('express');
const hbs = require('hbs');
const path = require('path');

//Importing the bodyparser middleware
const bodyParser = require('body-parser');

const app = express();

//Telling our app to use it
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'hbs');

//Middleware

function myMiddleware(req, res, next) {
  console.log('My middleware activated!');
  //console.log(req);

  req.secretValue = 'Super secret';

  next();
}

app.use(myMiddleware);

//Route params

app.get('/', (req, res, next) => {
  res.render('index');
});

app.get('/users/:profile', (req, res, next) => {
  console.log(req.params);

  /* let name = req.params.profile;

 People.find((name)).then((userInformation) =>{
    res.render('profile', userInformation)
  })   */
  res.send(req.params);
});

app.get('/users/:username/books/:bookId', (req, res, next) => {
  console.log(req.params);
});

//Query Params

app.get('/search', (req, res, next) => {
  console.log(req.query);
  res.send(req.query);
});

app.get('/login', (req, res, next) => {
  res.render('login');
});

app.post('/login', (req, res, next) => {
  //console.log(req.body);
  let { email, password } = req.body;
  res.send(`The email is ${email} and the password is ${password}`);
});

app.get('/test', (req, res, next) => {
  console.log(req.secretValue);
  res.send(req.secretValue);
});

app.listen(3000, () => console.log('Connected to port 3000!'));
