import React, { useState } from "react";
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
      cursor: pointer;
      width: 200px;
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
      <main>
        <StyledQuiz>
          {new Array(15).fill(null).map((item, ind) => (
            <li key={nanoid()}>
              <QuizItem
                index={`${ind + 1}. `}
                question={ind % 2 === 0 ? questions[1] : questions[0]}
                // answer={answer}
                // setAnswer={setAnswer}
              />
            </li>
          ))}
        </StyledQuiz>
        <Btn style={{ marginLeft: "3rem" }}>Təsdiqlə</Btn>
      </main>
      <Footer />
    </>
  );
}

function QuizItem({ index, question }) {
  const [answer, setAnswer] = useState("none");

  return (
    <div>
      <h3>{index + question}</h3>
      <ul>
        <li
          onClick={() => {
            answer === "a" ? setAnswer("none") : setAnswer("a");
          }}
        >
          <Span color={answer === "a" && "#246FB2"}>A.</Span>
          Cavab 1
        </li>
        <li
          onClick={() => {
            answer === "b" ? setAnswer("none") : setAnswer("b");
          }}
        >
          <Span color={answer === "b" && "#246FB2"}>B.</Span>
          Cavab 2
        </li>
        <li
          onClick={() => {
            answer === "c" ? setAnswer("none") : setAnswer("c");
          }}
        >
          <Span color={answer === "c" && "#246FB2"}>C.</Span>
          Cavab 3
        </li>
      </ul>
    </div>
  );
}

export default Quiz;
