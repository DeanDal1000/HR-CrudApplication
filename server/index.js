const express = require('express');

const app = express();

const port = 5000;

const mysql = require('mysql');

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'hrSystem',
});

app.post('/create', (req, res) => {
  const firstname = req.body.firstname;
  const surname = req.body.surname;
  const age = req.body.age;
  const dob = req.body.dob;
  const country = req.body.country;
  const deaths = req.body.deaths;
  const resurrections = req.body.resurrections;
  const wage = req.body.wage;
  const position = req.body.position;

  db.query(
    'INSERT INTO employees (firstname, surname, age, dob, country, deaths, resurrections, wage, position) VALUES (?,?,?,?,?,?,?,?,?)',
    [
      firstname,
      surname,
      age,
      dob,
      country,
      deaths,
      resurrections,
      wage,
      position,
    ],
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        res.send('Values Inserted');
      }
    }
  );
});

app.listen(port, () => console.log(`Server started on ${port}`));
