import React from "react";
import SocialLinks from "./SocialLinks";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterStyled = styled.footer`
  background-color: #fafafa;
  padding: 3rem 6%;
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 180px auto;
  align-items: center;
  gap: 3rem;
  border-bottom: 1px solid var(--dark-gray);
  padding-bottom: 3rem;
`;

const FooterNav = styled.div`
  display: flex;
  justify-content: space-around;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  a {
    color: var(--dark-gray);
    font-size: 18px;
  }
`;

const FooterSocial = styled.ul`
  display: flex;
  justify-content: space-around;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;

  div {
    display: flex;
    gap: 4rem;
  }

  a {
    color: var(--dark-gray);
    text-decoration: underline;
  }
`;

function Footer() {
  return (
    <FooterStyled>
      <FooterTop>
        <div className="footer__logo">
          <Link to="/">
            <img
              src="../../assets/logo.png"
              alt="logo"
              style={{ maxWidth: "100%" }}
            />
          </Link>
          <FooterSocial>
            <SocialLinks />
          </FooterSocial>
        </div>
        <FooterNav>
          <ul>
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
          </ul>
          <ul>
            <li>
              <Link to="*">Tez-tez soruşulanlar</Link>
            </li>
            <li>
              <Link to="*">Karyera</Link>
            </li>
            <li>
              <Link to="*">Xidmət şəbəkəsi</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="*">Təhlükəsizlik</Link>
            </li>
            <li>
              <Link to="*">Şərtlər və qaydalar</Link>
            </li>
          </ul>
        </FooterNav>
      </FooterTop>
      <FooterBottom>
        <p>
          Copyright{" "}
          <a
            href="proton.az"
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            Proton.az
          </a>
        </p>
        <div>
          <a href="tel:+0553334503">055 333 45 03</a>
          <a href="mailto:info@psixoloji.az">info@psixoloji.az</a>
        </div>
      </FooterBottom>
    </FooterStyled>
  );
}

export default Footer;
