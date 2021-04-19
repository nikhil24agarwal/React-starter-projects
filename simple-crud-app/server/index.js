const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "db",
});

app.post("/create", (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const age = req.body.age;
  const email = req.body.email;
  const password = req.body.password;
  const number = req.body.number;

  db.query(
    "INSERT INTO SignUp (Name , Age , Password , Email , Number ) VALUES (?,?,?,?,?) ",
    [name, age, email, password, number],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("data inserted");
      }
    }
  );
});

app.listen(3001, () => {
  console.log("I am working");
});
