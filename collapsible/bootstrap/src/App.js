import React, { useState } from "react";
import logo from "./logo.svg";
import { Button, Collapse, Container } from "react-bootstrap";
import "./App.css";
import "./bootstrap/css/bootstrap.css";

function App() {
  const [open, setOpen] = useState(false);

  const rightCss = {
    float: "right"
  };

  const fullCss = {
    width: "100%"
  };
  const verticalAlgin = {
    verticalAlign: "middle"
  };
  return (
    <div>
      <Container>
        <h2>
          what is react
          <Button
            style={rightCss}
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            Click Me
          </Button>
        </h2>
      </Container>
      <Collapse in={open}>
        <div className="App">
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
          </header>
        </div>
      </Collapse>
    </div>
  );
}
export default App;
