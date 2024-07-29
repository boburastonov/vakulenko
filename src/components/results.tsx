import React, { FC } from "react";
import ResultCard from "./result-card";
import img1 from "../assets/g63.jpg";
import img2 from "../assets/summit.png";
import img3 from "../assets/tahoe.jpg";
import img4 from "../assets/townhouse.jpg";
import img5 from "../assets/kinder.jpg";
import img6 from "../assets/juniper.jpg";
import img7 from "../assets/airplane.jpg";
import img8 from "../assets/eco-ware.jpg";
import img9 from "../assets/Pension.jpg";
import img10 from "../assets/china.jpg";
import img11 from "../assets/11.png";
import img12 from "../assets/12.png";
import img13 from "../assets/13.png";
import img14 from "../assets/14.png";
import img15 from "../assets/15.png";
import img16 from "../assets/16.png";
import img17 from "../assets/17.png";
import img18 from "../assets/18.png";
import img19 from "../assets/19.png";
import img20 from "../assets/20.png";

const Results: React.FC = () => {
  return (
    <section id="portfolio">
      <div className="lg:max-w-[1480px] md:w-full py-11 text-center mx-auto">
        <div className="md:w-[60%] w-[75%] md:mb-28 mb-10 mx-auto text-black">
          <h1 className="lg:text-[52px] lg:leading-[81px] md:text-[32px] md:leading-[50px] md:font-bold md:mb-4 lg:relative font-semibold text-[26px] mb-2">
            Результаты <span className="lg:absolute left-10 lg:block w-[350px] h-[2px] bg-[#2e7bff] md:hidden"></span> моих клиентов
          </h1>
          <p className="md:text-[20px] md:font-bold md:leading-[31px] text-[17px] font-semibold leading-[26px]">
            Ознакомьтесь с моими кейсами, где с помощью инструментов
            таргетированной рекламы я сгенерировал более 1 000 000$ прибыли
            клиентам
          </p>
        </div>
        <div className="cards">
          <div className="cards-box md:mb-36 mb-10">
            <ResultCard
              bgURL={img1}
              cardHeading="Пригон элитных авто"
              cardText="Пригон элитных автомобилей под заказ"
              advertPrice="2800$"
              selledCount="90"
              itemPrice="3,6 млн $"
              adverText="Инвестиции в рекламу"
              counText="Продажи"
              priceText="Продали авто на"
              btnText="ХОЧУ ТАК ЖЕ"
            />
          </div>
          <div className="cards-box md:mb-36 mb-10">
            <ResultCard
              bgURL={img2}
              cardHeading="Realty Summit"
              cardText="Продажа билетов на саммит."
              advertPrice="2594$"
              selledCount="473"
              itemPrice="56 059$"
              adverText="Инвестиции в рекламу"
              counText="Продажи"
              priceText="Чистой прибыли"
              btnText="ОБСУДИТЬ ПРОЕКТ"
            />
          </div>
          <div className="cards-box md:mb-36 mb-10">
            <ResultCard
              bgURL={img3}
              cardHeading="Пригон авто из США"
              cardText="Пригон автомобилей под заказ"
              advertPrice="500"
              selledCount="0,8$"
              itemPrice="2 мес."
              adverText="целевых обращений"
              counText="стоимость заявки"
              priceText="длительность кампании"
              btnText="ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ"
            />
          </div>
          <div className="cards-box md:mb-36 mb-10">
            <ResultCard
              bgURL={img4}
              cardHeading="TOWNHOUSE"
              cardText="Продажа таун-хаусов"
              advertPrice="870"
              selledCount="0,68$"
              itemPrice="3 мес."
              adverText="целевых обращений"
              counText="стоимость заявки"
              priceText="длительность кампании"
              btnText="ХОЧУ ТАК ЖЕ"
            />
          </div>
          <div className="cards-box md:mb-36 mb-10">
            <ResultCard
              bgURL={img5}
              cardHeading="Большие киндеры"
              cardText="Привлечение клиентов покупку больших подарочных киндеров"
              advertPrice="1200"
              selledCount="0,87$"
              itemPrice="2 мес."
              adverText="целевых обращений"
              counText="стоимость заявки"
              priceText="длительность кампании"
              btnText="ОБСУДИТЬ ПРОЕКТ"
            />
          </div>
          <div className="cards-box md:mb-36 mb-10">
            <ResultCard
              bgURL={img6}
              cardHeading="Продажа елок в США"
              cardText="Продажа дизайнерских деревянных елок на территории США"
              advertPrice="150 000$"
              selledCount="800$"
              itemPrice="1 мес."
              adverText="продали на сумму"
              counText="рекламный бюджет"
              priceText="длительность кампании"
              btnText="ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ"
            />
          </div>
          <div className="cards-box md:mb-36 mb-10">
            <ResultCard
              bgURL={img7}
              cardHeading="Авиационный центр в Латвии"
              cardText="Рекламная кампания была нацелен на привлечение абитуриентов на обучение профессии авиамеханик"
              advertPrice="500"
              selledCount="1,2$"
              itemPrice="1 мес."
              adverText="целевых обращений"
              counText="стоимость заявки"
              priceText="длительность кампании"
              btnText="ХОЧУ ТАК ЖЕ"
            />
          </div>
          <div className="cards-box md:mb-36 mb-10">
            <ResultCard
              bgURL={img8}
              cardHeading="Оптовая продажа экопосуды"
              cardText="Целью рекламной кампании было привлечение оптовых клиентов на покупок биоразлагаемой посуды"
              advertPrice="1200"
              selledCount="0,7$"
              itemPrice="2 мес."
              adverText="целевых обращений"
              counText="стоимость заявки"
              priceText="длительность кампании"
              btnText="ОБСУДИТЬ ПРОЕКТ"
            />
          </div>
          <div className="cards-box md:mb-36 mb-10">
            <ResultCard
              bgURL={img9}
              cardHeading="Пансионат для престарелых"
              cardText="Привлечение клиентов для обслуживания их пожилых родственников"
              advertPrice="122"
              selledCount="2$"
              itemPrice="3 нед."
              adverText="целевых обращений"
              counText="стоимость заявки"
              priceText="длительность кампании"
              btnText="ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ"
            />
          </div>
          <div className="cards-box md:mb-36 mb-10">
            <ResultCard
              bgURL={img10}
              cardHeading="Бизнес с Китаем"
              cardText="Привлечение клиентов для для полного сопровождения бизнеса связанного с Китаем"
              advertPrice="280"
              selledCount="1,6$"
              itemPrice="1 мес."
              adverText="целевых обращений"
              counText="стоимость заявки"
              priceText="длительность кампании"
              btnText="ХОЧУ ТАК ЖЕ"
            />
          </div>
          <div className="cards-box md:mb-36 mb-10">
            <ResultCard
              bgURL={img11}
              cardHeading="Европейский квартал"
              cardText="Привлечение клиентов для элитного застройщика в Житомире"
              advertPrice="1485"
              selledCount="0,55$"
              itemPrice="7 мес."
              adverText="целевых обращений"
              counText="стоимость заявки"
              priceText="длительность кампании"
              btnText="ОБСУДИТЬ ПРОЕКТ"
            />
          </div>
          <div className="cards-box md:mb-36 mb-10">
            <ResultCard
              bgURL={img12}
              cardHeading="Event Academy"
              cardText="Продажа билетов на курсы по онлайн ивентам через вебинар"
              advertPrice="1351"
              selledCount="1,38$"
              itemPrice="7 дн."
              adverText="Регистрация на вебинар"
              counText="стоимость регистрации"
              priceText="длительность кампании"
              btnText="ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ"
            />
          </div>
          <div className="cards-box md:mb-36 mb-10">
            <ResultCard
              bgURL={img13}
              cardHeading="Assist"
              cardText="Продажа удалённого ассистента для предпринимателей"
              advertPrice="200"
              selledCount="6,1$"
              itemPrice="1 мес."
              adverText="целевых обращений"
              counText="стоимость заявки"
              priceText="длительность кампании"
              btnText="ХОЧУ ТАК ЖЕ"
            />
          </div>
          <div className="cards-box md:mb-36 mb-10">
            <ResultCard
              bgURL={img14}
              cardHeading="Bita.kz"
              cardText="Привлечение клиентов для для полного сопровождения бизнеса связанного с Китаем"
              advertPrice="500"
              selledCount="0,5$"
              itemPrice="1 мес."
              adverText="целевых обращений"
              counText="стоимость заявки"
              priceText="длительность кампании"
              btnText="ОБСУДИТЬ ПРОЕКТ"
            />
          </div>
          <div className="cards-box md:mb-36 mb-10">
            <ResultCard
              bgURL={img15}
              cardHeading="Gabri"
              cardText="Строительство домов под ключ"
              advertPrice="130"
              selledCount="3,5$"
              itemPrice="2 мес."
              adverText="целевых обращений"
              counText="стоимость заявки"
              priceText="длительность кампании"
              btnText="ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ"
            />
          </div>
          <div className="cards-box md:mb-36 mb-10">
            <ResultCard
              bgURL={img16}
              cardHeading="Sun Garden"
              cardText="Озеленение участков, продажа рулонного газона"
              advertPrice="150"
              selledCount="2,5$"
              itemPrice="1 мес."
              adverText="целевых обращений"
              counText="стоимость заявки"
              priceText="длительность кампании"
              btnText="ХОЧУ ТАК ЖЕ"
            />
          </div>
          <div className="cards-box md:mb-36 mb-10">
            <ResultCard
              bgURL={img17}
              cardHeading="Rois"
              cardText="Продажа разработок презентаций"
              advertPrice="100"
              selledCount="5,5$"
              itemPrice="2 мес."
              adverText="целевых обращений"
              counText="стоимость заявки"
              priceText="длительность кампании"
              btnText="ОБСУДИТЬ ПРОЕКТ"
            />
          </div>
          <div className="cards-box md:mb-36 mb-10">
            <ResultCard
              bgURL={img18}
              cardHeading="Panorama"
              cardText="Остекление фасадов зданий"
              advertPrice="136"
              selledCount="2,5$"
              itemPrice="2 мес."
              adverText="целевых обращений"
              counText="стоимость заявки"
              priceText="длительность кампании"
              btnText="ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ"
            />
          </div>
          <div className="cards-box md:mb-36 mb-10">
            <ResultCard
              bgURL={img19}
              cardHeading="Rodos"
              cardText="Продажа входных и межкомнатных дверей"
              advertPrice="256"
              selledCount="1,2$"
              itemPrice="2 мес."
              adverText="целевых обращений"
              counText="стоимость заявки"
              priceText="длительность кампании"
              btnText="ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ"
            />
          </div>
          <div className="cards-box md:mb-36 mb-10">
            <ResultCard
              bgURL={img20}
              cardHeading="ZBIS.CLUB"
              cardText="Онлайн клуб предпринимателей"
              advertPrice="157"
              selledCount="1,2$"
              itemPrice="1 мес."
              adverText="целевых обращений"
              counText="стоимость заявки"
              priceText="длительность кампании"
              btnText="ХОЧУ ТАК ЖЕ"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
