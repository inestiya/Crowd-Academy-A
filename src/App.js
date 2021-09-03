import React, { useState } from "react";
import { Button, Divider, Form, Header, Segment,Dropdown } from "semantic-ui-react";

import RegisterForm from "./RegisterForm";
import Login from "./Login";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Kelas from "./Kelas";

import "./App.css";

const [form, setForm] = useState("login");
if (form === "login") {
  return <Login onRegisterFormClick={() => setForm("register")} />;
} else {
  return <RegisterForm onLoginClick={() => setForm("login")} />;
}

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
        <Kelas/>
      </div>
    </div>
  );
}

export default App;
