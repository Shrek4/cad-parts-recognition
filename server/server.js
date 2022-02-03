const express = require("express");
const PORT = 3001;
const app = express();
const bodyParser = require('body-parser')


// create application/json parser
const jsonParser = bodyParser.json()

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


function processData(res, sql) {
  db.serialize(function () {
      db.all(sql,
          function (err, rows) {
              if (err) {
                  console.error(err);
                  res.status(500).send(err);
              }
              else
                  sendData(res, rows, err);
          });
  });
}

function sendData(res, data, err) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(data);
}


app.get('/parts', function (req, res) {
  processData(res, "SELECT * FROM Parts");
})

app.post('/deletepart', jsonParser, function (req, res) {
  db.all(`DELETE FROM Parts WHERE id = ?`, [req.body.id], (err, rows) => {
    if (err) {
      return console.log(err.message);
    }
    console.log("Removed part: " + req.body.id);
    res.send();
  });

});

app.post('/addpart', jsonParser, function (req, res) {
  db.serialize(function () {
    db.run('INSERT INTO Parts (class, specification, standart) VALUES (?, ?, ?)', [req.body.class, req.body.specification, req.body.standart], (err) => {
      if (err) {
        return console.log(err.message);
      }
      console.log(`Row was added to the table "Parts": ` + JSON.stringify(req.body));
      res.send();
    });
  });
});