import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from "styled-components";
import BreadCrumb from "../components/BreadCrumb";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`;

function Partners() {
  return (
    <>
      <Header />
      <Banner />
      <main>
        <BreadCrumb page="Tərəfdaşlar" url="/partners" />
        <Grid>
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
        </Grid>
      </main>
      <Footer />
    </>
  );
}

export default Partners;
