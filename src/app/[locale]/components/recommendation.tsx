import React from "react";
import RecommendationCard from "./recommendation-card";
import Sergey from "../../../assets/sergey.png";
import Aleksandr from "../../../assets/aleksandr.png";
import Ruslan from "../../../assets/ruslan.png";
import Aleksandir from "../../../assets/aleksandir.png";
import { useTranslations } from "next-intl";

const Recommendation: React.FC = () => {
  const t = useTranslations();
  return (
    <section className="lg:py-12 py-8">
      <div className="recommendation-container max-w-7xl px-3 mx-auto flex lg:justify-between lg:flex-row flex-col items-center">
        <div className="lg:w-[48%] lg:items-start w-[80%] flex flex-col items-center text-black">
          <div className="w-[75%] md:mb-10 lg:text-left mb-6 mx-auto text-center">
            <h1 className="md:text-[42px] md:leading-[65px] md:font-bold text-[32px] leading-[42px] font-semibold mb-3 lg:relative">
              {t("Меня рекомендуют")}{" "}
              <span className="lg:block absolute w-[280px] left-[120px] bottom-1 h-[3px] bg-[#2e7bff]"></span>
            </h1>
            <p className="md:text-[20px] md:leading-[31px] text-[16px] leading-[25px] font-normal">
              {t(
                "Сейчас у меня находится более 10 проектов на постоянном обслуживании, которым я ежемесячно привлекаю максимальное количество целевых обращений"
              )}
            </p>
          </div>
          <RecommendationCard
            cardTitle={t("Сергей")}
            cardText={`${t(
              "Основатель крупнейшего ивент комьюнити"
            )} Open Event Club`}
            imgSource={Sergey}
            appeals={7400}
            applications="0,51$"
            advertPrice={3600}
          />
          <RecommendationCard
            cardTitle={t("Александр")}
            cardText={t("Центральная Ипотечная Корпорация - привлечение клиентов на покупку квартир")}
            imgSource={Aleksandr}
            appeals={140}
            applications="3$"
            advertPrice={420}
          />
        </div>
        <div className="lg:w-[48%] lg:items-start w-[80%] flex flex-col items-center text-black">
          <RecommendationCard
            cardTitle={t('Руслан')}
            cardText={t("Открытка кубики")}
            imgSource={Ruslan}
            appeals={2000}
            applications="0,5$"
            advertPrice={1000}
          />
          <RecommendationCard
            cardTitle={t('Александр')}
            cardText={t("Промышленные котлы цель которых обогрев коммерческих площадей от 1000м2")}
            imgSource={Aleksandir}
            appeals={150}
            applications="2,5$"
            advertPrice={450}
          />
          <div className="flex">
            <h3 className="text-[28px] leading-[38px] font-bold">
              {t('Хотите такой же результат?')}
            </h3>
            <div className="border border-solid border-[#2e7bff] bg-[#2e7bff] rounded-[30px] inline-block py-3 px-8 text-center cursor-pointer hover:opacity-90">
              <a
                href="#contact"
                className="text-white text-[14px] leading-[1.55] font-semibol"
              >
                {t('ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendation;
