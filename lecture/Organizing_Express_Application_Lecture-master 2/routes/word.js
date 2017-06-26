// Declared constants including Router
const express = require('express');
const router = express.Router();

// Word Model
const word = require('../models/words');

// Endpoints related to words
router.get('/', function(req, res) {
  res.render('word', word.object);
});

router.post('/list', function(req, res) {
  word.randomWordListGenerator();
  res.redirect('/word');
});

router.post('/random', function(req, res) {
  word.randomWordGenerator();
  res.redirect('/word');
});

// Export my Router
module.exports = router;
