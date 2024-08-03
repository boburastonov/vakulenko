"use client";
import React, { FC, useState } from "react";
import ResultCard from "./result-card";
import img1 from "../../../assets/g63.jpg";
import img2 from "../../../assets/summit.png";
import img3 from "../../../assets/tahoe.jpg";
import img4 from "../../../assets/townhouse.jpg";
import img5 from "../../../assets/kinder.jpg";
import img6 from "../../../assets/juniper.jpg";
import img7 from "../../../assets/airplane.jpg";
import img8 from "../../../assets/eco-ware.jpg";
import img9 from "../../../assets/Pension.jpg";
import img10 from "../../../assets/china.jpg";
import img11 from "../../../assets/11.png";
import img12 from "../../../assets/12.png";
import img13 from "../../../assets/13.png";
import img14 from "../../../assets/14.png";
import img15 from "../../../assets/15.png";
import img16 from "../../../assets/16.png";
import img17 from "../../../assets/17.png";
import img18 from "../../../assets/18.png";
import img19 from "../../../assets/19.png";
import img20 from "../../../assets/20.png";
import { useTranslations } from "next-intl";

const Results: React.FC = () => {
  const t = useTranslations();
  const [open, setOpen] = useState(false);
  return (
    <section id="portfolio">
      <div className="lg:max-w-[1480px] md:w-full py-11 text-center mx-auto">
        <div className="md:w-[60%] w-[75%] md:mb-28 mb-10 mx-auto text-black">
          <h1 className="lg:text-[52px] lg:leading-[81px] md:text-[32px] md:leading-[50px] md:font-bold md:mb-4 lg:relative font-semibold text-[26px] mb-2">
            {t("Результаты")}{" "}
            <span className="lg:absolute left-10 lg:block w-[350px] h-[2px] bg-[#2e7bff] md:hidden"></span>{" "}
            {t("моих клиентов")}
          </h1>
          <p className="md:text-[20px] md:font-bold md:leading-[31px] text-[17px] font-semibold leading-[26px]">
            {t(
              "Ознакомьтесь с моими кейсами, где с помощью инструментов таргетированной рекламы я сгенерировал более 1 000 000$ прибыли клиентам"
            )}
          </p>
        </div>
        <div className="cards">
          <div className="cards-box md:mb-36 mb-10">
            <ResultCard
              bgURL={img1}
              cardHeading={t("Пригон элитных авто")}
              cardText={t("Пригон элитных автомобилей под заказ")}
              advertPrice="2800$"
              selledCount="90"
              itemPrice={`3,6 ${t("млн")} $`}
              adverText={t("Инвестиции в рекламу")}
              counText={t("Продажи")}
              priceText={t("Продали авто на")}
              btnText={t("ХОЧУ ТАК ЖЕ")}
            />
          </div>
          <div className="cards-box md:mb-36 mb-10">
            <ResultCard
              bgURL={img2}
              cardHeading={t("Realty Summit")}
              cardText={t("Продажа билетов на саммит")}
              advertPrice="2594$"
              selledCount="473"
              itemPrice="56 059$"
              adverText={t("Инвестиции в рекламу")}
              counText={t("Продажи")}
              priceText={t("Чистой прибыли")}
              btnText={t("ОБСУДИТЬ ПРОЕКТ")}
            />
          </div>
          <div className="cards-box md:mb-36 mb-10">
            <ResultCard
              bgURL={img3}
              cardHeading={t("Пригон авто из США")}
              cardText={t("Пригон автомобилей под заказ")}
              advertPrice="500"
              selledCount="0,8$"
              itemPrice={`2 ${t("мес")}`}
              adverText={t("целевых обращений")}
              counText={t("стоимость заявки")}
              priceText={t("длительность кампании")}
              btnText={t("ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ")}
            />
          </div>
          <div className="cards-box md:mb-36 mb-10">
            <ResultCard
              bgURL={img4}
              cardHeading="TOWNHOUSE"
              cardText={t("Продажа таун-хаусов")}
              advertPrice="870"
              selledCount="0,68$"
              itemPrice={`3 ${t("мес")}`}
              adverText={t("целевых обращений")}
              counText={t("стоимость заявки")}
              priceText={t("длительность кампании")}
              btnText={t("ХОЧУ ТАК ЖЕ")}
            />
          </div>
          <div className="cards-box md:mb-36 mb-10">
            <ResultCard
              bgURL={img5}
              cardHeading={t("Большие киндеры")}
              cardText={t(
                "Привлечение клиентов покупку больших подарочных киндеров"
              )}
              advertPrice="1200"
              selledCount="0,87$"
              itemPrice={`2 ${t("мес")}`}
              adverText={t("целевых обращений")}
              counText={t("стоимость заявки")}
              priceText={t("длительность кампании")}
              btnText={t("ОБСУДИТЬ ПРОЕКТ")}
            />
          </div>
          <div className="cards-box md:mb-36 mb-10">
            <ResultCard
              bgURL={img6}
              cardHeading={t("Продажа елок в США")}
              cardText={t(
                "Продажа дизайнерских деревянных елок на территории США"
              )}
              advertPrice="150 000$"
              selledCount="800$"
              itemPrice={`1 ${t("мес")}`}
              adverText={t("продали на сумму")}
              counText={t("рекламный бюджет")}
              priceText={t("длительность кампании")}
              btnText={t("ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ")}
            />
          </div>
          <div className="cards-box md:mb-36 mb-10">
            <ResultCard
              bgURL={img7}
              cardHeading={t("Авиационный центр в Латвии")}
              cardText={t(
                "Рекламная кампания была нацелен на привлечение абитуриентов на обучение профессии авиамеханик"
              )}
              advertPrice="500"
              selledCount="1,2$"
              itemPrice={`1 ${t("мес")}`}
              adverText={t("целевых обращений")}
              counText={t("стоимость заявки")}
              priceText={t("длительность кампании")}
              btnText={t("ХОЧУ ТАК ЖЕ")}
            />
          </div>
          <div className="cards-box md:mb-36 mb-10">
            <ResultCard
              bgURL={img8}
              cardHeading={t("Оптовая продажа экопосуды")}
              cardText={t(
                "Целью рекламной кампании было привлечение оптовых клиентов на покупок биоразлагаемой посуды"
              )}
              advertPrice="1200"
              selledCount="0,7$"
              itemPrice={`2 ${t("мес")}`}
              adverText={t("целевых обращений")}
              counText={t("стоимость заявки")}
              priceText={t("длительность кампании")}
              btnText={t("ОБСУДИТЬ ПРОЕКТ")}
            />
          </div>
          <div className="cards-box md:mb-36 mb-10">
            <ResultCard
              bgURL={img9}
              cardHeading={t("Пансионат для престарелых")}
              cardText={t(
                "Привлечение клиентов для обслуживания их пожилых родственников"
              )}
              advertPrice="122"
              selledCount="2$"
              itemPrice={`3 ${t("нед")}`}
              adverText={t("целевых обращений")}
              counText={t("стоимость заявки")}
              priceText={t("длительность кампании")}
              btnText={t("ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ")}
            />
          </div>
          <div className="cards-box md:mb-36 mb-10">
            <ResultCard
              bgURL={img10}
              cardHeading={t("Бизнес с Китаем")}
              cardText={t(
                "Привлечение клиентов для для полного сопровождения бизнеса связанного с Китаем"
              )}
              advertPrice="280"
              selledCount="1,6$"
              itemPrice={`1 ${t("мес")}`}
              adverText={t("целевых обращений")}
              counText={t("стоимость заявки")}
              priceText={t("длительность кампании")}
              btnText={t("ХОЧУ ТАК ЖЕ")}
            />
          </div>
          <div className="cards-box md:mb-36 mb-10">
            <ResultCard
              bgURL={img11}
              cardHeading={t("Европейский квартал")}
              cardText={t(
                "Привлечение клиентов для элитного застройщика в Житомире"
              )}
              advertPrice="1485"
              selledCount="0,55$"
              itemPrice={`7 ${t("мес")}`}
              adverText={t("целевых обращений")}
              counText={t("стоимость заявки")}
              priceText={t("длительность кампании")}
              btnText={t("ОБСУДИТЬ ПРОЕКТ")}
            />
          </div>
          <div className="cards-box md:mb-36 mb-10">
            <ResultCard
              bgURL={img12}
              cardHeading="Event Academy"
              cardText={t(
                "Продажа билетов на курсы по онлайн ивентам через вебинар"
              )}
              advertPrice="1351"
              selledCount="1,38$"
              itemPrice={`7 ${t("дн")}`}
              adverText={t("Регистрация на вебинар")}
              counText={t("стоимость регистрации")}
              priceText={t("длительность кампании")}
              btnText={t("ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ")}
            />
          </div>

          {!open ? (
            <button
              className="text-white text-[16px] leading-[1.55] font-semibold bg-[#237bff] border-[2px] border-solid border-[#2e7bff] rounded-[30px] inline-block py-4 px-14 mr-auto mb-16 hover:opacity-90"
              onClick={() => setOpen(true)}
            >
              {t("Больше кейсов")}
            </button>
          ) : (
            ""
          )}
          {open ? (
            <>
              <div className="cards-box md:mb-36 mb-10">
                <ResultCard
                  bgURL={img13}
                  cardHeading="Assist"
                  cardText={t(
                    "Продажа удалённого ассистента для предпринимателей"
                  )}
                  advertPrice="200"
                  selledCount="6,1$"
                  itemPrice={`1 ${t("мес")}`}
                  adverText={t("целевых обращений")}
                  counText={t("стоимость заявки")}
                  priceText={t("длительность кампании")}
                  btnText={t("ХОЧУ ТАК ЖЕ")}
                />
              </div>
              <div className="cards-box md:mb-36 mb-10">
                <ResultCard
                  bgURL={img14}
                  cardHeading="Bita.kz"
                  cardText={t(
                    "Привлечение клиентов для для полного сопровождения бизнеса связанного с Китаем"
                  )}
                  advertPrice="500"
                  selledCount="0,5$"
                  itemPrice={`1 ${t("мес")}`}
                  adverText={t("целевых обращений")}
                  counText={t("стоимость заявки")}
                  priceText={t("длительность кампании")}
                  btnText={t("ОБСУДИТЬ ПРОЕКТ")}
                />
              </div>
              <div className="cards-box md:mb-36 mb-10">
                <ResultCard
                  bgURL={img15}
                  cardHeading="Gabri"
                  cardText={t("Строительство домов под ключ")}
                  advertPrice="130"
                  selledCount="3,5$"
                  itemPrice={`2 ${t("мес")}`}
                  adverText={t("целевых обращений")}
                  counText={t("стоимость заявки")}
                  priceText={t("длительность кампании")}
                  btnText={t("ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ")}
                />
              </div>
              <div className="cards-box md:mb-36 mb-10">
                <ResultCard
                  bgURL={img16}
                  cardHeading="Sun Garden"
                  cardText={t("Озеленение участков, продажа рулонного газона")}
                  advertPrice="150"
                  selledCount="2,5$"
                  itemPrice={`1 ${t("мес")}`}
                  adverText={t("целевых обращений")}
                  counText={t("стоимость заявки")}
                  priceText={t("длительность кампании")}
                  btnText={t("ХОЧУ ТАК ЖЕ")}
                />
              </div>
              <div className="cards-box md:mb-36 mb-10">
                <ResultCard
                  bgURL={img17}
                  cardHeading="Rois"
                  cardText={t("Продажа разработок презентаций")}
                  advertPrice="100"
                  selledCount="5,5$"
                  itemPrice={`2 ${t("мес")}`}
                  adverText={t("целевых обращений")}
                  counText={t("стоимость заявки")}
                  priceText={t("длительность кампании")}
                  btnText={t("ОБСУДИТЬ ПРОЕКТ")}
                />
              </div>
              <div className="cards-box md:mb-36 mb-10">
                <ResultCard
                  bgURL={img18}
                  cardHeading="Panorama"
                  cardText={t("Остекление фасадов зданий")}
                  advertPrice="136"
                  selledCount="2,5$"
                  itemPrice={`2 ${t("мес")}`}
                  adverText={t("целевых обращений")}
                  counText={t("стоимость заявки")}
                  priceText={t("длительность кампании")}
                  btnText={t("ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ")}
                />
              </div>
              <div className="cards-box md:mb-36 mb-10">
                <ResultCard
                  bgURL={img19}
                  cardHeading="Rodos"
                  cardText={t("Продажа входных и межкомнатных дверей")}
                  advertPrice="256"
                  selledCount="1,2$"
                  itemPrice={`2 ${t("мес")}`}
                  adverText={t("целевых обращений")}
                  counText={t("стоимость заявки")}
                  priceText={t("длительность кампании")}
                  btnText={t("ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ")}
                />
              </div>
              <div className="cards-box md:mb-36 mb-10">
                <ResultCard
                  bgURL={img20}
                  cardHeading="ZBIS.CLUB"
                  cardText={t("Онлайн клуб предпринимателей")}
                  advertPrice="157"
                  selledCount="1,2$"
                  itemPrice={`1 ${t("мес")}`}
                  adverText={t("целевых обращений")}
                  counText={t("стоимость заявки")}
                  priceText={t("длительность кампании")}
                  btnText={t("ХОЧУ ТАК ЖЕ")}
                />
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default Results;
