const express = require('express');
const mustacheExpress = require('mustache-express');
const session = require('express-session');
const bodyParser = require('body-parser');
const fs = require('fs');
const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n");
const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use(session({
  secret: 'tROi$ e+ D3uX Et 1',
  resave: false,
  saveUninitialized: true
}));

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set ('view engine', 'mustache');

//number.js
let numberObj = {};

app.get('/', function(req, res) {
  numberObj = {};
  res.render('index');
});
