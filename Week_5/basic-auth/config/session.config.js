const session = require('express-session');

const MongoStore = require('connect-mongo');

const mongoose = require('mongoose');

module.exports = (app) => {
  //When we deploy to heroku
  app.set('trust proxy', 1);

  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: true,
      saveUninitialized: false,
      cookie: {
        //ternary operator
        //if(process.env.NODE_ENV === 'production'){
        // sameSite = 'none'
        //}else {
        //sameSite = 'lax'
        // }
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        //maxAge: 60000,
      },
      store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI || 'mongodb://localhost/basic-auth',
        //time to live
        ttl: 60 * 60 * 24 * 15, //15 days
      }),
    })
  );
};
