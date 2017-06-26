const express = require('express');
const mustacheExpress = require('mustache-express');
const session = require('express-session');
const bodyParser = require('body-parser');
// Word Router
const wordRouter = require('./routes/word');
// Number Router
const numberRouter = require('./routes/number');
// Morgan
const morgan = require('morgan');
const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

// Redirect to Word Router
app.use('/word', wordRouter);
// Redirect to Number Router
app.use('/number', numberRouter);

app.use(session({
  secret: 'tROi$ e+ D3uX Et 1',
  resave: false,
  saveUninitialized: true
}));

// Middleware

// app.use(function (req, res, next) {
//   console.log('Middleware is Running through app.use!!');
//   next();
// });



// Morgan Logs

if (app.get('env') == 'production') {
  console.log('Production environment');
} else {
  console.log('Developer environment');
};

app.use(morgan('combined'));




app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set ('view engine', 'mustache');

// Routes

app.get('/', function(req, res) {
  console.log('Root is being called');
  res.render('index');
});

app.listen(8000, function() {
  console.log("Working hard... Listening on 8000");
});
