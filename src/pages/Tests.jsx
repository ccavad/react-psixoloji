import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import BreadCrumb from "../components/BreadCrumb";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import styled from "styled-components";

function Tests() {
  return (
    <>
      <Header />
      <Banner />
      <main className="tests-main">
        <BreadCrumb page="Testlər" url="tests" />
        <TestsGrid>
          {new Array(5).fill(null).map((item, ind) => (
            <TestsItem key={nanoid()}>
              <TestsPar>Psixoloji Test mövzu {ind + 1}</TestsPar>
              <Link to="/quiz" className="tests-link">
                İmtahana başla
              </Link>
            </TestsItem>
          ))}
        </TestsGrid>
      </main>
      <Footer />
    </>
  );
}

export default Tests;

const TestsGrid = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  gap: 1rem;
`;

const TestsItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
  border-bottom: 1px solid #c3c3c3;
`;

const TestsPar = styled.p`
  color: #373435;
  font-size: 20px;
`;
