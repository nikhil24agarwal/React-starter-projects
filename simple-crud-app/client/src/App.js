import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");

  const addData = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      email: email,
      password: password,
      number: number,
    }).then(() => console.log("success"));
  };

  return (
    <div className="App">
      <input
        onChange={(event) => setName(event.target.value)}
        className="input-fields"
        placeholder="Name"
        type="text"
      />
      <input
        onChange={(event) => setAge(event.target.value)}
        className="input-fields"
        placeholder="Age"
        type="number"
      />
      <input
        onChange={(event) => setEmail(event.target.value)}
        className="input-fields"
        placeholder="Email"
        type="mail"
      />
      <input
        onChange={(event) => setPassword(event.target.value)}
        className="input-fields"
        placeholder="password"
        type="text"
      />
      <input
        onChange={(event) => setNumber(event.target.value)}
        className="input-fields"
        placeholder="mobile number"
        type="number"
      />
      <button onClick={addData} className="button-submit">
        Sign Up
      </button>
    </div>
  );
}

export default App;
