"use client";
import React from "react";
import { useTranslations } from "next-intl";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import slideOne from "../../../assets/slide-1.jpg";
import slideTwo from "../../../assets/slide-2.jpg";
import slideThree from "../../../assets/slide-3.jpg";
import slideFour from "../../../assets/slide-4.jpg";
import slideFive from "../../../assets/slide-5.jpg";
import slideSix from "../../../assets/slide-6.jpg";

const ClientComments: React.FC = () => {
  const t = useTranslations();

  return (
    <section id="reviews" className="pt-12 bg-black text-center">
      <h1 className="text-[42px] leading-[40px] font-bold text-white lg:relative pb-10">
        {t("Отзывы")}{" "}
        <span className="lg:block absolute w-[172px] left-[542px] h-[3px] bg-[#2e7bff]"></span>{" "}
        {t("от клиентов")}
      </h1>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        centeredSlides={true}
        autoplay = {{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          540: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-item">
          <div className="w-[200px] h-[400px]">
            <Image
            className="w-full h-full"
              src={slideOne}
              width={200}
              height={400}
              alt="comment screenshot"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <div className="w-[200px] h-[400px]">
            <Image
            className="w-full h-full"
              src={slideTwo}
              width={200}
              height={400}
              alt="comment screenshot"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <div className="w-[200px] h-[400px]">
            <Image
            className="w-full h-full"
              src={slideThree}
              width={200}
              height={400}
              alt="comment screenshot"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <div className="w-[200px] h-[400px]">
            <Image
            className="w-full h-full"
              src={slideFour}
              width={200}
              height={400}
              alt="comment screenshot"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <div className="w-[200px] h-[400px]">
            <Image
            className="w-full h-full"
              src={slideFive}
              width={200}
              height={400}
              alt="comment screenshot"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <div className="w-[200px] h-[400px]">
            <Image
            className="w-full h-full"
              src={slideSix}
              width={200}
              height={400}
              alt="comment screenshot"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default ClientComments;
