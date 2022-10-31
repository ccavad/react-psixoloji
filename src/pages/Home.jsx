import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

function Home() {
  return (
    <>
      <Header />
      <Section1>
        <img src="../../assets/home-banner.png" alt="mental check" />
        <div>
          <h2 style={{ color: "white" }}>
            Psixoloji Sınaq Mərkəzi müxtəlif yaş kateqoriyalarına uyğun online
            psixoloji imtahan mərkəzidir.
          </h2>
          <Link to="/tests" className="home__s1--btn">
            İmtahanlar
          </Link>
        </div>
      </Section1>
      <Section2>
        <Section2Images>
          <img src="../../assets/home-s2-i1.png" />
          <img src="../../assets/home-s2-i2.png" />
        </Section2Images>
        <Section2Text>
          <h2>Biz kimik?</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s.
          </p>
        </Section2Text>
      </Section2>
      <Section3>
        <div>
          <h2 style={{ color: "white" }}>
            Psixoloji Sınaq Mərkəzi müxtəlif yaş kateqoriyalarına uyğun online
            psixoloji imtahan mərkəzidir.
          </h2>
          <Link to="/quiz">İmtahana başla</Link>
          <Image top="0px" left="0px" src="../../assets/Group 634.png"></Image>
          <Image
            bottom="10px"
            left="10%"
            src="../../assets/Group 635.png"
          ></Image>
          <Image
            bottom="0px"
            left="35%"
            src="../../assets/Path 4258.png"
          ></Image>
          <Image
            bottom="20%"
            right="30%"
            src="../../assets/Group 636.png"
          ></Image>
          <Image
            bottom="0px"
            right="10%"
            src="../../assets/Group 633.png"
          ></Image>
          <Image right="0px" top="0%" src="../../assets/Path 4257.png"></Image>
        </div>
      </Section3>
      <Section4>
        <Section4Top>
          <div>
            <h3>XƏBƏRLƏR</h3>
            <p>Lorem ipsum dolar sit amet</p>
          </div>
          <Link to="/news">Daha çox</Link>
        </Section4Top>
        <Section4Middle>
          <Section4GridItem>
            <img src="../../assets/concept-problems-with-memory-amnesia-disease.png" />
            <h4>LOREM IPSUM IS SIMPLY</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s…
            </p>
            <Link
              to="/news"
              style={{ backgroundColor: "#246FB2", color: "white" }}
            >
              Daha çox
            </Link>
          </Section4GridItem>
          <Section4GridItem>
            <img src="../../assets/close-up-female-psychologist-looking-sad-girl-holding-teddy-bear.png" />
            <h4>LOREM IPSUM IS SIMPLY</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s…
            </p>
            <Link to="/news">Daha çox</Link>
          </Section4GridItem>
          <Section4GridItem>
            <img src="../../assets/man-sitting-psychologist-s-office-talking-about-problems.png" />
            <h4>LOREM IPSUM IS SIMPLY</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s…
            </p>
            <Link to="/news">Daha çox</Link>
          </Section4GridItem>
        </Section4Middle>
        <Section4Bottom>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={8}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            centeredSlides={true}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
              1400: {
                slidesPerView: 8,
                spaceBetween: 10,
              },
            }}
          >
            <SwiperSlide>
              <img src="../../assets/Partner-logo-2016.png" alt="logo" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="../../assets/256x256bb.png" alt="logo" />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="../../assets/ff776d563a0a60748fd8728773a2d79a722afa858f0806b2f514d06ca3cd305b.png"
                alt="logo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img src="../../assets/images (1).png" alt="logo" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="../../assets/images.png" alt="logo" />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="../../assets/partner-now-logo-png-transparent.png"
                alt="logo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="../../assets/peugeot-partner-1-logo-png-transparent.png"
                alt="logo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img src="../../assets/unnamed.png" alt="logo" />
            </SwiperSlide>
          </Swiper>
        </Section4Bottom>
      </Section4>
      <Footer />
    </>
  );
}

const Image = styled.img`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
`;

const Section1 = styled.section`
  height: 460px;
  width: 100%;
  position: relative;

  &::after {
    content: "";
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    position: absolute;
  }

  img {
    position: absolute;
    left: 0;
    top: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  > div {
    position: absolute;
    width: 50%;
    left: 0;
    top: 0;
    z-index: 10;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 10%;

    @media (max-width: 968px) {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    a {
      background-color: #f8a80d;
      color: white;
      border-radius: 5px;
      padding: 1rem 2rem;
      margin-top: 2rem;
    }
  }
`;

const Section2 = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 3rem 10%;
  gap: 2rem;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Section2Images = styled.div`
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }

  img {
    width: 50%;
    position: absolute;

    &:nth-of-type(1) {
      top: 0;
      left: 0;
    }
    &:nth-of-type(2) {
      bottom: 0;
      right: 0;
    }
  }
`;

const Section2Text = styled.div`
  p {
    max-width: 600px;
    text-align: right;
    float: right;
    color: #626262;
  }
  h2 {
    position: relative;
    padding-right: 1rem;
    color: #3c3c3c;
    text-align: right;

    &::after {
      content: "";
      position: absolute;
      right: 0px;
      width: 5px;
      height: 100%;
      background: var(--primary-color);
    }
  }
`;

const Section3 = styled.section`
  background-color: var(--primary-color);
  padding: 3rem 10%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 968px) {
    padding-block: 5rem !important;
  }

  > div {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    a {
      background-color: transparent;
      border: 1px solid white;
      padding: 1rem 2rem;
      color: white;
      transition: 0.2s;

      &:hover {
        color: var(--primary-color);
        background-color: white;
      }
    }
  }
`;

const Section4 = styled.section`
  padding: 3rem 6%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Section4Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    position: relative;
    padding-left: 1rem;

    &::after {
      content: "";
      position: absolute;
      width: 5px;
      height: 100%;
      background-color: var(--primary-color);
      top: 0;
      left: 0;
    }
  }
  a {
    background-color: transparent;
    color: #f8a80d;
    border: 1px solid #f8a80d;
    border-radius: 5px;
    padding: 1rem 2.5rem;
    transition: 0.2s;

    @media (max-width: 564px) {
      display: none;
    }

    &:hover {
      background-color: #f8a80d;
      color: white;
    }
  }
`;

const Section4Middle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 1rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const Section4GridItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  max-width: 300px;

  @media (max-width: 968px) {
    align-items: center;
    text-align: center;
  }

  img {
    max-width: 100%;
  }

  h4 {
    color: var(--dark-gray);
    font-size: 18px;
    width: 100%;
  }
  p {
    color: var(--dark-gray);
    font-size: 14px;
    width: 90%;
  }
  a {
    background-color: white;
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
    border-radius: 5px;
    padding: 0.8rem 2.7rem;
  }
`;

const Section4Bottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 3rem;
  gap: 1rem;
`;

export default Home;
