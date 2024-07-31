import React from "react";
import SolveCard from "./solve-card";
import Brending from "../../../assets/brending.png";
import Landing from "../../../assets/landing.png";
import Design from "../../../assets/design.png";
import SMM from "../../../assets/smm.png";
import Targeting from "../../../assets/targeting.png";
import Copywriting from "../../../assets/copywriting.png";
import { useTranslations } from "next-intl";

const MainSolves: React.FC = () => {
  const t = useTranslations();
  return (
    <section className="pb-14 pt-3">
      <div className="max-w-7xl mx-auto px-3 flex lg:flex-row lg:text-left text-center flex-col items-center justify-between text-black">
        <div className="md:w-[41%] w-[75%] lg:m-0 md:mb-16 mb-8">
          <h1 className="lg:relative md:text-[40px] md:leading-[62px] md:font-bold text-[30px] leading-[47px] font-semibold mb-3 font-[Montserrat, Arial]">
            {t('Лучшие')}{" "}
            <span className="lg:block absolute w-[165px] left-[0px] top-14 h-[3px] bg-[#2e7bff]"></span>{" "}
            {t('решения для бизнеса')}
          </h1>
          <p className="md:text-[19px] text-[14px] font-normal">
            {t('Комплексный подход для стартапов и малых предприятий, ищущих партнеров для своих цифровых медиа, дизайна и развития, лидогенерации и коммуникаций – это те услуги, которые я, предоставляю для достижения результата')}
          </p>
        </div>
        <div className="flex md:flex-row flex-col justify-between w-[45%]">
          <div className="md:w-[46%] w-[100%]">
            <SolveCard
              imgSource={Brending}
              cardHeading={t("Брендинг")}
              cardText={t("Идея, концепция, фирменные цвета и шрифты, позиционирование.")}
            />
            <SolveCard
              imgSource={Landing}
              cardHeading={t("Landing")}
              cardText={t("Прототип, продающие тексты, дизайн, верстка, триггеры, лид-формы.")}
            />
            <SolveCard
              imgSource={Design}
              cardHeading={t("Дизайн")}
              cardText={t("Креативы, баннеры, лендинги, оформление соц.сетей.")}
            />
          </div>
          <div className="md:w-[46%] w-full -mt-9">
            <SolveCard
              imgSource={SMM}
              cardHeading={t("СММ")}
              cardText={t("Контент-план, хештеги, посты, общение с аудиторией, акции и конкурсы.")}
            />
            <SolveCard
              imgSource={Targeting}
              cardHeading={t("Таргетинг")}
              cardText={t("Офферы, креативы, объявления, сегментация под ЦА, улучшение.")}
            />
            <SolveCard
              imgSource={Copywriting}
              cardHeading={t("Копирайтинг")}
              cardText={("Контент-планы, офферы, продающие текста, коммерчесские предложения.")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSolves;
