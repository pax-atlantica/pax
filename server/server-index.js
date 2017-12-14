const express = require('express');
const bodyParser = require('body-parser');
const analyzeInput = require('./toneAnalyzer');
const aylienHelpers = require('./aylienHelpers');
const score = require('./algorithm.js');
// const db = require('./db/db-index.js');

const app = express();

const PORT = 3000;


app.use(express.static(`${__dirname}/../client/dist/`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/api/analyze', (req, res) => {
  analyzeInput(req.body.data, (err, analysis) => {
    if (err) {
      res.send(err);
    } else {
      console.log(score.scoreAnalysis(JSON.parse(analysis)));
      res.send(analysis);
    }
  });
});

app.post('/api/extract', (req, res) => {
  aylienHelpers.extractArticle(req.body.data, (err, article) => {
    if (err) {
      res.send(err);
    } else {
      res.send(article);
    }
  });
});

app.post('/api/sentiment', (req, res) => {
  aylienHelpers.sentimentAnalysis(req.body.data, (err, sentiment) => {
    if (err) {
      res.send(err);
    } else {
      res.send(sentiment);
    }
  });
});

app.post('/api/vote', (req, res) => {
  res.send(null);
});

app.post('/login', (req, res) => {
  console.log(req.body);
  // if user doesn't exists
  // respond to sign up
  // if password doesn't match
  // respond wrong password
  // otherwise
  // start a session for user
  // respond that user is logged in
  res.send(null);
});

app.post('/signup', (req, res) => {
  console.log(req.body);
  // if user already exists
  // respond that username is taken
  // otherwise
  // hash password
  // add user and password to database
  // start a session for the user
  // respond that the user is logged in
  res.send(null);
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

