import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Image = styled.img`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
`;

function Home() {
  return (
    <>
      <Header />
      <section className="home__s1">
        <img
          className="home__s1--img"
          src="../../public/assets/home-banner.png"
          alt="mental check"
        />
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
          <h2 className="home__s2--title">Biz kimik?</h2>
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
      <section className="home__s3">
        <div>
          <h2 className="home__s3--title">
            Psixoloji Sınaq Mərkəzi müxtəlif yaş kateqoriyalarına uyğun online
            psixoloji imtahan mərkəzidir.
          </h2>
          <Link to="/quiz" className="home__s3--link">
            İmtahana başla
          </Link>
          <Image
            top="0px"
            left="0px"
            src="../../public/assets/Group 634.png"
          ></Image>
          <Image
            bottom="10px"
            left="10%"
            src="../../public/assets/Group 635.png"
          ></Image>
          <Image
            bottom="0px"
            left="35%"
            src="../../public/assets/Path 4258.png"
          ></Image>
          <Image
            bottom="20%"
            right="30%"
            src="../../public/assets/Group 636.png"
          ></Image>
          <Image
            bottom="0px"
            right="10%"
            src="../../public/assets/Group 633.png"
          ></Image>
          <Image
            right="0px"
            top="0%"
            src="../../public/assets/Path 4257.png"
          ></Image>
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
          <div className="grid-item">
            <img src="../../public/assets/concept-problems-with-memory-amnesia-disease.png" />
            <h4>LOREM IPSUM IS SIMPLY</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s…
            </p>
            <Link to="/news">Daha çox</Link>
          </div>
          <div className="grid-item">
            <img src="../../public/assets/close-up-female-psychologist-looking-sad-girl-holding-teddy-bear.png" />
            <h4>LOREM IPSUM IS SIMPLY</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s…
            </p>
            <Link to="/news">Daha çox</Link>
          </div>
          <div className="grid-item">
            <img src="../../public/assets/man-sitting-psychologist-s-office-talking-about-problems.png" />
            <h4>LOREM IPSUM IS SIMPLY</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s…
            </p>
            <Link to="/news">Daha çox</Link>
          </div>
        </div>
        <div className="home4__bottom">
          <img src="../../public/assets/Partner-logo-2016.png" alt="logo" />
          <img src="../../public/assets/256x256bb.png" alt="logo" />
          <img
            src="../../public/assets/ff776d563a0a60748fd8728773a2d79a722afa858f0806b2f514d06ca3cd305b.png"
            alt="logo"
          />
          <img src="../../public/assets/images (1).png" alt="logo" />
          <img src="../../public/assets/images.png" alt="logo" />
          <img
            src="../../public/assets/partner-now-logo-png-transparent.png"
            alt="logo"
          />
          <img
            src="../../public/assets/peugeot-partner-1-logo-png-transparent.png"
            alt="logo"
          />
          <img src="../../public/assets/unnamed.png" alt="logo" />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
