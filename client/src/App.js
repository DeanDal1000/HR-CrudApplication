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
      console.log('sucess');
    });
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
          <label onChange={(event) => setWage(event.target.value)}>Wage</label>
          <input type="text" />
          <button onClick={addEmployee}>Submit</button>
        </Layout>
      </Container>
    </div>
  );
}

export default App;
