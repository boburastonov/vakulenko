import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

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
  const t = useTranslations();
  return (
    <div className="w-[85%] md:p-10 p-2 text-black border-t-[6px] border-solid border-[#2e7bff] shadow-[0px_0px_10px_3px_#0000007f] mb-14 ">
      <div className="flex justify-between mb-6">
        <div className="w-[60%]">
          <h3 className="md:text-[22px] md:leading-[34px] text-[18px] leading-[28px] font-bold mb-3">
            {cardTitle}
          </h3>
          <p className="md:text-[16px] md:leading-[25px] text-[14px] leading-[22px] font-normal text-[#999999]">
            {cardText}
          </p>
        </div>
        <div className="md:w-[100px] md:h-[100px] w-[80px] h-[80px]">
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
        <li className="md:mx-3">
          <h2 className="md:text-[32px] md:leading-[50px] text-[23px] leading-[30px] font-bold">
            {appeals}
          </h2>
          <p className="md:text-[18px] md:leading-[28px] text-[14px] leading-[22px] font-normal">
            {t("целевых")} <br /> {t("обращений")}
          </p>
        </li>
        <li className="md:mx-3 mr-[5px]">
          <h2 className="md:text-[32px] md:leading-[50px] text-[23px] leading-[30px] font-bold">
            {applications}
          </h2>
          <p className="md:text-[18px] md:leading-[28px] text-[14px] leading-[22px] font-normal">
            {t("стоимость")} <br /> {t("заявки")}
          </p>
        </li>
        <li className="md:mx-3 mb-[5px]">
          <h2 className="md:text-[32px] md:leading-[50px] text-[23px] leading-[30px] font-bold">
            {advertPrice}$
          </h2>
          <p className="md:text-[18px] md:leading-[28px] text-[14px] leading-[22px] font-normal">
            {t("рекламный")} <br /> {t("бюджет")}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default RecommendationCard;
