import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Kelas from "./Kelas";
import Artikel from"./Artikel"


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
    <h1 className="header-logo">Crowd Academy</h1>
  </div>
);

function HomePage() {
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
        <Artikel />
        <Kelas/>
      </div>
    </div>
  );
}

export default HomePage;