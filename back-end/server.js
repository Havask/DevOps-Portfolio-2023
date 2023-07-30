const sqlite3 = require('sqlite3').verbose();
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

// Enable CORS
app.use(cors());

// Set up the server
const HTTP_PORT = 3000;
app.listen(HTTP_PORT, () => {
  console.log("Server is listening on port " + HTTP_PORT);
});


const db = new sqlite3.Database('./db/database.db', (err) => {
    if (err) {
      console.error("Error opening database " + err.message);
    } else {
      console.log('Connected to the list database');
  
      db.run('CREATE TABLE IF NOT EXISTS list( \
        todo_id INTEGER PRIMARY KEY, \
        todo TEXT \
      )', (err) => {
        if (err) {
          console.error("Error creating table: " + err.message);
        } else {
          let insert = 'INSERT INTO list (todo) VALUES (?)';
  
        }
      });
    }
  });

// Allows the content type
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(bodyParser.json());

// GET request method that returns the specified JSON object
app.get('/list', (req, res) => {
  db.all('SELECT * FROM list', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(200).json(rows);
  });
});

// POST request that creates a new resource
app.post("/list/", (req, res) => {
  var reqBody = req.body;

  db.run(`INSERT INTO list (todo) VALUES (?)`,
    [reqBody.todo],
    function (err, result) {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }
      res.status(201).json({
        "todo_id": this.lastID
      });
    });
});

// PUT method that updates an existing resource
app.put("/list/:todo_id", (req, res) => {
  var reqBody = req.body;

  db.run(`UPDATE list SET todo = ? WHERE todo_id = ?`,
    [reqBody.todo, reqBody.todo_id],
    function (err) {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }
      res.status(200).json();
    });
});

// DELETE request that deletes a specific field in the JSON object
app.delete("/list/:todo_id", (req, res) => {
  db.run(`DELETE FROM list WHERE todo_id = ?`,
    req.params.todo_id,
    function (err, result) {
      if (err) {
        res.status(400).json({ "error": res.message });
        return;
      }
      res.status(200).json({ deletedID: this.changes });
    });
});
