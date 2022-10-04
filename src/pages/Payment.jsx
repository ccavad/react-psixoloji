import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

function Payment() {
  return (
    <>
      <Header />
      <Banner />
      <main>
        <h2>Kart məlumatlarını daxil edin:</h2>
        <img src="../../public/assets/Group 649.png" alt="visa" />
        <form onSubmit={(e) => e.preventDefault()}>
          <Grid>
            <label style={{ gridColumn: "span 2" }}>
              <div>
                Kartın nömrəsi <span>*</span>
              </div>
              <input type="text" placeholder="____ ____ ____ ____" />
            </label>
            <label>
              <div>
                Tarix <span>*</span>
              </div>
              <input type="text" placeholder="MM/YY" />
            </label>
            <label>
              <div>
                CVV <span>*</span>
              </div>
              <input type="text" placeholder="CVV 2" />
            </label>
          </Grid>
          <h3>Ödəniş məlumatları</h3>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default Payment;
