import React from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper } from "swiper/react";
import Slide from "./Slide";

SwiperCore.use([Autoplay, Navigation, EffectFade]);

const mainSlideOptions = {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: "#main-slider__swiper-button-next",
    prevEl: "#main-slider__swiper-button-prev",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
};

const Slider = ({ data }) => {
  const slides = data;
  return (
    <section className="main-slider tour-details-slider">
      <Swiper className="thm-swiper__slider" {...mainSlideOptions}>
        <div className="swiper-wrapper">
          {slides.map((slide) => (
            <Slide key={slide.id} slide={slide} />
          ))}
        </div>
        <div className="main-slider-nav">
          <div
            id="main-slider__swiper-button-prev"
            className="main-slider-button-prev"
          >
            <span className="icon-right-arrow"></span>
          </div>
          <div
            id="main-slider__swiper-button-next"
            className="main-slider-button-next"
          >
            <span className="icon-right-arrow"></span>
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default Slider;
