const express = require('express');

const app = express();
const port = 5000;

const cors = require('cors');
const mysql = require('mysql');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'dean2705',
  database: 'hrSystem',
});

app.post('/create', (req, res) => {
  const firstname = req.body.firstname;
  const surname = req.body.surname;
  const age = req.body.age;
  const position = req.body.position;
  const wage = req.body.wage;
  const country = req.body.country;
  const deaths = req.body.deaths;
  const resurrections = req.body.resurrections;
  const experience = req.body.experience;

  db.query(
    'INSERT INTO employees (firstname, surname, age, position, wage, country, deaths, resurrections, experience) VALUES (?,?,?,?,?,?,?,?,?)',
    [
      firstname,
      surname,
      age,
      position,
      wage,
      country,
      deaths,
      resurrections,
      experience,
      ,
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

app.get('/employees', (req, res) => {
  db.query('SELECT * FROM employees', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put('/update', (req, res) => {
  const id = req.body.id;
  const wage = req.body.wage;
  db.query(
    'UPDATE employees SET wage = ? WHERE id = ?',
    [wage, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM employees WHERE id = ?', id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(port, () => console.log(`Server started on ${port}`));
