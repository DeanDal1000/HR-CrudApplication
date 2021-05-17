import React, { useState } from 'react';
import Axios from 'axios';
//Components
import { Container, Layout } from './styles/Form.element';

function App() {
  const [firstname, setFirstname] = useState('');
  const [surname, setSurname] = useState('');
  const [deaths, setDeaths] = useState('');
  const [resurrections, setResurrections] = useState('');
  const [age, setAge] = useState(0);
  const [experience, setExperience] = useState('');
  const [position, setPosition] = useState(0);
  const [wage, setWage] = useState(0);
  const [country, setCountry] = useState('');

  const [newWage, setNewwage] = useState(0);
  const [employee, setEmployee] = useState([]);

  const addEmployee = () => {
    Axios.post('http://localhost:5000/create', {
      firstname: firstname,
      surname: surname,
      age: age,
      position: position,
      wage: wage,
      country: country,
      deaths: deaths,
      resurrections: resurrections,
      experience: experience,
    }).then(() => {
      setEmployee([
        ...employee,
        {
          firstname: firstname,
          surname: surname,
          age: age,
          position: position,
          wage: wage,
          country: country,
          deaths: deaths,
          resurrections: resurrections,
          experience: experience,
        },
      ]);
    });
  };

  const getEmployee = () => {
    Axios.get('http://localhost:5000/employees').then((response) => {
      setEmployee(response.data);
    });
  };

  const updateEmployeeWage = (id) => {
    Axios.put('http://localhost:5000/update', { wage: newWage, id: id }).then(
      (response) => {
        setEmployee(
          employee.map((val) => {
            return val.id === id
              ? {
                  id: val.id,
                  firstname: val.firstname,
                  surname: val.surname,
                  age: val.age,
                  position: val.position,
                  country: val.country,
                  deaths: val.deaths,
                  resurrections: val.resurrections,
                  experience: val.experience,
                  wage: newWage,
                }
              : val;
          })
        );
      }
    );
  };

  return (
    <div>
      <Container>
        <Layout>
          <label>First Name</label>
          <input
            type="text"
            onChange={(event) => setFirstname(event.target.value)}
          />
          <label>Last Name</label>
          <input
            type="text"
            onChange={(event) => setSurname(event.target.value)}
          />

          <label>Country</label>
          <input
            type="text"
            onChange={(event) => setCountry(event.target.value)}
          />
          <label>Deaths</label>
          <input
            type="text"
            onChange={(event) => setDeaths(event.target.value)}
          />
          <label>Resurrections</label>
          <input
            type="text"
            onChange={(event) => setResurrections(event.target.value)}
          />
          <label>Age</label>
          <input
            type="number"
            onChange={(event) => setAge(event.target.value)}
          />
          <label>Experience</label>
          <input
            type="text"
            onChange={(event) => setExperience(event.target.value)}
          />
          <label>Position</label>
          <input
            type="text"
            onChange={(event) => setPosition(event.target.value)}
          />
          <label>Wage</label>
          <input
            type="number"
            onChange={(event) => setWage(event.target.value)}
          />

          <button onClick={addEmployee}>Submit</button>
        </Layout>
        <div className="employeeContainer">
          <button onClick={getEmployee}>Show Employees</button>
          {employee.map((val, key) => {
            return (
              <div className="employees">
                {val.firstname}
                {val.surname}
                {val.wage}
                <div>
                  <input
                    type="text"
                    placeholder="123"
                    onChange={(event) => setNewwage(event.target.value)}
                  />
                  <button
                    onClick={() => {
                      updateEmployeeWage(val.id);
                    }}
                  >
                    Update
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default App;
