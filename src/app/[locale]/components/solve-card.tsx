import React from "react";
import Image from "next/image";
interface cardItems {
  imgSource: any;
  cardHeading: string;
  cardText: string;
}

const SolveCard: React.FC<cardItems> = ({
  imgSource,
  cardHeading,
  cardText,
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${imgSource?.src})` }}
      className="solve-card w-full mb-10 py-10 px-7 bg-cover bg-no-repeat bg-top shadow-inner rounded-[20px] transition-all duration-[0.3s] ease-in-out"
    >
      <h3 className="text-[20px] leading-[31px] font-bold mt-20 mb-3">
        {cardHeading}
      </h3>
      <p className="text-[14px] leading-[20px] font-medium">{cardText}</p>
    </div>
  );
};

export default SolveCard;
