import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function BreadCrumb({ page, url }) {
  return (
    <BreadCrumbS>
      <BreadCrumbHeading>{page}</BreadCrumbHeading>
      <BreadCrumbLink>
        <Link to="/">Ana səhifə</Link>
        <span>{">"}</span>
        <Link to={`/${url}`}>{page}</Link>
      </BreadCrumbLink>
    </BreadCrumbS>
  );
}

export default BreadCrumb;

const BreadCrumbS = styled.div`
  position: relative;
  padding-left: 1.5rem;

  &::after {
    content: "";
    width: 5px;
    height: 100%;
    background: var(--primary-color);
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const BreadCrumbHeading = styled.h3`
  color: #303030;
  font-size: 1.5rem;
  font-weight: bold;
`;

const BreadCrumbLink = styled.div`
  display: flex;
  gap: 0.5rem;
  color: #838383;
  font-size: 0.9rem;

  a {
    color: #838383;
    font-size: 0.9rem;
  }
`;
