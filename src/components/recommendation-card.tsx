import React from "react";
import Image from "next/image";

interface cardData {
  cardTitle: string;
  cardText: string;
  imgSource: any;
  appeals: number;
  applications: string;
  advertPrice: number;
}

const RecommendationCard: React.FC<cardData> = ({
  cardTitle,
  cardText,
  imgSource,
  appeals,
  applications,
  advertPrice,
}) => {
  return (
    <div className="w-full p-10 text-black border-t-[6px] border-solid border-[#2e7bff] shadow-[0px_0px_10px_3px_#0000007f] mb-14">
      <div className="flex justify-between mb-6">
        <div className="w-[60%]">
          <h3 className="text-[22px] leading-[34px] font-bold mb-3">
            {cardTitle}
          </h3>
          <p className="text-[16px] leading-[25px] font-normal text-[#999999]">
            {cardText}
          </p>
        </div>
        <div className="w-[100px] h-[100px]">
          <Image
            src={imgSource}
            width={100}
            height={100}
            alt={cardTitle}
            className="w-full rounded-[50%]"
          />
        </div>
      </div>
      <ul className="flex justify-between list-none p-0 m-0">
        <li className="mx-3">
          <h2 className="text-[32px] leading-[50px] font-bold">{appeals}</h2>
          <p className="text-[18px] leading-[28px] font-normal">
            целевых <br /> обращений
          </p>
        </li>
        <li className="mx-3">
          <h2 className="text-[32px] leading-[50px] font-bold">
            {applications}
          </h2>
          <p className="text-[18px] leading-[28px] font-normal">
            стоимость <br /> заявки
          </p>
        </li>
        <li className="mx-3">
          <h2 className="text-[32px] leading-[50px] font-bold">
            {advertPrice}$
          </h2>
          <p className="text-[18px] leading-[28px] font-normal">
            рекламный <br /> бюджет
          </p>
        </li>
      </ul>
    </div>
  );
};

export default RecommendationCard;
