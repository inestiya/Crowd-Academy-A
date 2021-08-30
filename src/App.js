<<<<<<< HEAD
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";

import "./App.css";

const Toggle = ({ toggle }) => {
  return (
    <div className="toggle-btn" onClick={toggle}>
      <span />
      <span />
      <span />
    </div>
  );
};

const Brand = () => (
  // Sementara dummy text, di sini bisa render navigation dan profile
  <div>
    <h1 className="header-logo">Test</h1>
  </div>
);

function App() {
  const [activeSidebar, setActiveSidebar] = useState(false);
  const toggle = () => setActiveSidebar((val) => !val);
  return (
    <div style={{ display: "flex" }}>
      <Sidebar activeSidebar={activeSidebar} />
      <div className={activeSidebar ? "content active" : "content"}>
        <div className="brand">
          <Toggle toggle={toggle} />
          <Brand />
        </div>
        <Content />
      </div>
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
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
>>>>>>> 2964c99cb428315745947a1bfddd63ecbfbc0db3
    </div>
  );
}

export default App;
