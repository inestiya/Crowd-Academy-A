import React, { useState } from "react";
import Sidebar from "../component/Sidebar";
import Artikel from "../page/Kelas";
import Content from "../component/Content";

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
    <h1 className="header-logo">Banking Crowd Academy</h1>
  </div>
);

function MenuArtikel() {
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
        {" <hr> <hr> <br> "}
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        {/* <Content /> */}
        <Artikel />
      </div>
    </div>
  );
}

export default MenuArtikel;
