import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderNav = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0;

  a {
    color: #707070;
    font-size: 1.2rem;

    @media (max-width: 1200px) {
      font-size: 1rem;
    }

    &.decorated-link {
      color: #246fb2;
      font-weight: 500;
      text-decoration: underline;
      font-size: 1.25rem;
    }
  }
`;

function HeaderNavbar() {
  return (
    <HeaderNav>
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
        <Link to="/quiz" className="decorated-link">
          İmtahana başla
        </Link>
      </li>
      <li>
        <Link to="/payment" className="decorated-link">
          Sifariş et
        </Link>
      </li>
    </HeaderNav>
  );
}

export default HeaderNavbar;
