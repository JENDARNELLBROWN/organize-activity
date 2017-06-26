// Define my Router
const express = require('express');
const router = express.Router();

// Number Model
const number = require('../models/numbers');

// Morgan

const morgan = require('morgan');

if (router.get('env') == 'dev') {
  router.use(morgan('common', {
    skip: function(req, res) {
      return res.statusCode < 400
    },
    stream: __dirname + '/../morgan.log'
  }));
} else {
  router.use(morgan('dev'));
}

// Middleware



// router.use(function (req, res, next) {
//   console.log('Middleware is Running through app.use!!');
//   next();
// });

// function middlewareFunction(req, res, next) {
//   console.log('Middleware is Runningthrough function call!!');
//   next();
// };



// Endpoints
router.get('/', function(req, res) {
  console.log('/number endpoint');
  res.render('number', number.object);
});

router.post('/rng', function(req, res) {
  number.randomNumberGenerator();
  res.redirect('/number');
});

router.post('/list', function(req, res) {
  number.randomNumberListGenerator();
  res.redirect('/number');
});

// Export the Router
module.exports = router;
