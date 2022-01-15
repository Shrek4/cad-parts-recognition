const express = require("express");

const PORT = 3001;

const app = express();

//Заголовки для CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

let sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('sv.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
});

db.all("SELECT * FROM Parts", [], (err, rows) => {
  if (err) {
      console.error(err.message);
  }
  app.get('/parts', function (req, res) {
      res.send(rows);
  })
});