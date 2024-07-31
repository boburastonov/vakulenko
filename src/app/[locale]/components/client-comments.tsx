import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslations } from "next-intl";

// Slider settings interface for TypeScript
interface SliderSettings {
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  infinite: boolean;
  autoplay: boolean;
  autoplaySpeed: number;
  responsive: Array<{
    breakpoint: number;
    settings: {
      slidesToShow: number;
      slidesToScroll: number;
      initialSlide?: number;
      infinite?: boolean;
      dots?: boolean;
    };
  }>;
}

const settings: SliderSettings = {
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1800,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

const ClientComments: React.FC = () => {
  const t = useTranslations();

  return (
    <section id="reviews" className="pt-12 bg-black text-center">
      <h1 className="text-[42px] leading-[40px] font-bold text-white lg:relative pb-10">
        {t("Отзывы")}{" "}
        <span className="lg:block absolute w-[172px] left-[542px] h-[3px] bg-[#2e7bff]"></span>{" "}
        {t("от клиентов")}
      </h1>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </section>
  );
};

export default ClientComments;
