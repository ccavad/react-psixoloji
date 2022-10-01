import React from 'react'
import Header from "../components/Header";
import Banner from "../components/Banner";
import BreadCrumb from "../components/BreadCrumb";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Tests() {
  return (
    <>
      <Header />
      <Banner />
      <BreadCrumb page="Testlər" url="tests" />
      <Footer />
    </>
  )
}

export default Tests