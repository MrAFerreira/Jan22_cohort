const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/', (req, res, next) => {
  let data = {
    firstName: 'Karina',
    address: {
      street: 'Jardim Doca do Tabaco',
      number: 87,
    },
    bootcamp: 'Ironhack Web Dev Bootcamp',
    cities: ['Lisbon', 'Barcelona', 'Paris', 'Miami', 'Mexico City', 'Berlin', 'Seixal'],
  };
  res.render('index', data);
});

app.listen(3000, () => console.log('Connected to port 3000'));
