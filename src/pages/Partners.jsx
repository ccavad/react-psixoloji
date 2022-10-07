import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from "styled-components";
import BreadCrumb from "../components/BreadCrumb";

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`;

function Partners() {
  return (
    <>
      <Header />
      <Banner />
      <main>
        <BreadCrumb page="Tərəfdaşlar" url="/partners" />
        <Grid>
          <img src="../../assets/Partner-logo-2016.png" alt="logo" />
          <img src="../../assets/256x256bb.png" alt="logo" />
          <img
            src="../../assets/ff776d563a0a60748fd8728773a2d79a722afa858f0806b2f514d06ca3cd305b.png"
            alt="logo"
          />
          <img src="../../assets/images (1).png" alt="logo" />
          <img src="../../assets/images.png" alt="logo" />
          <img
            src="../../assets/partner-now-logo-png-transparent.png"
            alt="logo"
          />
          <img
            src="../../assets/peugeot-partner-1-logo-png-transparent.png"
            alt="logo"
          />
          <img src="../../assets/unnamed.png" alt="logo" />
        </Grid>
      </main>
      <Footer />
    </>
  );
}

export default Partners;
