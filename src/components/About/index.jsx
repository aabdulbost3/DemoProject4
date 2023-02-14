import React, { Component } from "react";
import Slider from "react-slick";
import { WrapperContainer } from "../../App-styled";
import { SliderItem, Wrapper, WrapperAbout } from "./styled-index";
import "./slider.css";
import { useTranslation } from "react-i18next";

function About() {
  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: 1,
        },
      },
    ],
  };
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const {t , i18n} = useTranslation()
  return (
    <>
      <WrapperAbout id="about">
        <WrapperContainer>
          <Wrapper>
            <div>
              <h2>{t("About.0")}</h2>
              <Slider {...settings}>
                {data.map(() => (
                  <SliderItem>
                    <img
                    
                      src="https://picsum.photos/400"
                      alt="photo"
                    />
                  </SliderItem>
                ))}
              </Slider>
            </div>
          </Wrapper>
        </WrapperContainer>
      </WrapperAbout>
    </>
  );
}

export default About;
