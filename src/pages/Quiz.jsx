import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { nanoid } from "nanoid";
import styled from "styled-components";
import { Btn } from "../components/Styled";

const StyledQuiz = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-left: 3rem;
  margin-bottom: 2rem;

  > li {
    display: flex;
    flex-direction: column;
    gap: 1.1rem;

    h3 {
      color: #24324a;
      font-size: 20px;
      margin-bottom: 1rem;
    }

    li {
      color: #24324a;
      font-size: 17px;
      width: 200px;
      user-select: none;
      max-width: 100%;

      label {
        cursor: pointer;
      }

      input {
        visibility: hidden;

        &:checked ~ span {
          border: 1px solid #246fb2;
        }
      }
    }
  }
`;

const Span = styled.span`
  margin-right: 0.4rem;
  border: 1px solid white;
  border-radius: 50%;
  padding: 2px;
  border-color: ${(props) => props.color};
`;

const questions = [
  "Aşağıdakı fikrini məntiqi olaraq taparaq tamamlayın:",
  "Digərlərindən fərqlənən adı seçin.",
];

function Quiz() {
  return (
    <>
      <Header />
      <Banner />
      <main style={{ paddingLeft: "3rem" }}>
        <StyledQuiz>
          {new Array(15).fill(null).map((item, ind) => (
            <li key={nanoid()}>
              <QuizItem
                index={`${ind + 1}. `}
                question={ind % 2 === 0 ? questions[1] : questions[0]}
              />
            </li>
          ))}
        </StyledQuiz>
        <Btn>Təsdiqlə</Btn>
      </main>
      <Footer />
    </>
  );
}

function QuizItem({ index, question }) {
  return (
    <>
      <h3>{index + question}</h3>
      <ul>
        <li>
          <label>
            <input type="radio" name={`question${index}`} />
            <Span>A.</Span>
            Cavab 1
          </label>
        </li>
        <li>
          <label>
            <input type="radio" name={`question${index}`} />
            <Span>B.</Span>
            Cavab 2
          </label>
        </li>
        <li>
          <label>
            <input type="radio" name={`question${index}`} />
            <Span>C.</Span>
            Cavab 3
          </label>
        </li>
      </ul>
    </>
  );
}

export default Quiz;
