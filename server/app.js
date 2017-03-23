const app = module.exports = require('express').Router();

app.get('/whoami', (req, res) => {
  res.send("You are a winner!");
});
