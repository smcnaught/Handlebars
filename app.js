const express = require('express');
const exphbs = require('express-handlebars');
const fs = require('fs');

const reviewData = JSON.parse(fs.readFileSync('./reviewData.json'));

const app = express();
app.engine('.handlebars', exphbs.engine({ extname: '.handlebars', defaultLayout: "main"}));
app.set('view engine', 'handlebars');
app.get('/', function (req, res) {
  res.render('homepage', {
      reviews: reviewData
  });
});

app.listen(3000, () => {
  console.log('The web server has started on port 3000');
});