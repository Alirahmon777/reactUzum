import React from "react";
import logo from "../assets/img/logo192.png";

function Header() {
  return (
    <div className="w-[1400px] mx-auto px-4 py-5">
      <div className="header__wrapper flex items-center justify-between">
        <a href="#" className="header__imgbox flex items-center gap-3">
          <img className="w-16" src={logo} alt="logo" />
          <p className="font-sans text-[26px] text-[#61DAFB]">REACT</p>
        </a>

        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">Home</li>
            <li className="header__item">About</li>
            <li className="header__item">Contact</li>
            <li className="header__item">FaQ</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
