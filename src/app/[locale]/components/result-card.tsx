import Link from "next/link";
import React, { FC } from "react";
interface cardInfo {
  bgURL: any;
  cardHeading: string;
  cardText: string;
  advertPrice: string;
  selledCount: string;
  itemPrice: string;
  adverText: string;
  counText: string;
  priceText: string;
  btnText: string;
}

const ResultCard: FC<cardInfo> = ({
  bgURL,
  cardHeading,
  cardText,
  advertPrice,
  selledCount,
  itemPrice,
  adverText,
  counText,
  priceText,
  btnText,
}) => {
   return (
    
    <div style={{ backgroundImage: `url(${bgURL?.src})` }}
      className="card-container md:w-[78%] w-[90%] bg-center bg-no-repeat md:bg-cover transition-all duration-[.3s] ease-in-out"
    >
      <div className="card-content lg:text-left md:w-[45%] md:py-12 md:px-5 w-full py-2 px-3 text-white">
        <h3 className="md:text-[24px] md:leading-[37px] md:font-bold md:mb-3 text-[20px] leading-[30px] font-semibold mb-1">
          {cardHeading}
        </h3>
        <p className="md:text-[18px] md:leading-[28px] md:mb-10 text-[15px] leading-[20px] mb-2 font-normal font-['Roboto', 'Arial', 'sans-serif']">
          {cardText}
        </p>
        <div className="card-numbers flex md:-ml-[10px] font-['Roboto', 'sans-serif']">
          <div className="mx-[10px] ">
            <h2 className="lg:text-[40px] lg:leading-[62px] md:font-bold md:text-[32px] md:leading-[50px] text-[24px] leading-[37px] font-semibold whitespace-nowrap">
              {advertPrice}
            </h2>
            <p className="md:text-[18px] md:leading-[28px] text-[15px] leading-[24px] font-normal">
              {adverText}
            </p>
          </div>
          <div className="mx-[10px]">
            <h2 className="lg:text-[40px] lg:leading-[62px] md:font-bold md:text-[32px] md:leading-[50px] text-[24px] leading-[37px] font-semibold">
              {selledCount}
            </h2>
            <p className="md:text-[18px] md:leading-[28px] text-[15px] leading-[24px] font-normal">{counText}</p>
          </div>
          <div className="ml-[30px]">
            <h2 className="lg:text-[40px] lg:leading-[62px] md:font-bold md:text-[32px] md:leading-[50px] text-[24px] leading-[37px] font-semibold whitespace-nowrap">
              {itemPrice}
            </h2>
            <p className="md:text-[18px] md:leading-[28px] text-[15px] leading-[24px] font-normal">
              {priceText}
            </p>
          </div>
        </div>
        <div className="link-btn border-[2px] border-solid border-white rounded-[30px] inline-block py-2 px-8 mr-auto mt-12 transition-all duration-[.3s] ease-in-out">
          <Link
            href={"#contact"}
            className="text-white text-[14px] leading-[1.55] font-semibold"
          >
            {btnText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
