import React from "react";
import "./App";
import "./HomePage";

const Sidebar = ({ activeSidebar }) => {
  return (
    <div>
      <div id="sidebar" className={activeSidebar ? "active" : ""}>
        <div className="logo">
          <a href="/">BANK JAGO</a>
        </div>
        <div className="nav">
          {/* Menu sidebar bisa disesuaikan sesuai tugas individunya */}
          <a href="/HomePage">Beranda</a>
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
