import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Btn, Input, Label } from "../components/Styled";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 50%;
  margin-block: 3rem;
`;

const H3 = styled.h3`
  color: #24324a;
  font-size: ${(props) => props.fs};
  margin-bottom: 2rem;
`;

const P = styled.p`
  color: #a0a0a0;
  font-size: 18px;
`;

function Payment() {
  return (
    <>
      <Header />
      <Banner />
      <main>
        <h2>Kart məlumatlarını daxil edin:</h2>
        <img
          src="../../public/assets/Group 649.png"
          alt="visa"
          width="max-content"
        />
        <form onSubmit={(e) => e.preventDefault()}>
          <Grid>
            <Label style={{ gridColumn: "span 2" }}>
              <div>
                Kartın nömrəsi <span>*</span>
              </div>
              <Input type="text" placeholder="____ ____ ____ ____" />
            </Label>
            <Label>
              <div>
                Tarix <span>*</span>
              </div>
              <Input type="text" placeholder="MM/YY" />
            </Label>
            <Label>
              <div>
                CVV <span>*</span>
              </div>
              <Input type="text" placeholder="CVV 2" />
            </Label>
          </Grid>
          <H3 fs={"24px"}>Ödəniş məlumatları</H3>
          <P>Ödənişin məbləği</P>
          <H3 fs={"22px"}>20 azn</H3>
          <P>Sifariş nömrəsi</P>
          <H3 fs={"22px"}>50489912</H3>
          <div>
            <Btn>Geri</Btn>
            <Btn>Növbəti</Btn>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default Payment;
