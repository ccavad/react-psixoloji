import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import styled from "styled-components";

const Main = styled.main`
  padding: 3rem 6%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
`;

const MainSec = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-direction: ${(props) => props.dir};

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 3rem;
    margin-bottom: 3rem;
    text-align: center;
  }
`;

const ImgCont = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;

  img {
    align-self: end;
  }

  @media (max-width: 900px) {
    height: auto;
    width: 150px;
  }

  img {
    @media (max-width: 900px) {
      width: 100%;
    }
  }
`;

function About() {
  return (
    <>
      <Header />
      <Banner />
      <Main>
        <BreadCrumb page="Haqqımızda" url="about" />
        <MainSec dir={"row"}>
          <ImgCont>
            <img src="../../assets/home-s2-i1.png" />
            <img src="../../assets/home-s2-i2.png" />
          </ImgCont>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s.
          </p>
        </MainSec>
        <MainSec dir={"row-reverse"}>
          <ImgCont>
            <img src="../../assets/Group 672.png" />
            <img src="../../assets/Group 671.png" />
          </ImgCont>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s.
          </p>
        </MainSec>
      </Main>
      <Footer />
    </>
  );
}

export default About;
