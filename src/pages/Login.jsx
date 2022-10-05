import React, { useState } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from "styled-components";
import { Btn, Input, Label } from "../components/Styled";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 50%;
  margin-top: 2rem;
`;

const BtnGroup = styled.div`
  border: 0;
  border-bottom: 1px solid #707070;
  width: 50%;
  font-size: 1rem;
  padding-left: 0;
  display: flex;
`;

const Button = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  font-size: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid transparent;
  border-color: ${(props) => props.border};
  color: ${(props) => props.color};
  width: 180px;
  text-align: left;
  transition: 0.1s;
`;

function Login() {
  const [tab, setTab] = useState("login");
  return (
    <>
      <Header />
      <Banner />
      <main>
        <BtnGroup>
          <Button
            onClick={() => setTab("login")}
            color={tab === "login" ? "#246FB2" : "#292C2E"}
            border={tab === "login" ? "#246FB2" : "transparent"}
          >
            Giriş
          </Button>
          <Button
            onClick={() => setTab("register")}
            color={tab === "register" ? "#246FB2" : "#292C2E"}
            border={tab === "register" ? "#246FB2" : "transparent"}
          >
            Qeydiyyat
          </Button>
        </BtnGroup>
        <Form onClick={(e) => e.preventDefault()}>
          {tab === "login" && <LoginTab />}
          {tab === "register" && <RegisterTab />}
        </Form>
      </main>
      <Footer />
    </>
  );
}

function LoginTab() {
  return (
    <>
      <Label>
        <div>
          Telefon və ya E-poçt ünvanınız
          <span>*</span>
        </div>
        <Input
          type="email"
          placeholder="E-mail ünvanınızı daxil edin"
          required
        ></Input>
      </Label>
      <Label>
        <div>
          Şifrə
          <span>*</span>
        </div>
        <Input type="password" placeholder="*********" required></Input>
      </Label>
      <Btn type="submit">Daxil ol</Btn>
    </>
  );
}

function RegisterTab() {
  return (
    <>
      <Label>
        <div>
          Adınız, Soyadınız
          <span>*</span>
        </div>
        <Input
          type="text"
          placeholder="Adınızı və soyadınızı daxil edin"
          required
        ></Input>
      </Label>
      <Label>
        <div>
          Telefonlar
          <span>*</span>
        </div>
        <Input type="tel" placeholder="050 ___ __ __" required></Input>
      </Label>
      <Label>
        <div>
          E-poçt ünvanınız
          <span>*</span>
        </div>
        <Input
          type="email"
          placeholder="E-mail ünvanınızı daxil edin"
          required
        ></Input>
      </Label>
      <Label>
        <div>
          Şifrə
          <span>*</span>
        </div>
        <Input type="password" placeholder="*********" required></Input>
      </Label>
      <Btn type="submit">Qeydiyyat</Btn>
    </>
  );
}

export default Login;
