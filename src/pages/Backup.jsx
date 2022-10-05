import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from "styled-components";
import { Btn, Input, Label, TextArea } from "../components/Styled";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 50%;
`;

function Backup() {
  return (
    <>
      <Header />
      <Banner />
      <main>
        <Form onSubmit={(e) => e.preventDefault()}></Form>
      </main>
      <Footer />
    </>
  );
}

export default Backup;
