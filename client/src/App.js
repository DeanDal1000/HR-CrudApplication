import React, { useState } from 'react';
import Axios from 'axios';
//Components
// import { Container, Layout } from './styles/Form.element';
import './styles/App.css';
import Navbar from './Navbar';
import home1 from './styles/home1.png';

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

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:5000/delete/${id}`).then((response) => {
      setEmployee(
        employee.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };

  return (
    <>
      <Navbar />
      <div class="container">
        <div className="description">
          <input
            placeholder="First Name"
            type="text"
            onChange={(event) => setFirstname(event.target.value)}
          />
          <input
            placeholder="Surname"
            type="text"
            onChange={(event) => setSurname(event.target.value)}
          />

          <input
            placeholder="Country"
            type="text"
            onChange={(event) => setCountry(event.target.value)}
          />
          <input
            placeholder="Deaths"
            type="text"
            onChange={(event) => setDeaths(event.target.value)}
          />
          <input
            placeholder="Resurrections"
            type="text"
            onChange={(event) => setResurrections(event.target.value)}
          />
          <input
            placeholder="Age"
            type="number"
            onChange={(event) => setAge(event.target.value)}
          />
          <input
            placeholder="Experience"
            type="text"
            onChange={(event) => setExperience(event.target.value)}
          />
          <input
            placeholder="Position"
            type="text"
            onChange={(event) => setPosition(event.target.value)}
          />
          <input
            placeholder="Wage"
            type="number"
            onChange={(event) => setWage(event.target.value)}
          />

          <button onClick={addEmployee}>Submit</button>
        </div>
        <div className="right">
          <img src={home1} alt="home1" id="img1" />
        </div>
      </div>

      {/* <div className="employeeContainer">
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
                  <button
                    onClick={() => {
                      deleteEmployee(val.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div> */}
    </>
  );
}

export default App;
