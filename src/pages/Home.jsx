import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <section className="home__s1">
        <img className="home__s1--img" src="../../public/assets/home-banner.png" alt="mental check" />
        <div>
          <h2 className="home__s1--title">
            Psixoloji Sınaq Mərkəzi müxtəlif yaş kateqoriyalarına uyğun online
            psixoloji imtahan mərkəzidir.
          </h2>
          <Link to="/tests" className="home__s1--btn">
            İmtahanlar
          </Link>
        </div>
      </section>
      <section className="home__s2">
        <div className="home__s2__images">
          <img src="../../public/assets/home-s2-i1.png" />
          <img src="../../public/assets/home-s2-i2.png" />
        </div>
        <div className="home__s2__text">
          <h2 className="home__s2--title">
            Biz kimik?
          </h2>
          <p>Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the
          industry’s standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap
          into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s.
          </p>
        </div>
      </section>
      <section className="home__s3">
        <div>
          <h2 className="home__s3--title">Psixoloji Sınaq Mərkəzi müxtəlif yaş kateqoriyalarına 
          uyğun online psixoloji imtahan mərkəzidir.</h2>
          <Link to="/quiz" className="home__s3--link">İmtahana başla</Link>
        </div>
      </section>
      <section className="home4">
        <div className="home4__top">
          <div>
            <h3>XƏBƏRLƏR</h3>
            <p>Lorem ipsum dolar sit amet</p>
          </div>
          <Link to="/news">Daha çox</Link>
        </div>
        <div className="home4__middle">
          
        </div>
        <div className="home4__bottom"></div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
