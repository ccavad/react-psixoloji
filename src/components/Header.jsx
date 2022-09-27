import React from "react";
import Login from "../pages/Login.jsx"
import {Link} from "react-router-dom";

function Header() {
  const socialLinks = ["fb", "ln", "tw", "ig", "yt"]

  return (
    <header>
      <div className="header__logo">
        <Link to={<Home />}>
          <img src="../../public/assets/logo.png" alt="logo psychology" />
        </Link>
      </div>
      <div className="header__right">
        <div className="header__top">
          <ul className="header__social">
            {socialLinks.map(link => {
              <li>
                <a href="#">
                  <img src={`../../public/assets/${link}.png`} alt="socialmedia logo" />
                </a>
              </li>
            })}
          </ul>
          <Link to={<Login />}>Giriş et</Link>
        </div>
        <div className="header__bottom">
          <ul className="header__nav">
            <li><Link></Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
