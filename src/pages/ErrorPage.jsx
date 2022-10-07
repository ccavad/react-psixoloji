import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from "styled-components";

const Main = styled.main`
  display: grid;
  place-items: center;
  padding-top: 6rem;
  gap: 1rem;

  h1 {
    color: #246fb2;
    font-size: 5rem;
  }
  h2 {
    color: #246fb2;
    font-size: 3rem;
  }
  a {
    background: #246fb2;
    color: white;
    border-radius: 5px;
    padding: 1rem 2rem;
    transition: 0.4s;

    &:hover {
      background-color: #303030;
    }
  }
`;

function ErrorPage() {
  return (
    <>
      <Header />
      <Main>
        <h1>404</h1>
        <h2>Səhifə tapılmadı!</h2>
        <Link to="/">Ana səhifəyə qayıt</Link>
      </Main>
      <Footer />
    </>
  );
}

export default ErrorPage;
