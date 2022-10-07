import React, { useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Btn, Input, Label, TextArea } from "../components/Styled";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 50%;
  margin-block: 3rem;

  @media (max-width: 768px) {
    width: 100%;
  }
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
  const [tab, setTab] = useState("personal");
  return (
    <>
      <Header />
      <Banner />
      <main>
        <Form>
          {tab === "personal" && <PersonalInfo setTab={setTab} />}
          {tab === "card" && <CardDetails setTab={setTab} />}
        </Form>
      </main>
      <Footer />
    </>
  );
}

function PersonalInfo({ setTab }) {
  return (
    <>
      <Label>
        <div>
          Adınız, Soyadınız <span>*</span>
        </div>
        <Input type="text" placeholder="Adınızı və soyadınızı daxil edin" />
      </Label>
      <Label>
        <div>
          Telefonlar <span>*</span>
        </div>
        <Input type="tel" placeholder="050 _ _ _  _ _  _ _" />
      </Label>
      <Label>
        <div>
          E-poçt ünvanınız <span>*</span>
        </div>
        <Input type="email" placeholder="E-mail ünvanınızı daxil edin" />
      </Label>
      <Label>
        Qeyd
        <TextArea placeholder="Qeyd daxil edin"></TextArea>
      </Label>
      <Btn type="button" onClick={() => setTab("card")}>
        Növbəti
      </Btn>
    </>
  );
}

function CardDetails({ setTab }) {
  return (
    <>
      <h2>Kart məlumatlarını daxil edin:</h2>
      <img
        src="../../assets/Group 649.png"
        alt="visa"
        style={{ alignSelf: "self-start" }}
      />
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
      <div>
        <H3 fs={"24px"}>Ödəniş məlumatları</H3>
        <P>Ödənişin məbləği</P>
        <H3 fs={"22px"}>20 azn</H3>
        <P>Sifariş nömrəsi</P>
        <H3 fs={"22px"}>50489912</H3>
      </div>
      <div style={{ display: "flex", gap: "2rem" }}>
        <Btn onClick={() => setTab("personal")}>Geri</Btn>
        <Btn>Növbəti</Btn>
      </div>
    </>
  );
}

export default Payment;
