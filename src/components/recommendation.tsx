import React from "react";
import RecommendationCard from "./recommendation-card";
import Sergey from "../assets/sergey.png";
import Aleksandr from "../assets/aleksandr.png";
import Ruslan from "../assets/ruslan.png";
import Aleksandir from "../assets/aleksandir.png";

const Recommendation: React.FC = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl px-3 mx-auto flex lg:justify-between lg:flex-row flex-col items-center">
        <div className="lg:w-[48%] w-[80%] text-black">
          <div className="w-[75%] mb-6">
            <h1 className="text-[42px] leading-[65px] font-bold mb-3 lg:relative">
              Меня рекомендуют{" "}
              <span className="lg:block absolute w-[280px] left-[120px] bottom-1 h-[2px] bg-[#2e7bff]"></span>
            </h1>
            <p className="text-[20px] leading-[31px] font-normal">
              Сейчас у меня находится более 10 проектов на постоянном
              обслуживании, которым я ежемесячно привлекаю максимальное
              количество целевых обращений
            </p>
          </div>
          <RecommendationCard
            cardTitle="Сергей"
            cardText="Основатель крупнейшего ивент комьюнити. Open Event Club"
            imgSource={Sergey}
            appeals={7400}
            applications="0,51$"
            advertPrice={3600}
          />
          <RecommendationCard
            cardTitle="Александр"
            cardText="Центральная Ипотечная Корпорация - привлечение клиентов на покупку квартир"
            imgSource={Aleksandr}
            appeals={140}
            applications="3$"
            advertPrice={420}
          />
        </div>
        <div className="lg:w-[48%] w-[80%] text-black">
          <RecommendationCard
            cardTitle="Руслан"
            cardText="Открытка кубики"
            imgSource={Ruslan}
            appeals={2000}
            applications="0,5$"
            advertPrice={1000}
          />
          <RecommendationCard
            cardTitle="Александр"
            cardText="Промышленные котлы цель которых обогрев коммерческих площадей от 1000м2"
            imgSource={Aleksandir}
            appeals={150}
            applications="2,5$"
            advertPrice={450}
          />
          <div className="flex">
            <h3 className="text-[28px] leading-[38px] font-bold">Хотите такой же результат?</h3>
            <div className="border border-solid border-[#2e7bff] bg-[#2e7bff] rounded-[30px] inline-block py-3 px-8 text-center cursor-pointer hover:opacity-90">
              <a href="#contact" className="text-white text-[14px] leading-[1.55] font-semibol">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendation;
