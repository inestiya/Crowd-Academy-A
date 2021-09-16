import React from "react";
import "../App";
import "../pages/HomePage";
import { Image, Icon } from "semantic-ui-react";

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
          <a href="/homepage"><Icon name='home' />Beranda</a>
          <a href="/my-profile"><Icon name='user' />Profil Saya</a>
          <a href="/addnewclass"><Icon name='calendar alternate outline' />Buat Kelas Baru</a>
          <a href="/my-class"><Icon name='laptop' />Kelas Ajar Saya</a>
          <a href="/upload"><Icon name='list' />Post Artikel</a>
          <a href="/my-articles"><Icon name='pen square' />Artikel Saya</a>
          <a href="/login"><Icon name='log out' />Sign Out</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
