import React from "react";
import "../App";
import "../pages/HomePage";
import { Image } from "semantic-ui-react";

import CALogo from "../assets/logo-CA-background.png";
const Sidebar = ({ activeSidebar }) => {
  return (
    <div>
      <div id="sidebar" className={activeSidebar ? "active" : ""}>
        <div className="logo">
          <a href="/homepage">
            <Image src={CALogo} size="medium" />
          </a>
        </div>
        <div className="nav">
          {/* Menu sidebar bisa disesuaikan sesuai tugas individunya */}
          <a href="/homepage">Beranda</a>
          <a href="/my-profile">Profil Saya</a>
          <a href="/addnewclass">Buat Kelas Baru</a>
          <a href="/my-class">Kelas Ajar Saya</a>
          <a href="/upload">Post Artikel</a>
          <a href="/my-articles">Artikel Saya</a>
          <a href="/login">Sign Out</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
