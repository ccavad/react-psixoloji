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
  height: 300px;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const ImgCont = styled.div`
  display: flex;
  height: 100%;
`;

function About() {
  return (
    <>
      <Header />
      <Banner />
      <Main>
        <BreadCrumb page="Haqqımızda" url="about" />
        <MainSec>
          <ImgCont>
            <img
              src="../../public/assets/home-s2-i1.png"
              style={{ alignSelf: "flex-start" }}
            />
            <img
              src="../../public/assets/home-s2-i2.png"
              style={{ alignSelf: "flex-end" }}
            />
          </ImgCont>
          <p style={{ textAlign: "right" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s.
          </p>
        </MainSec>
        <MainSec>
          <p style={{ float: "right" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s.
          </p>
          <ImgCont>
            <img
              src="../../public/assets/Group 672.png"
              style={{ alignSelf: "flex-end" }}
            />
            <img src="../../public/assets/Group 671.png" />
          </ImgCont>
        </MainSec>
      </Main>
      <Footer />
    </>
  );
}

export default About;
