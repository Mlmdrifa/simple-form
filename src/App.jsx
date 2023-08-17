import { useState } from "react";
// import { library } from '@fortawesome/fontawesome-svg-core';

import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setShowErrorMessage(false);
    if (password !== confirmPassword) {
      alert("vous deux mots de passe ne sont pas identitiques");
    } else {
      setShowErrorMessage(true);
    }
  };

  const Result = (event) => {};

  if (password === confirmPassword) {
    {
      Result;
    }
  }

  return (
    <>
      <h1> Create account</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          type="text"
          placeholder="Jean Dupont"
          name="username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          value={email}
          type="email"
          placeholder="jeandupont@lereacteur.io"
          name="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          value={password}
          type="password"
          placeholder="azerty"
          name="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input
          value={confirmPassword}
          type="password"
          placeholder="Confirm your password"
          name="password"
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
        />
        <button type="submit">Register</button>
        {showErrorMessage === true && <span style={{ color: "red" }}></span>}

        <input type="text" value={username} />
        <input type="email" value={email} />
        <input value={password} type={password} />
      </form>
    </>
  );
}

export default App;
