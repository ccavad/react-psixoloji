import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";
import BreadCrumb from "../components/BreadCrumb";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  label {
    color: #434343;
    font-size: 20px;
    font-weight: bold;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  input,
  textarea {
    border: 1px solid #bcbcbc;
    border-radius: 5px;
    width: 90%;
    padding: 1rem;

    &:active,
    &:focus {
      outline: 1px solid #246fb2;
      border: 0;
    }
  }
  textarea {
    resize: vertical;
    height: 120px;
    min-height: 60px;
    max-height: 300px;
    font-family: inherit;
  }

  button {
    background-color: #246fb2;
    color: white;
    border-radius: 5px;
    width: 90%;
    padding: 1rem;
    border: 0;
    font-weight: semibold;
    cursor: pointer;
  }
`;

function formHandler(e) {
  e.preventDefault();
}

function Contact() {
  return (
    <>
      <Header />
      <Banner />
      <main>
        <BreadCrumb page="Əlaqə" url="/contact" />
        <Grid>
          <form onSubmit={(e) => formHandler(e)}>
            <label>
              Ünvan: A.Rəcəbli küç. 88B, Business House, 5-ci mərtəbə <br />
              Telefon: +99412 214 2442/ +99450 315 2662 <br />
              E-mail: info@psixoloji.az
            </label>
            <input type="text" placeholder="Adınız, soyadınız" />
            <input type="text" placeholder="Başlıq" />
            <textarea placeholder="Mesajınız"></textarea>
            <button type="submti">Göndər</button>
          </form>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12152.882708217361!2d49.86419305!3d40.40396185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1664781483377!5m2!1sen!2s"
            width="100%"
            height="450px"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
