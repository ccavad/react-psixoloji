import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 50%;

  input,
  textarea {
    border: 0;
    border-bottom: 1px solid #707070;
    padding: 1rem;
    color: #707070;
    resize: none;
    width: 90%;

    &:active,
    &:focus {
      outline: 0;
    }
  }

  label {
    color: #24324a;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    span {
      color: red;
    }
  }

  textarea {
    font-family: inherit;
  }

  button {
    width: 280px;
    box-shadow: 1px 3px 10px rgba(20, 179, 240, 12%);
    border: 0;
    background-color: white;
    color: #24324a;
    padding: 1.5rem 5rem;
    border-radius: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
  }
`;

function Login() {
  return (
    <>
      <Header />
      <Banner />
      <main>
        <Form onSubmit={(e) => e.preventDefault()}>
          <label>
            <div>
              Adınız, Soyadınız <span>*</span>
            </div>
            <input type="text" placeholder="Adınızı və soyadınızı daxil edin" />
          </label>
          <label>
            <div>
              Telefonlar <span>*</span>
            </div>
            <input type="tel" placeholder="050 _ _ _  _ _  _ _" />
          </label>
          <label>
            <div>
              E-poçt ünvanınız <span>*</span>
            </div>
            <input type="email" placeholder="E-mail ünvanınızı daxil edin" />
          </label>
          <label>
            Qeyd
            <textarea placeholder="Qeyd daxil edin"></textarea>
          </label>
          <button type="submit">Növbəti</button>
        </Form>
      </main>
      <Footer />
    </>
  );
}

export default Login;
