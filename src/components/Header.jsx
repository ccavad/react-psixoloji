import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderNavbar from "./HeaderNavbar";
import SocialLinks from "./SocialLinks";

function Header() {
  const [hamburger, setHamburger] = useState(false);

  return (
    <>
      <header>
        <div className="header__logo">
          <Link to="/">
            <img src="../../public/assets/logo.png" alt="logo psychology" />
          </Link>
        </div>
        <div className="header__right">
          <div className="header__top">
            <ul className="header__social">
              <SocialLinks/>
            </ul>
            <Link to="/login" className="header__login">Giriş et</Link>
          </div>
          <div className="header__bottom">
            <HeaderNavbar />
          </div>
        </div>
        <div className="header__hamburger">
          <button onClick={() => setHamburger((prev) => !prev)}>
            {hamburger ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </button>
        </div>
      </header>
      <div
        className="header__mobnav"
        style={hamburger ? { display: "block" } : { display: "none" }}
      >
        <HeaderNavbar />
      </div>
    </>
  );
}

export default Header;
