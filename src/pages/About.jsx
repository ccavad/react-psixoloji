import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";

function About() {
  return (
    <>
      <Header />
      <Banner />
      <section className="aboutsec">
        <BreadCrumb page="Haqqımızda" url="about" />
        <div className="aboutsec-2">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s.
          </p>
        </div>
        <div className="aboutsec-3">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
