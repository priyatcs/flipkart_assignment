import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import logo from "./assets/images/logo.png";

function App() {
  return (
    <div className="App">
      <header>
        <nav class="container">
          <div className="workflow1">Workflows</div>
          <div className="workflow2">Workflows</div>
        </nav>
      </header>
      <div class="sidenav">
        <a href="#">
          <img src={logo} className="argo-logo" alt="Argo" />
        </a>
        <a href="#">Timeline</a>
        <a href="#">Docs</a>
      </div>
    </div>
  );
}

export default App;
