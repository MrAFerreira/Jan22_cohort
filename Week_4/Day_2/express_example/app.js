// npm i express

const express = require('express');

const app = express();

// Url  - /about /profile /contatcs /history
//method - GET / POST ...

//Making the public folder the default one for static files
app.use(express.static('public'));

//Routes
//home route
app.get('/home', (request, response, next) => {
  //console.log(request);
  //response.send('<h1>Welcome Ironhackers!</h1>');
  response.sendFile(__dirname + '/public/views/home.html');
});

app.get('/home', (request, response, next) => {
  //console.log(request);
  //response.send('<h1>Welcome Ironhackers!</h1>');
  response.sendFile(__dirname + '/public/views/home.html');
});

//cat route
app.get('/cat', (request, response, next) => {
  console.log(__dirname);
  response.sendFile(__dirname + '/public/views/cat.html');

  /*  response.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/stylesheets/style.css">
    <title>Document</title>
  </head>
  <body>
    <h1>HoverCat</h1>
    <img src="/images/hover-cat.jpeg">
    
  </body>
  </html>`); */
});

//Views

app.listen(3000, () => console.log('Server running on port 3000!'));
