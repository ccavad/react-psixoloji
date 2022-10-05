import React from "react";
import styled from "styled-components";

export const Btn = styled.button`
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
  transition: 0.4s;

  &:hover {
    box-shadow: none;
  }
`;

export const Input = styled.input`
  border: 0;
  border-bottom: 1px solid #707070;
  padding: 1rem;
  color: #707070;
  width: 100%;
  font-size: 1rem;
  padding-left: 0;

  &:active,
  &:focus {
    outline: 0;
  }
`;

export const TextArea = styled.textarea`
  border: 0;
  border-bottom: 1px solid #707070;
  padding: 1rem;
  color: #707070;
  resize: none;
  width: 100%;
  font-family: inherit;
  font-size: 1rem;
  height: 100px;
  padding-left: 0;

  &:active,
  &:focus {
    outline: 0;
  }
`;

export const Label = styled.label`
  color: #24324a;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-weight: bold;

  span {
    color: red;
    margin-left: 0.5rem;
  }
`;
