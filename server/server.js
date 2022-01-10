const express = require("express");

const PORT = 3001;

const app = express();

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

app.get('/sas', function (req, res) {
  res.send({ sas: "sos" });
});