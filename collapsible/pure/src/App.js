import React, { useState } from "react";
import logo from "./logo.svg";
import TextBox from "./components/TextBox";
import Button from "./components/Button";
import "./App.css";
/* Button 에서 state 를 callback으로 props 를 이용해 상호작용 하는 방법 찾아보기 */
/* transition 을 적용시켜보기 */
/* hoverable button 컨트롤 하는 방법 찾기 */
/* button, collapsible로 컴포넌트화 시켜보기 */
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

      <div className="App-content">
        <div className={showText ? "App-open" : "App-close"}>
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
      </div>
    </div>
  );
}

export default App;
