import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NewsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;

  @media (max-width: 968px) {
    align-items: center;
    text-align: center;
  }

  h4 {
    color: #303030;
    font-size: 18px;
  }
  p {
    color: #303030;
    font-size: 14px;
    width: 90%;
  }
  a {
    background-color: white;
    color: #246fb2;
    border: 1px solid #246fb2;
    border-radius: 5px;
    padding: 0.8rem 2.7rem;
    transition: 0.4s;

    &:hover {
      background-color: #246fb2;
      color: white;
    }
  }
`;

function NewsItem({ src }) {
  return (
    <NewsStyled>
      <img src={src} />
      <h4>LOREM IPSUM IS SIMPLY</h4>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry’s standard dummy text ever
        since the 1500s…
      </p>
      <Link to="/news">Daha çox</Link>
    </NewsStyled>
  );
}

export default NewsItem;
