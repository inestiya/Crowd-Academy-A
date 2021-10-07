import React from "react";
import "../App";
import "../pages/HomePage";
import { Image, Icon } from "semantic-ui-react";

import CALogo from "../assets/logo-CA-background.png";
import { Link } from "react-router-dom";
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
          <Link to="/homepage"><Icon name='home' />Beranda</Link>
          <Link to="/my-profile"><Icon name='user' />Profil Saya</Link>
          <Link to="/addnewclass"><Icon name='calendar alternate outline' />Buat Kelas Baru</Link>
          <Link to="/my-class"><Icon name='laptop' />Kelas Ajar Saya</Link>
          <Link to="/upload"><Icon name='list' />Post Artikel</Link>
          <Link to="/my-articles"><Icon name='pen square' />Artikel Saya</Link>
          <Link to="/login"><Icon name='log out' />Sign Out</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
