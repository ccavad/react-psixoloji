import React from "react";
import {Link} from "react-router-dom";

function HeaderNavbar() {
  return (
    <ul className="header__nav">
      <li>
        <Link to="/about">Haqqımızda</Link>
      </li>
      <li>
        <Link to="/tests">Testlər</Link>
      </li>
      <li>
        <Link to="/partners">Tərəfdaşlar</Link>
      </li>
      <li>
        <Link to="/news">Xəbərlər</Link>
      </li>
      <li>
        <Link to="/contact">Əlaqə</Link>
      </li>
      <li>
        <Link to="/quiz" className="decorated-link">İmtahana başla</Link>
      </li>
      <li>
        <Link to="/payment" className="decorated-link">Sifariş et</Link>
      </li>
    </ul>
  );
}

export default HeaderNavbar;
