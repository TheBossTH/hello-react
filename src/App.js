import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello React!</h2>
        <p>my first time with react</p>
        <a
          className="App-link"
          href="https://github.com/TheBossTH"
          target="_blank"
          rel="noopener noreferrer"
        >
          My github
        </a>
      </header>
    </div>
  );
}

export default App;
