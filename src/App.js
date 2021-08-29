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
  <div>
    <h1 className="header-logo">Welcome</h1>
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
    </div>
  );
}

export default App;
