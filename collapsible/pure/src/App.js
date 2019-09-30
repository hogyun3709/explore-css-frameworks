import React, { useState } from "react";
import logo from "./logo.svg";
import TextBox from "./components/TextBox";
import Button from "./components/Button";
import "./App.css";

function App() {
  const flexContainer = {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "tomato",
    color: "white",
    alignItems: "center"
  };
  const [showText, setShowText] = useState(false);

  function handleClick() {
    setShowText(!showText);
  }
  return (
    <div className="App">
      <div style={flexContainer}>
        <TextBox />
        <div onClick={handleClick}>
          <Button />
        </div>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className={showText ? "App-test" : ""}>
          <p>Hello</p>
        </div>
      </header>
    </div>
  );
}

export default App;
