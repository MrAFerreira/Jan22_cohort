//Back-end
// Servers
// Databases
// API's

const http = require('http');

const server = http.createServer((request, response) => {
  //request is made by the client to the server
  //response is sent from the server to the client
  console.log(request);
  // /about /profile  - respond with your name
  if (request.url === '/') {
    response.write('Hello world, my first server');
    response.end();
  } else if (request.url === '/about') {
    response.write(
      'My teacher makes me do these small wierd exercises, but whatever, just let him be'
    );
    response.end();
  } else {
    response.statusCode = 404;
    response.write('404, page not found');
    response.end();
  }
});

server.listen(3000);
