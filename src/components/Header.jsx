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

  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  background-color: white;
  border: 1px solid #246fb2;
  color: #246fb2;
  padding: 0.5rem 1.4rem;
  font-weight: 500;
  transition: all 0.2s linear;

  &:hover {
    background-color: #246fb2;
    color: white;
  }
`;

const HeaderHamburger = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }

  button {
    color: #246fb2;
    background-color: transparent;
    border: 0;
    font-size: 2rem;
    cursor: pointer;

    &:active,
    &:focus {
      outline: 0;
    }
  }
`;

const HeaderBottom = styled.div`
  display: block;
  @media (max-width: 1024px) {
    display: none;
    background: red;
  }
`;

const HeaderMobNav = styled.div`
  display: ${(props) => (props.hamburger ? "block" : "none")};
  padding-block: 2rem;

  @media (min-width: 1024px) {
    display: none;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    margin-bottom: 1.5rem;
  }
`;

const HeaderLogo = styled.div`
  flex: 1;
  img {
    @media (max-width: 364px) {
      width: 120px;
    }
  }
`;

function Header() {
  const [hamburger, setHamburger] = useState(false);

  return (
    <>
      <HeaderStyled>
        {/* header logo */}
        <HeaderLogo>
          <Link to="/">
            <img src="../../assets/logo.png" alt="logo psychology" />
          </Link>
        </HeaderLogo>
        <HeaderRight>
          <HeaderTop>
            <ul style={{ gap: "1rem" }}>
              <SocialLinks />
            </ul>
            <NavLink to="/login">Giriş et</NavLink>
          </HeaderTop>
          <HeaderBottom>
            <HeaderNavbar />
          </HeaderBottom>
        </HeaderRight>
        <HeaderHamburger>
          <button onClick={() => setHamburger((prev) => !prev)}>
            {hamburger ? (
              <ion-icon name="close"></ion-icon>
            ) : (
              <ion-icon name="menu"></ion-icon>
            )}
          </button>
        </HeaderHamburger>
      </HeaderStyled>
      <HeaderMobNav hamburger={hamburger}>
        <HeaderNavbar />
      </HeaderMobNav>
    </>
  );
}

export default Header;
