import './App.css';
import Button from '@mui/material/Button';
import { useState } from "react";
import Form from 'react-bootstrap/Form';

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [superpower, setSuperpower] = useState("");
  const [showData, setShowData] = useState(false);

  return (
    <div className="App">
      <Form>
        <div className="form-row">
          <div className="form-group">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Type something…" onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="form-group">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" onChange={(e) => setAge(e.target.value)} />
          </div>

          <div className="form-group">
            <Form.Label>Gender</Form.Label>
            <div className="form-check-inline">
              <Form.Check type="radio" label="Male" value="Male" name="gender" onClick={() => setGender("Male")} />
              <Form.Check type="radio" label="Female" value="Female" name="gender" onClick={() => setGender("Female")} />
              <Form.Check type="radio" label="Other" value="Other" name="gender" onClick={() => setGender("Other")} />
            </div>
          </div>

          <div className="form-group">
            <Form.Label>SuperPower</Form.Label>
            <Form.Control type="text" placeholder="Type something…" onChange={(e) => setSuperpower(e.target.value)} />
          </div>
        </div>
      </Form>

      <Button variant="contained" onClick={() => setShowData(true)}>Submit</Button>

      {showData && 
        <div className='details'>
          <h1>Details :</h1>
          <h2>Name: {name}</h2>
          <h2>Age: {age}</h2>
          <h2>Gender: {gender}</h2>
          <h2>SuperPower: {superpower}</h2>
        </div>
      }
    </div>
  );
}

export default App;
