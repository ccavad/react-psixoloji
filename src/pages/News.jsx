import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from "styled-components";
import BreadCrumb from "../components/BreadCrumb";
import NewsItem from "../components/NewsItem";
import { nanoid } from "nanoid";

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 1rem;
  gap: 1.5rem;
`;

function News() {
  const imgUrls = [
    "../../public/assets/concept-problems-with-memory-amnesia-disease.png",
    "../../public/assets/close-up-female-psychologist-looking-sad-girl-holding-teddy-bear.png",
    "../../public/assets/man-sitting-psychologist-s-office-talking-about-problems.png",
  ];

  return (
    <>
      <Header />
      <Banner />
      <main>
        <BreadCrumb page="Xəbərlər" url="/news" />
        <NewsGrid>
          {imgUrls.map((img) => (
            <NewsItem src={img} key={nanoid()} />
          ))}
          {imgUrls.map((img) => (
            <NewsItem src={img} key={nanoid()} />
          ))}
          {imgUrls.map((img) => (
            <NewsItem src={img} key={nanoid()} />
          ))}
        </NewsGrid>
      </main>
      <Footer />
    </>
  );
}

export default News;
