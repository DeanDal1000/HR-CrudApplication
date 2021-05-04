import React, { useState } from 'react';
//Components
import { Container, Layout } from './styles/Form.element';

function App() {
  const [firstname, setFirstname] = useState('');
  const [surname, setSurname] = useState('');
  const [date, setDate] = useState('');
  const [deaths, setDeaths] = useState('');
  const [age, setAge] = useState(0);
  const [position, setPosition] = useState(0);
  const [wage, setWage] = useState(0);

  const displayInfo = () => {
    console.log(firstname + surname + date + age + position + wage);
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
          <label>D.O.B</label>
          <input
            type="text"
            onChange={(event) => setDate(event.target.value)}
          />
          <label>Deaths</label>
          <input
            type="text"
            onChange={(event) => setDeaths(event.target.value)}
          />
          <label>Age</label>
          <input
            type="number"
            onChange={(event) => setAge(event.target.value)}
          />
          <label>Position</label>
          <input
            type="text"
            onChange={(event) => setPosition(event.target.value)}
          />
          <label onChange={(event) => setWage(event.target.value)}>Wage</label>
          <input type="text" />
          <button onClick={displayInfo}>Submit</button>
        </Layout>
      </Container>
    </div>
  );
}

export default App;
