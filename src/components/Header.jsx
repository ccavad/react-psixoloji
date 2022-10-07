import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderNavbar from "./HeaderNavbar";
import SocialLinks from "./SocialLinks";
import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  padding: 0 6%;
  height: 120px;
  align-items: center;
  overflow: hidden;

  ul {
    display: flex;
    align-items: center;
  }
`;

const HeaderRight = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  background-color: white;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  padding: 0.5rem 1.4rem;
  font-weight: 500;
  transition: all 0.2s linear;
`;

function Header() {
  const [hamburger, setHamburger] = useState(false);

  return (
    <>
      <HeaderStyled>
        {/* header logo */}
        <div style={{ flex: "1" }}>
          <Link to="/">
            <img src="../../assets/logo.png" alt="logo psychology" />
          </Link>
        </div>
        <HeaderRight>
          <HeaderTop>
            <ul style={{ gap: "1rem" }}>
              <SocialLinks />
            </ul>
            <NavLink to="/login" className="header__login">
              Giriş et
            </NavLink>
          </HeaderTop>
          <div className="header__bottom">
            <HeaderNavbar />
          </div>
        </HeaderRight>
        <div className="header__hamburger">
          <button onClick={() => setHamburger((prev) => !prev)}>
            {hamburger ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </button>
        </div>
      </HeaderStyled>
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
